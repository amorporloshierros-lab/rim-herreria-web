// ════════════════════════════════════════════════════════════════
//  api/chat.js  —  Backend del chatbot R.I.M (proxy seguro a la API de Claude)
//  Plataforma: Vercel (Serverless Function). También sirve para Netlify con
//  mínimos cambios. La API key NUNCA va en el HTML: vive acá, como variable
//  de entorno ANTHROPIC_API_KEY.
//
//  DEPLOY RÁPIDO (ver README.md):
//   1. Subí esta carpeta a Vercel.
//   2. En Vercel → Settings → Environment Variables: ANTHROPIC_API_KEY = tu key.
//   3. Copiá la URL pública y pegala en index.html → RIM.chatEndpoint
//      (ej: "https://tu-proyecto.vercel.app/api/chat").
// ════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  // CORS (permite que el HTML llame a esta función)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY" });

  try {
    const { system, messages } = req.body || {};

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001", // rápido y económico para un chat de web
        max_tokens: 400,
        system: system || "Sos el asistente de R.I.M Herrería.",
        // Limitamos el historial a los últimos 10 turnos para controlar el costo
        messages: (messages || []).slice(-10),
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      console.error("Anthropic error:", data);
      return res.status(502).json({ error: "Error del proveedor de IA", reply: "" });
    }

    const reply =
      Array.isArray(data.content) && data.content[0] && data.content[0].text
        ? data.content[0].text
        : "Disculpá, no te pude responder ahora. Escribinos por WhatsApp y te ayudamos.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno", reply: "" });
  }
}

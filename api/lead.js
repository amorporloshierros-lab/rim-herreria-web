// ════════════════════════════════════════════════════════════════
//  api/lead.js  —  Recepción de leads del chatbot (OPCIONAL)
//  Por defecto el formulario del chat ya arma un mensaje de WhatsApp con
//  los datos cargados (funciona sin backend). Esta función es por si querés
//  ADEMÁS guardar/avisar cada lead: mandarlo por email, a una planilla, a una
//  base, etc. Conectá acá lo que uses.
//
//  Para activarla: pegá su URL pública en index.html → RIM.leadEndpoint.
// ════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { nombre, telefono, tipo, detalle } = req.body || {};
    const lead = {
      nombre, telefono, tipo, detalle,
      fecha: new Date().toISOString(),
    };

    // 👇 ACÁ conectás el destino del lead. Ejemplos:
    //  - Enviar email con Resend/SendGrid
    //  - Guardar en Google Sheets (Apps Script webhook)
    //  - Guardar en Supabase / una base de datos
    //  - Mandar a un CRM (HubSpot, etc.)
    console.log("NUEVO LEAD R.I.M:", lead);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
}

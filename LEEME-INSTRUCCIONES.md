# Sitio R.I.M Herrería — Cómo usarlo

Sitio web cinematográfico de una sola página para R.I.M Herrería en General (Mario Barrios), con estética oscura industrial premium, hero en video que se congela en el emblema forjado, secciones editoriales, SEO local y un chatbot humanizado con captura de leads.

## Archivos

```
ddesing/
├── index.html                 ← el sitio completo (abrilo en el navegador)
├── assets/
│   ├── hero.mp4               ← video del hero (ya copiado)
│   ├── hero-poster.jpg        ← último frame (fallback / reduced-motion)
│   └── logo-rim.png           ← ⚠️ FALTA: poné acá el logo (ver abajo)
├── api/
│   ├── chat.js               ← backend del chatbot con IA (Claude)
│   └── lead.js               ← recepción opcional de leads
└── LEEME-INSTRUCCIONES.md
```

## 1) ⚠️ Falta el logo (paso obligatorio)

El logo (la segunda imagen, el hexágono R.I.M con fondo transparente) todavía no está como archivo. Guardá esa imagen como:

```
ddesing/assets/logo-rim.png
```

Mientras no esté, arriba a la izquierda se ve un cartel de texto "R.I.M" como respaldo. Apenas pongas el PNG, aparece el logo real. Lo ideal es PNG con fondo transparente, alto ~120px o más.

## 2) Ver el sitio

Doble clic en `index.html`. Funciona local. El chatbot ya responde en **modo local** (respuestas guiadas sobre servicios, zona, presupuestos) y el botón de WhatsApp y la carga de leads funcionan sin nada más.

## 3) Activar el chatbot con IA real (Claude)

El asistente ya funciona, pero si querés que responda **cualquier cosa con IA de verdad**, hace falta un pequeño backend (la API key no puede ir en el HTML por seguridad). Es gratis/barato y rápido:

1. Creá una cuenta en **Vercel** (vercel.com) e importá esta carpeta (o subila con `vercel deploy`).
2. En Vercel → **Settings → Environment Variables**, agregá:
   `ANTHROPIC_API_KEY = ` *(tu clave de la API de Claude, de console.anthropic.com)*
3. Vercel te da una URL pública. Abrí `index.html`, buscá el bloque `const RIM = {` (arriba en el `<script>`) y pegá:
   ```js
   chatEndpoint: "https://TU-PROYECTO.vercel.app/api/chat",
   ```
4. Listo: el chat ahora usa Claude. Si el backend falla, vuelve solo al modo local.

> El backend usa el modelo `claude-haiku-4-5` (rápido y económico) y limita el historial a los últimos turnos para controlar el costo. Podés cambiar el modelo en `api/chat.js`.

## 4) Leads (opcional)

El formulario "Dejar mis datos" del chat ya arma un mensaje de WhatsApp con los datos cargados — funciona sin backend. Si además querés **guardar cada lead** (email, planilla, CRM, base de datos), activá `api/lead.js` y pegá su URL en `RIM.leadEndpoint`. Adentro del archivo hay comentado dónde conectar el destino.

## 5) Antes de publicar — completar / editar

En `index.html` están marcados con `★ EDITAR` los datos a confirmar:

- **Años de oficio**: el hero dice "+15" como ejemplo. Poné el número real de Mario.
- **Zona**: está armado para Pilar / Escobar / zona norte. Si cambia, actualizá el `<title>`, la meta description y los textos.
- **Dominio**: cambiá `rimherreria.com.ar` en las etiquetas `canonical` y Open Graph por el dominio real.
- **Fotos de obras**: la sección "Obras" usa placeholders metálicos. Reemplazalos por fotos reales de trabajos terminados (es lo que más sube la conversión).

## Detalles técnicos

- HTML único, sin frameworks. Animaciones con GSAP + ScrollTrigger, scroll suave con Lenis (todo desde CDN).
- Tipografías Fraunces (títulos) + Archivo (cuerpo).
- Respeta `prefers-reduced-motion` (sin animaciones ni autoplay si el usuario lo pide).
- Responsive mobile-first. SEO local con schema `HomeAndConstructionBusiness`.
- Detalle de firma: el video forja el emblema y se congela; las líneas de soldadura naranjas se "dibujan" bajo cada título al hacer scroll.

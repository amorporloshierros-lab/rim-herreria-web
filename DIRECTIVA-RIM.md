# DIRECTIVA DE BUILD — Sitio R.I.M Herrería

> Este archivo es la instrucción directa para construir/editar el sitio. Se lee SIEMPRE antes de tocar `index.html`. Combina el DESIGN SYSTEM (anti-genérico) con el CONTEXTO del cliente y con las decisiones tomadas en las rondas, que viven en `rim.config.js`.

## Cadena de archivos (orden de autoridad)
1. `rim.config.js` — decisiones concretas de las rondas. **Manda sobre todo lo demás.**
2. `DESIGN-SYSTEM-anti-generico.md` — reglas anti-genérico y principios.
3. `CONTEXTO-CLIENTE-RIM.md` — datos del negocio.
4. Esta directiva — cómo se combinan.

## Reglas irrompibles (del design system)
- Tipografía display NUNCA Inter/Roboto. Máximo 2-3 colores. Acento (naranja) con cuentagotas.
- Nada de 3 cards iguales en fila. Padding variable entre secciones. Layout asimétrico.
- Animar solo transform/opacity. Lento y suave salvo que el config diga otra cosa.
- UN detalle de firma memorable (definido en `config.estructura.detalleFirma`).
- `prefers-reduced-motion` respetado. Mobile-first.
- Sin emojis. Copy con voz real de Mario (de las rondas), no relleno de marketing.

## Cómo el config dirige el build
El `index.html` lee `window.RIM_CONFIG` al cargar y aplica:
- `direccion.modoColor` → set de variables CSS de fondo.
- `direccion.tipografiaDisplay` → familia y pesos del display.
- `direccion.intensidadAnimacion` + `movimiento.*` → duraciones y easings de GSAP.
- `estructura.nav / ordenSecciones / presentacionServicios` → markup y orden.
- `estructura.detalleFirma` → cuál efecto de firma se activa.
- `color.*`, `hero.*`, `servicios.*`, `cierre.*`, `chatbot.*` → contenido y estilo.

Todo lo que esté en `PENDIENTE` todavía no se decidió: NO se inventa, queda marcado.

## Proceso
1. Correr rondas (4 preguntas c/u, hasta 10) — solo decisiones de diseño/UX concretas.
2. Tras cada ronda, volcar respuestas en `rim.config.js` y marcar la ronda como hecha.
3. Cuando haya suficientes decisiones, wirear `index.html` para consumir el config.
4. Checklist final del design system antes de entregar.

## Prueba de fuego (no entregar sin esto)
- ¿Si tapo el logo, se nota que es R.I.M y no cualquier herrería?
- ¿Cada decisión visible salió de una ronda, no de un default?

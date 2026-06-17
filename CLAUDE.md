# CLAUDE.md — Directiva de trabajo (carpeta ddesing)

> Este archivo se lee como contexto directo en CADA sesión dentro de esta carpeta. Define cómo construir webs acá: con identidad propia, NUNCA genéricas. Sintetiza el DESIGN SYSTEM anti-genérico y el CONTEXTO del cliente R.I.M. Archivos de apoyo en la misma carpeta: `DESIGN-SYSTEM-anti-generico.md`, `CONTEXTO-CLIENTE-RIM.md`, `DIRECTIVA-RIM.md`, `rim.config.js`.

---

## 0. INSTRUCCIÓN DE APERTURA (siempre primero)

Esta interfaz NO debe parecer generada por IA. Evitá todo patrón frecuente en UI generada por IA. Hacé una elección fuerte y con opinión en tipografía, color y layout — y comprometete con ella. Tratá cada proyecto como lo haría un estudio premiado en Awwwards, no como un template de SaaS. El vacío, la tipografía y la contención son las herramientas. Si falta contexto, PREGUNTÁ (no inventes ni promedies). Lo que no esté decidido por el cliente, lo decide el promedio — y ahí aparece lo genérico.

---

## 1. LISTA NEGRA — NUNCA HACER

- Fuente Inter/Roboto/system-sans como tipografía principal.
- Gradiente violeta→rosa o cualquier gradiente "tech startup".
- Azul corporativo (#3B82F6 y similares) como acento por default.
- 3-4 cards iguales en fila con el mismo tratamiento.
- Card redondeada + sombra suave como unidad base de todo.
- Mismo padding vertical en todas las secciones.
- Patrón repetido "label + título centrado + grid" en cada sección.
- Hero con gradiente suave + botón "Get Started" centrado.
- Iconitos genéricos (Heroicons/Feather) en círculos de colores.
- Testimonios falsos en 3 columnas con foto redonda + estrellitas.
- Emojis como decoración (salvo pedido explícito).
- Todo centrado y simétrico — la simetría perfecta grita "máquina".
- CTAs genéricos ("Enviar", "Get Started", "Saber más") y copy de relleno.
- Métricas inventadas y stock photos genéricas.

---

## 2. PRINCIPIOS POSITIVOS

- **Tipografía protagonista:** una serif con carácter (Fraunces, PP Editorial, Instrument Serif) + una sans limpia (Archivo, Geist, Söhne). Títulos grandes y livianos (300-400), itálicas para acentos, contraste de escala dramático.
- **Color con contención:** 2-3 colores máximo. El acento de marca con cuentagotas. El vacío (negro/blanco) es el lujo.
- **Layout asimétrico:** romper la grilla, listas editoriales numeradas (01, 02), padding variable, mucho aire entre secciones.
- **Movimiento con criterio:** lento y suave (expo.out, 1-1.3s), solo transform/opacity, revelados al scroll, parallax sutil. UN detalle de firma memorable por sitio. `prefers-reduced-motion` siempre.
- **Copy con voz real** del cliente, no marketing vacío. CTAs que describen el resultado.

---

## 3. TOKENS BASE (ajustar acento por cliente)

```css
:root{
  --fondo:   #0B0B0D;  --fondo-2: #121216;
  --texto:   #EDEAE3;  --texto-2: #C9C5BC;  --gris: #6E6B66;
  --linea:   rgba(237,234,227,.12);
  --acento:  #E8911C;  /* color del cliente, usar poco */
  --r:       2px;      /* radios mínimos, 0-4px */
}
```

Tipografías por rubro: oficio/industrial → Fraunces + Archivo · tech → Geist · editorial/lujo → PP Editorial + Söhne · audaz → Anton + Inter Tight.

---

## 4. STACK TÉCNICO (HTML único)

GSAP + ScrollTrigger + Lenis desde CDN. Grano SVG sutil sobre todo. Un solo archivo HTML autocontenido. Mobile-first. Script dentro de `window.addEventListener('load')` con `gsap.registerPlugin(ScrollTrigger)`, check de reduced-motion y Lenis sincronizado.

---

## 5. ESTRUCTURA RECOMENDADA (no la típica)

Hero (video/material real + título grande + meta-data en fila) → Manifiesto (frase que se revela al scroll) → Obras/servicios (lista editorial numerada que se expande, NO grid) → Disciplinas (split asimétrico) → Proceso (timeline horizontal) → CTA (palabra gigante watermark + un link) → Footer oscuro con status dot pulsante.

---

## 6. CHECKLIST ANTES DE ENTREGAR

¿La fuente no es Inter/Roboto? · ¿Máximo 2-3 colores? · ¿El acento no satura? · ¿Hay algo asimétrico? · ¿Los servicios NO son 3 cards iguales? · ¿Hay UN detalle de firma? · ¿El padding varía? · ¿Animaciones lentas y suaves? · ¿`prefers-reduced-motion`? · **¿Si tapo el logo, se nota que es ESTE cliente y no cualquiera?** · ¿Pasaría como trabajo de estudio, no de IA?

---

## 7. CONTEXTO DEL CLIENTE — R.I.M HERRERÍA

- **Negocio:** R.I.M — Herrería en General. Titular: Mario Barrios.
- **WhatsApp:** +54 9 348 4567900 · **Instagram:** rim.herreria
- **Rubro:** herrería / metalurgia / soldadura. Estilo: industrial, metálico, robusto, masculino.
- **Servicios:** portones (corredizo y dos hojas), rejas, pérgolas y techados, puertas, parrillas, escaleras y barandas; ampliar a trabajos industriales/civiles y a medida.
- **Identidad:** logo hexágono con engranaje + máquina de corte láser/plasma + "R.I.M" sobre banda negra. Paleta: naranja `#E8911C` (acento), navy `#0D1B2A`/`#14233A` (fondos), negro texturado, gris acero, blanco.
- **Objetivo:** SEO local (herrería/portones/rejas + zona) + conversión a WhatsApp. UX a medida del rubro, NO plantilla.
- **Directivas del cliente:** (1) nada genérico ni tabla/plantilla; (2) chatbot abajo a la derecha; (3) video hero que se reproduce una vez y se congela en el último frame hasta recargar; (4) colores de identidad; (5) logo arriba a la izquierda; (6) transiciones al scroll; (7) al clickear un botón, animación que transiciona del botón a la función; (8) ofrecer industrial/civil y a medida; (9) SIN emojis.
- **Activos:** video hero `assets/hero.mp4` (forja el emblema y congela), póster `assets/hero-poster.jpg`, logo `assets/logo-rim.png` (pendiente de cargar el PNG real).

---

## 8. FUENTE DE VERDAD POR PROYECTO

Las decisiones concretas de diseño (color, tipografía, animación, estructura, etc.) viven en `rim.config.js` y MANDAN sobre los defaults de este archivo. Lo que esté en `PENDIENTE` no se decidió todavía: no se inventa, se pregunta. Las preguntas se hacen en rondas de decisiones de diseño/UX concretas.

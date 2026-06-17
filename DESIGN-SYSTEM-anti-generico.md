# DESIGN SYSTEM — LCA Automatizaciones
## Antídoto anti-genérico · Sistema de diseño para webs con identidad propia

> **Cómo usar este archivo:** Pegalo (o referencialo) AL INICIO de cualquier conversación donde vayas a generar una web — conmigo, en Claude Code (como CLAUDE.md), en Cowork o en Claude Design. Lo primero que recibe el modelo define todo lo que construye después. Este archivo BLOQUEA los defaults genéricos y DEFINE elecciones con opinión. Va siempre acompañado del CONTEXTO CLIENTE del proyecto.

---

## 0. POR QUÉ EXISTE ESTE ARCHIVO (la causa raíz)

Las IAs generan webs genéricas porque fueron entrenadas con millones de UIs, y sin contexto fuerte convergen en el "promedio" de todo lo que vieron: card con bordes redondeados, fuente Inter, azul corporativo, grid de 3 columnas, hero con gradiente suave. No es un error — es el comportamiento por defecto cuando falta dirección.

La solución tiene TRES partes igual de importantes:

1. **PREGUNTAR** antes de construir (rondas de descubrimiento — sección 9). Sin contexto específico, no hay forma de no ser genérico.
2. **BLOQUEAR** los patrones genéricos (lista negra explícita — sección 2).
3. **DEFINIR** elecciones fuertes y con opinión (este sistema — secciones 3-8).

> Regla madre: **si un detalle no está decidido por vos, lo decide el promedio.** Cada campo vacío del brief es una puerta para que entre lo genérico.

---

## 1. INSTRUCCIÓN DE APERTURA (pegar siempre primero)

```
Esta interfaz NO debe parecer generada por IA. Evitá todo patrón de diseño que
aparezca frecuentemente en UI generada por IA. Hacé una elección fuerte y con
opinión en tipografía, color y layout — y comprometete con ella. Tratá este
proyecto como lo haría un estudio de diseño premiado en Awwwards, no como un
template de SaaS. El vacío, la tipografía y la contención son las herramientas.
Antes de construir, si falta contexto, PREGUNTÁ (no inventes ni promedies).
Seguí el DESIGN SYSTEM de abajo al pie de la letra.
```

---

## 2. LISTA NEGRA — NUNCA HACER ESTO (anti-genérico)

### Tipografía
- ❌ Fuente Inter, Roboto o system-sans como tipografía principal
- ❌ Todo el texto en el mismo peso y tamaño (sin contraste de escala)
- ❌ Títulos en bold por default cuando podrían ser grandes y livianos

### Color
- ❌ Gradiente violeta→rosa, o cualquier gradiente "tech startup"
- ❌ Azul corporativo (`#3B82F6` y similares) como color de acento por default
- ❌ Más de 3 colores compitiendo
- ❌ El color de marca saturando toda la pantalla en vez de usarse como acento

### Layout
- ❌ 3 (o 4) cards iguales en fila con el mismo tratamiento
- ❌ Card con bordes redondeados + sombra suave como unidad base de todo
- ❌ El mismo padding vertical en todas las secciones
- ❌ Patrón repetido "label + título centrado + grid" en cada sección
- ❌ Hero con gradiente suave + botón "Get Started" centrado
- ❌ Todo centrado y simétrico — la simetría perfecta grita "lo decidió la máquina"
- ❌ Footer de 4 columnas idénticas tipo plantilla

### Decoración y contenido
- ❌ Iconitos genéricos (Heroicons/Feather) metidos en círculos de colores
- ❌ Testimonios falsos en 3 columnas con foto redonda + estrellitas
- ❌ Emojis como decoración (salvo que el cliente los pida)
- ❌ Stock photos genéricas de "equipo dándose la mano" o "laptop en escritorio"
- ❌ Números/métricas inventadas ("+10.000 clientes felices") sin respaldo real

### Copy (texto)
- ❌ "Bienvenido a [marca]", "Soluciones a tu medida", "Tu socio de confianza" (relleno vacío)
- ❌ CTAs genéricos: "Enviar", "Get Started", "Click aquí", "Saber más"
- ❌ Jerga corporativa que no dice nada ("sinergia", "soluciones integrales 360°")

### Movimiento
- ❌ Animaciones rápidas y nerviosas (todo en 0.2s) que gritan "plantilla"
- ❌ Fade-in genérico idéntico en cada elemento
- ❌ Ignorar `prefers-reduced-motion`

---

## 3. PRINCIPIOS POSITIVOS (lo que SÍ define identidad)

### Tipografía como protagonista
- Elegir UNA serif con carácter para títulos (ej: Fraunces, PP Editorial New, Instrument Serif) + UNA sans limpia para cuerpo (ej: Archivo, Geist, Söhne).
- Títulos GRANDES y livianos (peso 300-400), no bold por default.
- Usar itálicas para acentos, no solo negrita.
- El texto mismo es diseño: tamaños dramáticos, mucho contraste de escala (un H1 de 8rem al lado de un cuerpo de 1rem).

### Color con contención (la regla de oro premium)
- Paleta de 2-3 colores MÁXIMO. Los mejores sitios de oficio usan solo 2.
- Referencia real (Knupfer Metallbau, herrería premiada): negro `#030303` + blanco `#FCFCFC` y NADA más.
- El color de marca (ej: el naranja del cliente) usado con CUENTAGOTAS — solo como acento de precisión (un subrayado, un número, un borde de foco), nunca saturando.
- El vacío (negro o blanco) ES el lujo. No llenar todo.

### Layout asimétrico e intencional
- Romper la grilla: elementos que se corren, números que sobresalen, texto que no está centrado.
- Listas editoriales numeradas (01, 02, 03) en vez de grids de cards.
- Mucho espacio en blanco entre secciones — que respire.
- Padding VARIABLE entre secciones, no uniforme (una sección apretada, la siguiente que respira).

### Movimiento con criterio
- Animaciones lentas y suaves (`expo.out`, 1-1.3s) — la lentitud comunica calidad.
- Solo animar `transform` y `opacity` (rendimiento).
- Texto que se revela al scroll, parallax sutil, números que cuentan.
- UN detalle de firma memorable por sitio (algo que nadie más tiene).
- Respetar siempre `prefers-reduced-motion`.

### Copy con voz real
- Cada texto suena a una persona, no a un departamento de marketing.
- CTAs que describen el resultado: "Pedí tu presupuesto", no "Enviar".
- Frases reales del dueño > frases pulidas vacías.

---

## 4. TOKENS BASE (ajustar el acento por cliente)

```css
:root{
  /* Estructura — mantener oscuro premium o claro editorial */
  --fondo:        #0B0B0D;   /* casi negro, no negro puro */
  --fondo-2:      #121216;
  --texto:        #EDEAE3;   /* hueso, no blanco puro */
  --texto-2:      #C9C5BC;
  --gris:         #6E6B66;
  --linea:        rgba(237,234,227,.12);

  /* ACENTO — cambiar por el color del cliente, usar poco */
  --acento:       #E8911C;   /* ej: naranja del cliente */

  /* Radios — mínimos, NO redondeado-suave genérico */
  --r:            2px;       /* máximo 2-4px, o 0 */

  /* Escala tipográfica dramática (contraste alto) */
  --txt-xs:       0.8rem;
  --txt-base:     1rem;
  --txt-lg:       1.5rem;
  --txt-display:  clamp(3rem, 9vw, 9rem);

  /* Ritmo de espaciado VARIABLE (no uniforme) */
  --sec-apretada: 4rem;
  --sec-normal:   8rem;
  --sec-amplia:   14rem;

  /* Movimiento */
  --ease:         cubic-bezier(0.16, 1, 0.3, 1); /* ~expo.out */
  --dur:          1.1s;
}
```

### Tipografías sugeridas (elegir según rubro)
- **Oficio/industrial premium:** Fraunces (serif) + Archivo (sans)
- **Tech/moderno:** Geist + Geist Mono
- **Editorial/lujo:** PP Editorial New + Söhne
- **Audaz/brutal:** Anton + Inter Tight (única excepción a la regla de Inter)
- **Gastronómico/cálido:** Cormorant + Work Sans
- **Legal/institucional serio:** Newsreader + IBM Plex Sans

---

## 5. ESTRUCTURA RECOMENDADA (no la típica)

En vez de: hero → 3 features → testimonios → footer

Usar algo como:

1. **Hero** — video del material/trabajo real + título tipográfico grande + meta-data en fila (no botón centrado).
2. **Manifiesto** — una frase grande que se revela palabra por palabra al scroll.
3. **Obras/servicios** — lista editorial numerada (01, 02...) que se expande al hover, NO grid de cards.
4. **Disciplinas** — split asimétrico (ej: civil / industrial).
5. **Proceso** — pasos en línea de tiempo horizontal con números.
6. **Prueba/confianza** — obra real destacada a pantalla completa, o cita real del cliente (no testimonios de relleno).
7. **CTA** — palabra gigante de fondo (watermark) + un solo link elegante.
8. **Footer** — oscuro, con animación de texto al scroll, status dot pulsante, NAP para SEO local.

> La estructura debe variar según el rubro. Ver sección 10 (mapa por rubro).

---

## 6. STACK TÉCNICO (HTML único)

```html
<link href="https://fonts.googleapis.com/css2?family=FUENTE_A&family=FUENTE_B&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.3.1/dist/lenis.min.js"></script>
```

- GSAP + ScrollTrigger para animaciones, Lenis para scroll suave.
- Grano sutil (textura SVG) sobre todo para sensación analógica premium.
- Todo en un solo archivo HTML autocontenido.
- Mobile-first responsive, `prefers-reduced-motion` respetado.

### 6.1 Snippets de referencia (copiar y adaptar)

**Video hero que se reproduce una vez y se congela:**
```html
<video id="hero-vid" autoplay muted playsinline preload="auto" poster="ultimo-frame.jpg">
  <source src="hero.mp4" type="video/mp4">
</video>
<script>
  const v = document.getElementById('hero-vid');
  v.addEventListener('ended', () => v.pause()); // queda en el último frame
  // Reduced motion: no reproducir, mostrar póster
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    v.removeAttribute('autoplay'); v.pause();
  }
</script>
```

**Lista editorial numerada que se expande al hover (NO grid de cards):**
```html
<ul class="obras">
  <li><span class="num">01</span><span class="titulo">Portones a medida</span></li>
  <li><span class="num">02</span><span class="titulo">Rejas de seguridad</span></li>
</ul>
```
```css
.obras li{ display:flex; gap:2rem; padding:2.5rem 0; border-top:1px solid var(--linea);
  transition: padding-left var(--dur) var(--ease), color var(--dur) var(--ease); }
.obras li:hover{ padding-left:2rem; color:var(--acento); }
.obras .num{ color:var(--gris); font-variant-numeric:tabular-nums; }
```

**Revelado de texto al scroll (lento y suave):**
```js
const lenis = new Lenis(); requestAnimationFrame(function r(t){ lenis.raf(t); requestAnimationFrame(r); });
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.from(el,{ y:40, opacity:0, duration:1.1, ease:'expo.out',
    scrollTrigger:{ trigger:el, start:'top 85%' } });
});
```

**Grano sutil sobre todo:**
```css
body::after{ content:''; position:fixed; inset:0; pointer-events:none; opacity:.04; z-index:9999;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
```

**CTA que transiciona del botón a la función (morph):**
```js
btn.addEventListener('click', () => {
  gsap.timeline()
    .to(btn, { scale:.96, duration:.15, ease:'power2.out' })
    .to(btn, { scale:1, duration:.4, ease:'expo.out' })
    .add(() => abrirWhatsApp(), '-=.2'); // la animación lleva a la función
});
```

---

## 7. REFERENCIAS REALES A IMITAR (no inventar)

Sitios premiados de oficio/metal/industrial — estudiar su estructura:

- **knupfer-metallbau.de** — herrería, Honorable Mention Awwwards. Negro+blanco, video del metal, animaciones sutiles. LA referencia principal.
- **Forged** (awwwards.com/sites/forged-1) — portfolio como taller digital explorable.
- **Forge Ideas** (forgeideas.com) — lado humano del oficio.

Otros oficios/industria para estudiar movimiento y contención:
- **igloo.inc** — uso dramático de 3D y scroll (para el "wow" de firma).
- **lusion.co** — detalle de firma memorable + WebGL sutil.
- **studiolumio / cuberto / locomotive.ca** — scroll suave, tipografía protagonista, layout asimétrico.

> Para clonar un estilo con precisión: abrir el sitio en Chrome → Inspeccionar → copiar el CSS aplicado (no solo la captura, el modelo no extrae bien estilos solo de imágenes). Guardá la URL + el CSS clave en esta sección cada vez que encuentres algo bueno.

---

## 8. CHECKLIST ANTES DE ENTREGAR

### Diseño
- [ ] ¿La fuente principal NO es Inter/Roboto?
- [ ] ¿Hay máximo 2-3 colores?
- [ ] ¿El acento se usa poco, no satura?
- [ ] ¿Hay algún elemento asimétrico, fuera de grilla?
- [ ] ¿Los servicios NO son 3 cards iguales?
- [ ] ¿Hay UN detalle de firma memorable?
- [ ] ¿El padding entre secciones varía?
- [ ] ¿Hay contraste de escala tipográfica fuerte (display enorme vs. cuerpo)?

### Movimiento
- [ ] ¿Las animaciones son lentas y suaves (1-1.3s, expo.out)?
- [ ] ¿Solo se animan transform y opacity?
- [ ] ¿Se respeta `prefers-reduced-motion`?

### Contenido y copy
- [ ] ¿El copy suena a persona real, no a marketing genérico?
- [ ] ¿Los CTAs describen el resultado (no "Enviar"/"Get Started")?
- [ ] ¿Las fotos son reales del cliente, no stock?
- [ ] ¿No hay métricas inventadas?

### Negocio
- [ ] ¿El SEO local está armado (title, meta, H1, alt, schema, NAP)?
- [ ] ¿La conversión está clara y a un clic (WhatsApp visible siempre)?

### Prueba de fuego
- [ ] ¿Si tapo el logo, igual se nota que es ESTE cliente y no cualquiera?
- [ ] ¿Pasaría como trabajo de un estudio, no de una IA?

---

## 9. RONDAS DE DESCUBRIMIENTO (preguntar SIEMPRE antes de construir)

> Estas rondas son el corazón del antídoto. La mayoría de las webs genéricas lo son porque nadie preguntó esto. Hacé las rondas en orden, con el cliente, y volcá las respuestas al CONTEXTO CLIENTE. No avances con campos vacíos.

### RONDA 1 — Identidad y propósito
1. ¿Qué hace exactamente el negocio, en una frase, como se lo explicarías a un vecino?
2. ¿Cuál es el ÚNICO objetivo de la web? (vender, generar consultas, mostrar trabajos, reservar)
3. ¿Qué acción querés que haga el visitante en los primeros 10 segundos?
4. ¿Quién es el cliente ideal? (edad, qué busca, qué lo asusta de contratar)
5. ¿Por qué te eligen a vos y no a la competencia? (en tus palabras, sin pulir)

### RONDA 2 — Personalidad y tono
6. Si la marca fuera una persona, ¿cómo hablaría? (formal, de barrio, técnica, cálida)
7. Dame 3 adjetivos que SÍ y 3 que NO querés que transmita la web.
8. ¿Hay frases o muletillas que usás siempre y te representan?
9. ¿Querés sonar premium/caro o accesible/cercano?

### RONDA 3 — Estética y referencias
10. Mostrame 2-3 webs que te encanten (del rubro o no) y decime qué te gusta de cada una.
11. Mostrame 1-2 webs que ODIES o que represente lo que NO querés.
12. ¿Colores que SÍ (de tu marca) y colores que jamás querés ver?
13. ¿Tenés logo en alta/vectorial? ¿Tipografías de marca?
14. ¿Preferís oscuro premium o claro editorial?

### RONDA 4 — Contenido y activos
15. ¿Qué fotos/videos reales tenés? (sin material real, la web pierde fuerza)
16. ¿Cuáles son los 3 servicios/productos que MÁS querés vender? (esos van primero)
17. ¿Tenés testimonios, reseñas o clientes citables con nombre?
18. ¿Hay datos reales y verificables que sumen confianza? (años, obras, clientes)
19. ¿Qué textos ya tenés y cuáles hay que escribir desde cero?

### RONDA 5 — Conversión y técnica
20. ¿Canal #1 de contacto? (WhatsApp, formulario, llamada, reserva)
21. ¿Querés chatbot/widget? ¿Cuál y dónde?
22. ¿Mostrás precios o "presupuesto a medida"?
23. ¿Tenés Google Business / dirección física para SEO local?
24. ¿Dominio y hosting ya definidos?
25. ¿Necesitás que sea editable por vos después, o entrega cerrada?

### RONDA 6 — Detalle de firma y diferenciación
26. ¿Hay UN elemento que querés que la gente recuerde de la web? (el "wow")
27. ¿Qué hace tu negocio que nadie más hace? (eso merece una sección propia)
28. ¿Hay alguna animación/interacción específica que imaginás? (ej: el video hero que se congela)
29. ¿Querés que la web "cuente una historia" o que vaya directo al grano?

> Después de las 6 rondas, releé las respuestas y preguntá una última vez: **"¿qué detalle de todo esto NINGÚN competidor tendría en su web?"** — ese es el corazón del diseño.

---

## 10. MAPA POR RUBRO (estructura y estética según el negocio)

> No todos los rubros usan la misma estructura. Adaptá según el caso.

| Rubro | Estructura clave | Tipografía | Acento | Detalle de firma |
|-------|------------------|-----------|--------|------------------|
| Herrería / metalurgia | Video del metal + lista editorial de obras + split civil/industrial | Fraunces + Archivo | Naranja con cuentagotas | Chispas/grano metálico, scroll que "forja" |
| Gastronomía | Menú como protagonista, fotos a sangre, reserva fija | Cormorant + Work Sans | Tono cálido (terracota/oliva) | Parallax de platos, transición de carta |
| Estudio de arquitectura | Obra a pantalla completa, grilla rota, mucho vacío | PP Editorial + Söhne | Casi nulo (B/N) | Cursor custom, transición entre proyectos |
| Servicios profesionales (legal/contable) | Claridad, confianza, autoridad, datos reales | Newsreader + IBM Plex | Azul profundo serio | Línea de tiempo de proceso |
| Tech / SaaS | Demo del producto, beneficios concretos, CTA claro | Geist + Geist Mono | Uno fuerte, sin gradiente startup | Micro-interacciones del producto |
| Inmobiliaria / construcción | Render/obra, recorrido, ficha técnica | Fraunces + Archivo | Tierra/dorado sobrio | Mapa interactivo, scroll de avance de obra |
| Producto físico / e-commerce de nicho | Producto en 3D o macro, storytelling de material | Anton + Inter Tight | El color del producto | Rotación 360° / zoom de textura |

---

## 11. ANTI-PATRONES POR SECCIÓN (qué NO hacer en cada parte)

- **Hero:** ❌ gradiente + título centrado + botón "Get Started". ✔ video/imagen real + título tipográfico grande + meta-data en fila.
- **Servicios:** ❌ 3 cards con icono en círculo. ✔ lista numerada editorial que se expande al hover.
- **Sobre nosotros:** ❌ "Somos un equipo apasionado...". ✔ una historia/frase real del dueño + foto del taller real.
- **Testimonios:** ❌ 3 columnas con foto redonda + estrellitas. ✔ una cita real grande, con nombre y contexto.
- **Proceso:** ❌ 4 pasos iguales en fila. ✔ timeline horizontal con números que sobresalen.
- **CTA final:** ❌ "Contactanos hoy" centrado. ✔ palabra gigante de fondo + un solo link elegante con la acción concreta.
- **Footer:** ❌ 4 columnas idénticas de links. ✔ oscuro, asimétrico, con NAP para SEO, status dot pulsante.

---

## 12. FLUJO DE TRABAJO RECOMENDADO

1. **Brief** — completar CONTEXTO CLIENTE + correr las 6 rondas (sección 9).
2. **Referencias** — recolectar 2-3 sitios que el cliente ama, inspeccionar su CSS (sección 7).
3. **Decisiones fuertes** — fijar tipografía, paleta (2-3), estructura (no la típica) y el detalle de firma ANTES de codear.
4. **Construir** — HTML único con el stack de la sección 6, mobile-first.
5. **Copy** — escribir textos con voz real (sección 3, principio de copy).
6. **Checklist** — pasar el de la sección 8 entero antes de mostrar.
7. **Prueba de fuego** — tapar el logo: ¿se nota que es ESTE cliente? Si no, volver al paso 3.

---

*Este archivo es vivo. Cada vez que encuentres un sitio que te guste, agregá su URL a la sección 7 y, si podés, su CSS. Cada rubro nuevo que trabajes, sumalo a la sección 10. Cuanto más específico el contexto, menos genérico el resultado.*

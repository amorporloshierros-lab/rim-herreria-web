# CONTEXTO CLIENTE — R.I.M HERRERÍA EN GENERAL

> **Cómo usar este archivo:** Es el brief vivo del proyecto. Antes de escribir una sola línea de código o copy, completá las RONDAS DE DESCUBRIMIENTO (sección 9). Mientras más campos llenos, menos genérico el resultado. Lo que quede vacío, el modelo lo va a inventar o promediar — y ahí aparece lo genérico. Pegá este archivo junto con el DESIGN SYSTEM al inicio de cualquier conversación de generación de la web.

---

## 0. ESTADO DEL BRIEF

- **Versión:** v2 — ampliada
- **Fecha:** completar
- **Responsable del proyecto (de mi lado):** Lucas
- **Estado de las rondas de descubrimiento:** ⬜ Ronda 1 ⬜ Ronda 2 ⬜ Ronda 3 ⬜ Ronda 4 ⬜ Ronda 5
- **Activos recibidos:** ⬜ Logo (image__5_.png) ⬜ Video hero (quiero_un_video_para_un_hero_d.mp4) ⬜ Fotos de obras ⬜ Otros: ____

---

## 1. DATOS DEL NEGOCIO

- **Nombre comercial:** R.I.M — Herrería en General
- **Titular:** Mario Barrios
- **WhatsApp:** +54 9 348 4567900
- **Instagram:** rim.herreria
- **Rubro:** Herrería / metalurgia / soldadura
- **Zona de cobertura:** _(completar — ej: Pilar, Escobar, zona norte GBA. Define el SEO local)_
- **Años en el oficio / trayectoria:** _(completar — es el principal generador de confianza)_
- **Email:** _(completar)_
- **Dirección del taller / showroom:** _(completar — para Google Maps embebido y SEO local)_
- **Horario de atención:** _(completar)_
- **Web actual (si existe):** _(completar)_

---

## 2. SERVICIOS QUE OFRECE

Listado base (de la tarjeta):

1. Pérgolas y techados
2. Puertas
3. Portón corredizo
4. Portón de dos hojas
5. Parrillas
6. Escaleras y barandas
7. Rejas

Ampliar a:

8. Trabajos industriales (estructuras, escaleras industriales, plataformas)
9. Trabajos civiles (a medida para obra / construcción)
10. Trabajos a medida (lo que el cliente imagine)

> **Para cada servicio que sea estrella, completar en la Ronda 2:** material típico, rango de tiempo de entrega, qué lo diferencia de la competencia, y si hay foto de una obra real.

---

## 3. IDENTIDAD VISUAL

- **Logo:** hexágono con engranaje, máquina de corte láser/plasma con chispas, texto "R.I.M" sobre banda negra texturada. Archivo: `image__5_.png` (fondo transparente). **Va arriba a la izquierda.**
- **Paleta de colores:**
  - Naranja vibrante `#E8911C` aprox — color principal de acento (usar con cuentagotas, no saturar)
  - Azul oscuro / navy `#0D1B2A` / `#14233A` aprox — fondos
  - Negro texturado — bandas y detalles
  - Gris acero — metalizado
  - Blanco / hueso — textos sobre oscuro
- **Estilo:** industrial, metálico, robusto, masculino, oficio real (no "tech startup")
- **Tipografías que tiene el logo / preferencia del cliente:** _(completar)_
- **Tono de marca (cómo habla R.I.M):** _(completar — ej: directo, confiable, de barrio pero profesional, sin vueltas)_

---

## 4. OBJETIVO DE LA WEB

- **SEO local:** posicionar "herrería [zona]", "portones a medida [zona]", "rejas [zona]", "pérgolas de hierro", etc.
- **Conversión:** llevar al usuario a contratar vía **WhatsApp** (acción principal).
- **Diferenciación de UX/UI:** a medida para el rubro herrería — NO genérica, NO plantilla de cuadritos.
- **Acción secundaria (definir):** _(¿llamar? ¿ver Instagram? ¿pedir presupuesto por formulario?)_
- **KPI de éxito (definir):** _(ej: X consultas por WhatsApp/mes, X% de scroll hasta servicios)_

---

## 5. DIRECTIVAS DE DISEÑO DEL CLIENTE (Lucas)

1. NO interfaz genérica, NO elementos acomodados como tabla / plantilla clásica.
2. Chatbot abajo a la derecha.
3. Video en el hero que se reproduce UNA vez detrás del contenido, luego se congela en el último frame hasta recargar.
4. Colores de la identidad visual (naranja + azul oscuro + negro).
5. Logo arriba a la izquierda (la imagen del hexágono R.I.M).
6. Transiciones al hacer scroll.
7. Al clickear un botón: evento de animación que transiciona del botón a la función.
8. Ofrecer trabajos industriales / civiles, a medida y más.
9. SIN emojis.

---

## 6. NOTAS TÉCNICAS

- **Video hero:** archivo `quiero_un_video_para_un_hero_d.mp4`
  - Comportamiento: autoplay 1 vez, muted, playsinline, sin loop. Al terminar queda congelado en el último frame. Solo se reinicia al recargar.
  - Fallback: si `prefers-reduced-motion`, mostrar póster estático (último frame exportado como imagen).
- **Logo:** `image__5_.png` (fondo transparente).
- **Chatbot:** widget abajo a la derecha. _(definir: ¿WhatsApp directo, Tidio, Crisp, o uno propio? Ver Ronda 4)_
- **Stack sugerido:** HTML único + GSAP + ScrollTrigger + Lenis (ver DESIGN SYSTEM).
- **Hosting / dominio:** _(completar)_

---

## 7. SEO — PALABRAS CLAVE A POSICIONAR

> Completar con la zona real. Estructura: `[servicio] + [zona]`.

- herrería [zona]
- herrero [zona]
- portones a medida [zona]
- portón corredizo [zona]
- rejas de seguridad [zona]
- pérgolas de hierro [zona]
- escaleras metálicas [zona]
- estructuras metálicas [zona]
- parrillas a medida [zona]
- trabajos de soldadura [zona]

**Para SEO on-page asegurar:** title con servicio + zona, meta description con WhatsApp/CTA, H1 único con keyword principal, alt text en cada foto de obra, schema `LocalBusiness` + `metalworking`, datos de NAP (nombre, dirección, teléfono) consistentes.

---

## 8. UX COPY — TEXTOS CLAVE DE LA WEB

> Tono: directo, robusto, de oficio. SIN emojis. Sin promesas vacías. El que entra quiere saber que el laburo se hace bien y se hace rápido.

**Hero (título principal):** _(ej candidatos)_
- "Hierro que dura. Trabajo que se nota."
- "Herrería a medida, de la idea al metal."
- "Lo que imaginás, lo soldamos."

**Subtítulo hero:** _(ej)_ "Portones, rejas, pérgolas y estructuras a medida en [zona]. Presupuesto por WhatsApp sin vueltas."

**CTA principal (WhatsApp):** "Pedí tu presupuesto" / "Hablá con Mario" / "Cotizá tu trabajo"
*(NO usar "Enviar" ni "Get Started")*

**CTA servicios:** "Ver trabajos" / "Lo quiero a medida"

**Microcopy de cierre / footer:** _(ej)_ "Cada trabajo se mide, se corta y se suelda a mano. No hay dos iguales."

**Estado del chatbot (saludo):** _(ej)_ "Contanos qué necesitás y te pasamos un número."

> Completar/validar estos textos con Mario en la Ronda 5.

---

## 9. RONDAS DE DESCUBRIMIENTO (lo que hay que preguntar antes de construir)

> El objetivo de estas rondas es matar lo genérico. Cada respuesta es un detalle que ningún competidor con web de plantilla va a tener. Hacelas en orden; no avances a la siguiente sin cerrar la anterior.

### RONDA 1 — Negocio y posicionamiento
1. ¿En qué zona/localidad trabaja R.I.M y hasta dónde viaja? (define el SEO local entero)
2. ¿Cuántos años hace que Mario está en el oficio?
3. ¿Trabaja solo o tiene equipo/taller? ¿Cuántas personas?
4. ¿Qué porcentaje del trabajo es a particulares vs. empresas/obra?
5. ¿Cuál es el trabajo del que más orgulloso está? (esa va al hero o a destacados)
6. ¿Qué tipo de cliente le deja más rentabilidad? (a ese hay que hablarle)
7. ¿Qué le piden seguido que NO hace? (para no prometer de más)

### RONDA 2 — Servicios en profundidad
8. De los servicios, ¿cuáles son los 3 que más vende? (esos van primero)
9. Para cada servicio estrella: ¿material típico, rango de precio aproximado, tiempo de entrega?
10. ¿Hace diseño/asesoramiento o solo ejecuta lo que el cliente trae?
11. ¿Trabaja con planos de arquitectos/constructoras? (clave para el bloque "civil/industrial")
12. ¿Da garantía? ¿De cuánto?
13. ¿Hace instalación/colocación o solo fabricación?
14. ¿Tiene fotos de obras terminadas? ¿De cuántos trabajos? (sin fotos reales, la web pierde el 80% de la fuerza)

### RONDA 3 — Diferenciación y confianza
15. ¿Por qué un cliente lo elige a él y no al herrero de la otra cuadra? (en sus palabras)
16. ¿Tiene reseñas, testimonios o clientes que lo recomienden? ¿Se pueden citar con nombre?
17. ¿Trabajó para alguna empresa/obra reconocible que sume prestigio?
18. ¿Hace algo técnico que otros no? (corte láser/plasma propio, soldadura especial, etc.)
19. ¿Qué le molesta de cómo trabajan otros herreros? (ahí está su diferencial real)

### RONDA 4 — Conversión y operación
20. ¿Cuál es el canal #1 por el que quiere recibir consultas? (WhatsApp confirmado, ¿algo más?)
21. ¿Qué chatbot/widget quiere? (WhatsApp directo, Tidio, Crisp, propio) — define lo técnico
22. ¿Quiere formulario de presupuesto con campos (tipo de trabajo, medidas, foto)? ¿O solo botón a WhatsApp?
23. ¿En qué horario responde? (para setear expectativa en el chat)
24. ¿Quiere mostrar precios/rangos o prefiere "presupuesto a medida"?
25. ¿Tiene Google Business / Maps? (para el embed y el SEO local)

### RONDA 5 — Marca, tono y activos
26. ¿Cómo quiere sonar la web? ¿Más "taller de barrio confiable" o más "metalúrgica seria/industrial"?
27. ¿Hay frases que Mario usa siempre y que lo representan? (van como copy real)
28. ¿El logo tiene versión en alta / vectorial además del PNG?
29. ¿Tiene video o solo el archivo del hero? ¿Hay material para más secciones?
30. ¿Hay colores o estilos que NO quiere ver bajo ningún concepto?
31. ¿Webs de otros (del rubro o no) que le gusten o que quiera evitar? (referencias = oro)

---

## 10. CHECKLIST DE BRIEF COMPLETO (antes de construir)

- [ ] Zona de cobertura definida (sin esto el SEO no arranca)
- [ ] Trayectoria / años confirmados
- [ ] 3 servicios estrella priorizados
- [ ] Al menos 6 fotos de obras reales recibidas
- [ ] Diferencial real en palabras de Mario capturado
- [ ] Canal de conversión y chatbot definidos
- [ ] Textos del hero y CTA validados con el cliente
- [ ] Logo en alta + video hero recibidos
- [ ] Google Business / dirección para SEO local
- [ ] Tono de marca acordado (barrio confiable vs. industrial serio)
- [ ] Referencias visuales del cliente recolectadas
- [ ] Lista de "lo que NO quiere" registrada

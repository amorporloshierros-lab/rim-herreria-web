/* ════════════════════════════════════════════════════════════════
   rim.config.js — CONFIGURACIÓN DEL SITIO R.I.M
   Este archivo es la fuente de verdad del diseño. Cada decisión tomada en
   las RONDAS de preguntas se vuelca acá. El index.html lo lee al cargar y
   aplica tokens, tipografía, movimiento, layout y features.
   Nada está "por default genérico": todo se elige.

   Estado de las rondas:  ⬜1 ⬜2 ⬜3 ⬜4 ⬜5 ⬜6 ⬜7 ⬜8 ⬜9 ⬜10
   (PENDIENTE = todavía no decidido en una ronda)
════════════════════════════════════════════════════════════════ */

window.RIM_CONFIG = {

  /* ── Datos fijos del negocio ── */
  negocio: {
    nombre: "R.I.M Herrería en General",
    titular: "Mario Barrios",
    whatsapp: "5493484567900",
    instagram: "rim.herreria",
    zona: "Pilar, Escobar, Nordelta, Tigre y zona norte",
    anosOficio: "+25",      // se muestra en el hero
  },

  /* ── RONDA 1: Dirección general ✓ ── */
  direccion: {
    modoColor: "navy-profundo",
    heroTratamiento: "video-full",
    tipografiaDisplay: "fraunces",
    intensidadAnimacion: "cinematico",
  },

  /* ── RONDA 2: Navegación y estructura ✓ ── */
  estructura: {
    nav: "pildora-blur",
    ordenSecciones: "manifiesto-primero",
    presentacionServicios: "lista-editorial",
    detalleFirma: "chispas-scroll",
  },

  /* ── RONDA 3: Hero en detalle ✓ ── */
  hero: {
    titulo: "Hierro que dura.",   // 'dura' en itálica naranja
    overlay: "medio",
    metadataHero: ["zona", "a-medida", "anos-oficio"],
    ctaPrincipal: "Pedí tu presupuesto",
  },

  /* ── RONDA 4: Color y acento ✓ ── */
  color: {
    acento: "#E8911C",
    usoAcento: "medio",
    fondoTextura: "grano",
    botones: "cuadrado-relleno-hover",
    lineas: "finas-tenues",
  },

  /* ── RONDA 5: Movimiento ✓ ── */
  movimiento: {
    scrollSuave: true,            // Lenis
    velocidad: "medio",           // ~1.0s
    revelados: "mask-clip",
    parallax: "marcado",
  },

  /* ── RONDA 6: Servicios / obras ✓ ── */
  servicios: {
    estrella: ["Pérgolas y techados", "Portones", "Estructuras / industrial"],
    layoutObras: "scroll-superposicion", // sección pineada: cada scroll revela una imagen que
                                         // entra desde distintos lados y se solapa con transición
    fotos: "renders-svg-ejemplo",        // renders vectoriales de ejemplo (portón, pérgola, escalera...)
    mostrarPrecios: "no-a-medida",
  },

  /* ── RONDA 7: Confianza y prueba ✓ ── */
  confianza: {
    sobreMario: "breve-con-caracter",   // párrafo + foto del taller
    testimonios: "carrusel",            // varias citas (placeholders a reemplazar por reales)
    proceso: "timeline-horizontal",     // Consulta → Medición → Fabricación → Colocación
    disciplinas: "split-asimetrico",    // Particulares vs Civil/Industrial
  },

  /* ── RONDA 8: CTA y cierre ✓ ── */
  cierre: {
    estiloCTA: "watermark-gigante",     // palabra 'FORJAMOS' enorme + un link
    footer: "metal-cortado-tematico",   // fondo SVG tipo chapa cortada a láser (motivo herrería),
                                        // los datos y citas van encima
    mapa: "mencion-zona-sin-mapa",
    redes: ["whatsapp", "instagram", "email", "telefono"], // email/telefono: ★ confirmar datos reales
  },

  /* ── RONDA 9: Chatbot ✓ ── */
  chatbot: {
    persona: "formal-profesional",      // trato cordial y profesional, sin emojis
    motor: "hibrido",                   // chips guiados + escritura libre + lógica local + backend IA opcional
    posicion: "abajo-derecha",
    acciones: ["whatsapp", "lead", "presupuesto"],
    saludo: "ofrecer-ayuda-invitar-datos",
    iaReal: "opcional-backend-listo",
  },

  /* ── RONDA 10: Detalles finales ✓ ── */
  detalles: {
    favicon: "assets/logo-rim.png",
    preloader: "forja-chispa",          // intro breve ~1s temática
    presupuesto: "seccion-form-whatsapp", // bloque con formulario que arma el mensaje de WhatsApp
    mobile: "whatsapp-fijo-anim-liviana",
    idioma: "es-AR",                    // voseo, términos locales
  },

};

/* ════════════════════════════════════════════════════════════════
   RESUMEN DE DECISIONES (10/10 rondas completas)
   Navy profundo · video full + overlay medio · Fraunces · animación cinemática media
   Nav píldora-blur · orden: manifiesto primero · servicios lista editorial
   Firma: chispas de soldadura al scroll · acento naranja uso medio · grano
   Botones cuadrados con relleno hover · líneas finas · revelado mask-clip · parallax marcado
   Servicios estrella: pérgolas, portones, estructuras · obras: scroll de superposición · renders SVG
   Sobre Mario breve · testimonios carrusel · proceso timeline horizontal · disciplinas split
   CTA watermark gigante · footer metal cortado temático · zona sin mapa
   Chatbot formal/profesional híbrido (chips + libre) · preloader chispa · presupuesto con form WhatsApp
════════════════════════════════════════════════════════════════ */

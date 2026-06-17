/* app.js — R.I.M Herrería · lee rim.config.js (con fallbacks) */
var CFG = (window.RIM_CONFIG || {});
var NEG = CFG.negocio || {};
var WA = NEG.whatsapp || "5493484567900";
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('year').textContent = new Date().getFullYear();
if (NEG.anosOficio && NEG.anosOficio !== "PENDIENTE") { document.getElementById('anos-num').textContent = NEG.anosOficio; }

/* Genera chispas (detalle de firma) */
function spark(parent, x, y){
  if(reduce) return;
  var s=document.createElement('span'); s.className='spark'; s.style.left=x+'px'; s.style.top=y+'px'; if(Math.random()<0.35){ s.style.background='#dff0ff'; s.style.boxShadow='0 0 6px #7cc0ff'; }
  parent.appendChild(s);
  var ang=Math.random()*Math.PI*2, dist=20+Math.random()*40, dur=400+Math.random()*400;
  var dx=Math.cos(ang)*dist, dy=Math.sin(ang)*dist+20;
  s.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px)',opacity:0}],{duration:dur,easing:'cubic-bezier(.2,.6,.3,1)'});
  setTimeout(function(){ s.remove(); }, dur);
}

/* Chispa/esquirla con gravedad (soldadura del proceso) */
function metalSpark(x,y){
  if(reduce) return;
  var s=document.createElement('span'); s.className='spark';
  var big=Math.random()<0.22, sz=big?(2+Math.random()*2.4):(1+Math.random()*1.6);
  s.style.left=x+'px'; s.style.top=y+'px'; s.style.width=sz+'px'; s.style.height=(big?sz*2.4:sz)+'px'; s.style.borderRadius=big?'1px':'50%';
  var r=Math.random();
  if(r<0.34){ s.style.background='#fff'; s.style.boxShadow='0 0 6px #cfe8ff'; }
  else if(r<0.66){ s.style.background='#ffd27a'; s.style.boxShadow='0 0 7px #E8911C'; }
  else { s.style.background='#ff8a28'; s.style.boxShadow='0 0 7px #E8911C'; }
  document.body.appendChild(s);
  var dx=(Math.random()-0.5)*150, peak=-(18+Math.random()*48), fall=46+Math.random()*100, dur=520+Math.random()*620;
  s.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+(dx*0.5)+'px,'+peak+'px)',opacity:1,offset:.4},{transform:'translate('+dx+'px,'+fall+'px)',opacity:0}],{duration:dur,easing:'cubic-bezier(.3,.1,.6,1)'});
  setTimeout(function(){ s.remove(); }, dur);
}

/* PRELOADER — soldadura real en canvas: arco, pileta incandescente y lluvia de chispas */
(function(){
  var pre=document.getElementById('pre'), cv=document.getElementById('pre-canvas'), mark=document.getElementById('pre-mark');
  function done(){ pre.classList.add('done'); }
  if(reduce || !cv || !cv.getContext){ done(); return; }
  mark.style.transition='opacity .5s ease'; requestAnimationFrame(function(){ mark.style.opacity='1'; });
  var ctx=cv.getContext('2d'), W=cv.width, H=cv.height, midY=H/2;
  var x0=46, x1=W-46, parts=[], t0=null, DUR=2700, fin=false;
  function emit(x,y,n){
    for(var i=0;i<n;i++){
      var dir=Math.random()<0.5?-1:1, sp=1.4+Math.random()*5.4;
      parts.push({x:x,y:y,vx:dir*sp*(0.4+Math.random()),vy:-(0.4+Math.random()*2.6),life:1,g:0.11+Math.random()*0.12,sz:0.6+Math.random()*1.8,hot:Math.random()});
    }
  }
  function frame(t){
    if(!t0) t0=t;
    var p=Math.min(1,(t-t0)/DUR), ax=x0+(x1-x0)*p;
    ctx.clearRect(0,0,W,H);
    // placa de acero
    var g=ctx.createLinearGradient(0,midY-10,0,midY+10);
    g.addColorStop(0,'#3a4451'); g.addColorStop(1,'#191f27');
    ctx.fillStyle=g; ctx.fillRect(x0-8,midY-10,(x1-x0)+16,20);
    ctx.fillStyle='rgba(255,255,255,.06)'; ctx.fillRect(x0-8,midY-10,(x1-x0)+16,2);
    // cordón ya soldado: gris frío que se calienta cerca del arco
    for(var bx=x0; bx<ax; bx+=3.5){
      var heat=Math.max(0,1-(ax-bx)/80);
      if(heat>0.04){ ctx.fillStyle='rgba(255,'+Math.round(150+95*heat)+','+Math.round(50+120*(1-heat))+','+(0.55+0.45*heat)+')'; }
      else { ctx.fillStyle='rgba(150,165,188,.9)'; }
      ctx.beginPath(); ctx.arc(bx, midY+(Math.random()-0.5)*1.4, 3.4, 0, 6.283); ctx.fill();
    }
    if(p<1) emit(ax, midY, 3+Math.floor(Math.random()*4));
    // halo naranja
    var og=ctx.createRadialGradient(ax,midY,0,ax,midY,46);
    og.addColorStop(0,'rgba(255,165,60,.28)'); og.addColorStop(1,'rgba(255,165,60,0)');
    ctx.fillStyle=og; ctx.beginPath(); ctx.arc(ax,midY,46,0,6.283); ctx.fill();
    // arco azul-blanco flickering
    var fl=0.65+Math.random()*0.35, R=24*fl;
    var rg=ctx.createRadialGradient(ax,midY,0,ax,midY,R);
    rg.addColorStop(0,'rgba(255,255,255,'+fl+')'); rg.addColorStop(.22,'rgba(226,241,255,.92)');
    rg.addColorStop(.5,'rgba(124,192,255,.7)'); rg.addColorStop(.8,'rgba(43,127,214,.22)'); rg.addColorStop(1,'rgba(43,127,214,0)');
    ctx.fillStyle=rg; ctx.beginPath(); ctx.arc(ax,midY,R,0,6.283); ctx.fill();
    // partículas (chispas con gravedad)
    for(var i=parts.length-1;i>=0;i--){
      var q=parts[i]; q.vy+=q.g; q.x+=q.vx; q.y+=q.vy; q.life-=0.017;
      if(q.life<=0 || q.y>H+4){ parts.splice(i,1); continue; }
      var c = q.hot>0.72?'rgba(255,255,255,':(q.hot>0.35?'rgba(255,212,120,':'rgba(255,138,40,');
      ctx.strokeStyle=c+Math.max(0,q.life)+')'; ctx.lineWidth=q.sz; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(q.x,q.y); ctx.lineTo(q.x-q.vx*1.6,q.y-q.vy*1.6); ctx.stroke();
    }
    if(p<1 || parts.length>0){ requestAnimationFrame(frame); }
    if(p>=1 && !fin){ fin=true; emit(ax,midY,44); setTimeout(done,520); }
  }
  requestAnimationFrame(frame);
})();

/* HERO video: una vez y congela */
(function(){
  var v=document.getElementById('hero-video'), fb=document.getElementById('hero-poster-fallback');
  if(!v) return;
  if(reduce){ v.removeAttribute('autoplay'); v.style.display='none'; fb.style.display='block'; return; }
  v.addEventListener('ended',function(){ v.pause(); });
  v.play().catch(function(){ v.style.display='none'; fb.style.display='block'; });
})();

/* HEADER + burger */
var header=document.getElementById('header');
window.addEventListener('scroll',function(){ header.classList.toggle('scrolled', window.scrollY>40); });
var burger=document.getElementById('burger'), nav=document.getElementById('nav');
burger.addEventListener('click',function(){ nav.classList.toggle('mobile-open'); });
nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ nav.classList.remove('mobile-open'); }); });

/* TESTIMONIOS carrusel */
(function(){
  var track=document.getElementById('testi-track'); if(!track) return;
  var i=0, cards=track.children.length;
  function go(){ var w=track.children[0].getBoundingClientRect().width+24; track.style.transform='translateX('+(-i*w)+'px)'; }
  document.getElementById('testi-next').addEventListener('click',function(){ i=(i+1)%cards; go(); });
  document.getElementById('testi-prev').addEventListener('click',function(){ i=(i-1+cards)%cards; go(); });
  window.addEventListener('resize',go);
})();

/* PRESUPUESTO — modal (abre solo al tocar un botón) */
(function(){
  var modal=document.getElementById('presu-modal');
  function openM(){ if(!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
  function closeM(){ if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
  window.__openPresu=openM; window.__closePresu=closeM;
  document.querySelectorAll('[data-presu]').forEach(function(b){ b.addEventListener('click',function(e){ e.preventDefault(); openM(); }); });
  document.querySelectorAll('[data-presu-close]').forEach(function(o){ o.addEventListener('click',closeM); });
  var x=document.getElementById('presu-x'); if(x) x.addEventListener('click',closeM);
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeM(); });
  var form=document.getElementById('presu-form');
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault(); var f=new FormData(this);
    var msg='Hola Mario, soy '+f.get('nombre')+'. Quiero un presupuesto de: '+f.get('tipo')+'.%0ATel: '+f.get('telefono')+'.'+(f.get('detalle')?('%0ADetalle: '+f.get('detalle')):'');
    window.open('https://wa.me/'+WA+'?text='+msg,'_blank'); closeM(); this.reset();
  });
})();

/* ANIMACIONES */
function revelarTodo(){
  document.querySelectorAll('.reveal').forEach(function(el){ el.style.clipPath='none'; el.style.opacity='1'; });
  document.querySelectorAll('.manifiesto .word').forEach(function(el){ el.style.opacity='1'; });
}
window.addEventListener('load',function(){
  if(reduce || typeof gsap==='undefined'){ revelarTodo(); return; }
  gsap.registerPlugin(ScrollTrigger);
  var isMobile=window.matchMedia('(max-width:760px)').matches;

  if(typeof Lenis!=='undefined'){
    var lenis=new Lenis({duration:1.2,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t));}});
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf); } requestAnimationFrame(raf);
    lenis.on('scroll',ScrollTrigger.update);
    document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click',function(e){ var t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); lenis.scrollTo(t,{offset:-20}); } }); });
  }

  gsap.from('[data-hero-title]',{yPercent:18,opacity:0,duration:1.4,ease:'expo.out',delay:.15});

  gsap.utils.toArray('.reveal').forEach(function(el){
    gsap.to(el,{clipPath:'inset(0 0 0% 0)',opacity:1,duration:1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 88%'}});
  });

  gsap.utils.toArray('.weld').forEach(function(el){
    ScrollTrigger.create({trigger:el,start:'top 80%',once:true,onEnter:function(){
      el.classList.add('drawn');
      var r=el.getBoundingClientRect();
      for(var i=0;i<8;i++){ spark(document.body, r.left+10+Math.random()*70, r.top+r.height+window.scrollY); }
    }});
  });

  var man=document.querySelector('[data-manifiesto]');
  if(man){
    var tmp=document.createElement('div'); tmp.innerHTML=man.innerHTML; var out=[];
    tmp.childNodes.forEach(function(n){
      if(n.nodeType===3){ n.textContent.split(/(\s+)/).forEach(function(w){ out.push(w.trim()?'<span class="word">'+w+'</span>':w); }); }
      else if(n.nodeType===1){ out.push('<span class="word '+(n.className||'')+'">'+n.textContent+'</span>'); }
    });
    man.innerHTML=out.join('');
    gsap.to(man.querySelectorAll('.word'),{opacity:1,stagger:.08,ease:'none',scrollTrigger:{trigger:man,start:'top 75%',end:'bottom 60%',scrub:1}});
  }

  /* OBRAS scroll superposición (mismo efecto en desktop y móvil, distancias adaptadas) */
  var stage=document.getElementById('obras-stage');
  var spacer=document.getElementById('obras-spacer');
  var cards2=gsap.utils.toArray('.obra-card');
  if(stage && cards2.length){
    spacer.style.height=((cards2.length+1)*100)+'vh';
    var vw=window.innerWidth, vh=window.innerHeight;
    var EX=isMobile?Math.max(360,vw*1.05):760, EY=isMobile?Math.max(360,vh*0.7):600;
    var spX=isMobile?15:46, spY=isMobile?9:26;
    var fromMap={ left:{x:-EX,y:0,r:-8}, right:{x:EX,y:0,r:8}, top:{x:0,y:-EY,r:6}, bottom:{x:0,y:EY,r:-6}, diag:{x:EX*0.85,y:-EY*0.7,r:10} };
    cards2.forEach(function(c){ var f=fromMap[c.dataset.from]||fromMap.left; gsap.set(c,{xPercent:-50,yPercent:-50,left:'50%',top:'52%',x:f.x,y:f.y,rotation:f.r,opacity:0}); });
    var tl=gsap.timeline({scrollTrigger:{trigger:spacer,start:'top top',end:'bottom bottom',scrub:1,pin:stage,anticipatePin:1}});
    cards2.forEach(function(c,idx){
      var restX=(idx-(cards2.length-1)/2)*spX, restY=(idx-(cards2.length-1)/2)*spY, restR=(idx%2?1:-1)*(2+idx);
      tl.to(c,{x:restX,y:restY,rotation:restR,opacity:1,duration:1,ease:'expo.out'}, idx*0.9);
    });
  }

  /* PROCESO — barra que SUELDA al scrollear (arco + luz + chispas + esquirlas) */
  var pStage=document.getElementById('proceso-stage'), pSpacer=document.getElementById('proceso-spacer'), pFill=document.getElementById('proc-fill');
  var pArc=document.getElementById('proc-arc'), pTrack=document.getElementById('proc-track'), pLight=document.getElementById('proc-light');
  var pasos=gsap.utils.toArray('#proceso .paso');
  if(pStage && pasos.length && !isMobile){
    pSpacer.style.height=((pasos.length+1)*100)+'vh';
    var lastP=0, weldedMax=-1;
    function setActive(prog){
      if(pFill) pFill.style.width=(prog*100)+'%';
      if(pArc) pArc.style.left=(prog*100)+'%';
      if(pLight) pLight.style.left=(prog*100)+'%';
      var idx=Math.min(pasos.length-1, Math.floor(prog*pasos.length+0.0001));
      pasos.forEach(function(el,i){ el.classList.toggle('on', i<=idx); });
      var welding=prog>0.006 && prog<0.996;
      if(pTrack) pTrack.classList.toggle('welding', welding);
      if(welding && pTrack && Math.abs(prog-lastP)>0.003){
        var r=pTrack.getBoundingClientRect(), x=r.left+r.width*prog, y=r.top+r.height/2+window.scrollY;
        var n=4+Math.floor(Math.random()*4); for(var s=0;s<n;s++) metalSpark(x,y);
      }
      if(idx>weldedMax){
        for(var k=weldedMax+1;k<=idx;k++){ var dot=pasos[k]&&pasos[k].querySelector('.dot');
          if(dot){ dot.classList.add('welded'); var dr=dot.getBoundingClientRect();
            for(var j=0;j<16;j++) metalSpark(dr.left+dr.width/2, dr.top+dr.height/2+window.scrollY); } }
        weldedMax=idx;
      } else if(idx<weldedMax){
        for(var k2=idx+1;k2<pasos.length;k2++){ var d2=pasos[k2]&&pasos[k2].querySelector('.dot'); if(d2) d2.classList.remove('welded'); }
        weldedMax=idx;
      }
      lastP=prog;
    }
    ScrollTrigger.create({trigger:pSpacer,start:'top top',end:'bottom bottom',scrub:true,pin:pStage,anticipatePin:1,onUpdate:function(self){ setActive(self.progress); }});
  } else if(pasos.length){
    // móvil: cada paso se enciende y se suelda al entrar en pantalla (activado por scroll)
    var doneN=0;
    pasos.forEach(function(el,i){
      ScrollTrigger.create({trigger:el,start:'top 82%',once:true,onEnter:function(){
        el.classList.add('on');
        var d=el.querySelector('.dot');
        if(d){ d.classList.add('welded'); var dr=d.getBoundingClientRect();
          for(var j=0;j<14;j++) metalSpark(dr.left+dr.width/2, dr.top+dr.height/2+window.scrollY); }
        doneN++; if(pFill) pFill.style.width=Math.round(doneN/pasos.length*100)+'%';
      }});
    });
  }

  gsap.to('#hero-video',{yPercent:18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.cta .mark',{xPercent:-16,ease:'none',scrollTrigger:{trigger:'.cta',start:'top bottom',end:'bottom top',scrub:true}});
});

/* ════ CHATBOT (formal/profesional, híbrido) ════ */
(function(){
  var fab=document.getElementById('chat-fab'),panel=document.getElementById('chat-panel'),close=document.getElementById('chat-close');
  var body=document.getElementById('chat-body'),input=document.getElementById('chat-input'),send=document.getElementById('chat-send');
  var chips=document.getElementById('chat-chips'),actWa=document.getElementById('act-wa'),actLead=document.getElementById('act-lead'),actPresu=document.getElementById('act-presu');
  var leadForm=document.getElementById('lead-form'),leadBack=document.getElementById('lead-back'),inputWrap=document.getElementById('chat-input-wrap');
  var invite=document.getElementById('chat-invite'), invX=document.getElementById('chat-invite-x');
  var history=[];
  var SYSTEM="Sos el asistente de R.I.M Herrería en General, el taller de Mario Barrios en Pilar, Escobar, Nordelta, Tigre y zona norte de Buenos Aires. Atendés de forma cordial y profesional, en español, sin emojis y sin vueltas. Conocés los servicios: pérgolas y techados, portones corredizos y de dos hojas, estructuras metálicas y trabajos industriales/civiles, rejas de seguridad, escaleras y barandas, puertas y parrillas a medida. No das precios cerrados: explicás que cada trabajo se presupuesta a medida y que conviene dejar los datos o escribir por WhatsApp al +54 9 348 4567900. Invitás de forma profesional a dejar el contacto o pedir presupuesto. Respuestas breves (2-4 frases).";
  var ENDPOINT=(CFG.chatbot&&CFG.chatbot.endpoint)||"";

  function open(){ panel.classList.add('open'); fab.style.display='none'; if(invite) invite.classList.remove('show'); if(!body.children.length) greet(); setTimeout(function(){input.focus();},300); }
  function shut(){ panel.classList.remove('open'); fab.style.display='flex'; }
  fab.addEventListener('click',open); close.addEventListener('click',shut);
  if(invite){ setTimeout(function(){ if(!panel.classList.contains('open')) invite.classList.add('show'); }, 4200); invite.addEventListener('click',function(e){ if(e.target===invX) return; invite.classList.remove('show'); open(); }); invX.addEventListener('click',function(e){ e.stopPropagation(); invite.classList.remove('show'); }); }
  function bubble(t,w){ var d=document.createElement('div'); d.className='msg '+w; d.textContent=t; body.appendChild(d); body.scrollTop=body.scrollHeight; return d; }
  function typing(){ var d=document.createElement('div'); d.className='msg bot typing'; d.innerHTML='<span></span><span></span><span></span>'; body.appendChild(d); body.scrollTop=body.scrollHeight; return d; }
  function greet(){ setTimeout(function(){ bubble("Buenas, soy el asistente de R.I.M Herrería. Contame qué necesitás —un portón, una pérgola, rejas, una estructura— y te oriento. Si querés, dejás tus datos y Mario te pasa un presupuesto.","bot"); },350); }

  function localReply(q){
    var t=q.toLowerCase(); function has(){ for(var i=0;i<arguments.length;i++){ if(t.indexOf(arguments[i])>=0) return true; } return false; }
    if(has('precio','sale','cuesta','cuanto','cuánto','presupuesto','vale')) return "Cada trabajo se presupuesta a medida según las medidas y el material, así que no manejamos un precio fijo. Si me deja sus datos o nos escribe por WhatsApp, Mario le pasa un número sin compromiso.";
    if(has('porton','portón','corrediz','dos hojas')) return "Sí, hacemos portones corredizos y de dos hojas, a medida y bien robustos. Se pueden dejar preparados para automatizar. ¿Le preparamos un presupuesto?";
    if(has('pergola','pérgola','techado','quincho','galeria','galería')) return "Las pérgolas y techados metálicos son uno de nuestros fuertes, resistentes a la intemperie. Cuénteme el espacio y lo presupuestamos.";
    if(has('estructura','tinglado','entrepiso','industrial','obra','plano','civil')) return "Sí, realizamos estructuras metálicas, entrepisos y trabajos industriales y civiles. Trabajamos con planos. Si tiene el proyecto, lo cotizamos.";
    if(has('reja','seguridad')) return "Hacemos rejas de seguridad para ventanas, puertas y frentes, con diseño firme y prolijo. Indíqueme medidas aproximadas o deje sus datos y lo vemos.";
    if(has('escalera','baranda','pasamano')) return "Realizamos escaleras y barandas a medida, para interior y exterior. ¿Es para una casa, un local o una obra?";
    if(has('parrilla','asador')) return "Construimos parrillas y asadores a medida del quincho. Indíqueme el tamaño que tiene en mente.";
    if(has('zona','pilar','escobar','nordelta','tigre','donde','dónde','llegan','viajan')) return "Trabajamos en Pilar, Escobar, Nordelta, Tigre y toda la zona norte de Buenos Aires. Indíqueme su localidad y le confirmo.";
    if(has('tiempo','demora','tarda','plazo','cuando','cuándo')) return "El plazo depende del tipo de trabajo y la carga del taller; se lo confirmamos al pasar el presupuesto. ¿Desea que lo contactemos?";
    if(has('hola','buenas','buen dia','buen día','que tal','qué tal')) return "Buenas, ¿en qué lo puedo ayudar? Cuénteme qué trabajo de herrería necesita.";
    if(has('gracias','genial','dale','perfecto')) return "A las órdenes. Si le resulta cómodo, deje sus datos aquí abajo o escríbanos por WhatsApp y seguimos por ahí.";
    return "Con gusto lo ayudo. Para orientarlo mejor, cuénteme qué trabajo necesita (portón, pérgola, rejas, escalera, estructura...) o deje sus datos y Mario lo contacta.";
  }
  function respond(q){
    var t=typing();
    if(ENDPOINT){
      history.push({role:'user',content:q});
      fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({system:SYSTEM,messages:history})})
      .then(function(r){return r.json();}).then(function(d){ var rep=(d&&(d.reply||d.text))||localReply(q); history.push({role:'assistant',content:rep}); t.remove(); bubble(rep,'bot'); })
      .catch(function(){ t.remove(); bubble(localReply(q),'bot'); });
    } else { setTimeout(function(){ t.remove(); bubble(localReply(q),'bot'); }, 600+Math.random()*500); }
  }
  function userSend(q){ if(!q.trim())return; bubble(q,'user'); input.value=''; respond(q); }
  send.addEventListener('click',function(){ userSend(input.value); });
  input.addEventListener('keydown',function(e){ if(e.key==='Enter') userSend(input.value); });
  chips.addEventListener('click',function(e){ var b=e.target.closest('.chip'); if(b) userSend(b.dataset.q); });
  actWa.addEventListener('click',function(){ window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hola Mario, quiero consultar por un trabajo de herreria.'),'_blank'); });
  actPresu.addEventListener('click',function(){ shut(); if(window.__openPresu) window.__openPresu(); });
  function showLead(s){ leadForm.classList.toggle('show',s); inputWrap.style.display=s?'none':'flex'; chips.style.display=s?'none':'flex'; }
  actLead.addEventListener('click',function(){ showLead(true); });
  leadBack.addEventListener('click',function(){ showLead(false); });
  leadForm.addEventListener('submit',function(e){
    e.preventDefault(); var f=new FormData(leadForm);
    var nombre=f.get('nombre');
    var msg='Hola Mario, soy '+nombre+'. Quiero un presupuesto de: '+f.get('tipo')+'.%0ATel: '+f.get('telefono')+'.'+(f.get('detalle')?('%0ADetalle: '+f.get('detalle')):'');
    showLead(false); bubble('Perfecto, '+nombre+'. Le abro WhatsApp con sus datos cargados para enviarselos a Mario.','bot');
    setTimeout(function(){ window.open('https://wa.me/'+WA+'?text='+msg,'_blank'); },800); leadForm.reset();
  });
})();

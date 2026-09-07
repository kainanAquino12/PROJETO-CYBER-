/* ============================================================================
 *  collect.js — Coleta técnica (demo educativa).
 *
 *  Coleta dados que o navegador já expõe (fingerprint, capacidades, etc.) e
 *  envia para a API. NÃO coleta senhas/credenciais. Uso apenas em ambiente
 *  controlado, com fins didáticos. Extraído do HTML inline no refactor 6.0.
 *  Depende de window.APP_CONFIG (config.js).
 * ========================================================================== */
(function () {
  'use strict';

const API=(window.APP_CONFIG&&window.APP_CONFIG.API_URL)||window.location.origin;
function delay(ms){return new Promise(r=>setTimeout(r,ms));}

function guessOS(ua){
  if(!ua)return'n/d';
  if(/Windows NT 1[01]/.test(ua))return'Windows 10/11';
  if(/Mac OS X ([\d_]+)/.test(ua))return'macOS '+ua.match(/Mac OS X ([\d_]+)/)[1].replace(/_/g,'.');
  if(/Android ([\d.]+)/.test(ua))return'Android '+ua.match(/Android ([\d.]+)/)[1];
  if(/iPhone/.test(ua))return'iOS';if(/iPad/.test(ua))return'iPadOS';
  if(/Linux/.test(ua))return'Linux';return'outro';
}
function guessBrowser(ua){
  if(!ua)return'n/d';
  if(/Edg\//.test(ua))return'Edge';if(/OPR\//.test(ua))return'Opera';
  if(/Firefox\/(\d+)/.test(ua))return'Firefox '+ua.match(/Firefox\/(\d+)/)[1];
  if(/Chrome\/(\d+)/.test(ua))return'Chrome '+ua.match(/Chrome\/(\d+)/)[1];
  if(/Version\/.*Safari/.test(ua))return'Safari';return'Browser';
}
function isMobile(ua){return/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(ua||'');}

// GPU via WebGL (vendor/renderer) — bom para fingerprint.
function getGPU(){
  try{
    const c=document.createElement('canvas');
    const gl=c.getContext('webgl')||c.getContext('experimental-webgl');
    if(!gl)return{};
    const dbg=gl.getExtension('WEBGL_debug_renderer_info');
    if(!dbg)return{};
    return{
      gpuVendor:gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL),
      gpuRenderer:gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)
    };
  }catch(e){return{};}
}

// Fingerprint simples de canvas (hash) — demonstra rastreamento sem cookies.
function canvasFingerprint(){
  try{
    const c=document.createElement('canvas');c.width=240;c.height=60;
    const ctx=c.getContext('2d');
    ctx.textBaseline='top';ctx.font="16px 'Arial'";
    ctx.fillStyle='#069';ctx.fillRect(2,2,200,40);
    ctx.fillStyle='#f60';ctx.fillText('CA-ESW ⚡ fingerprint',6,6);
    const data=c.toDataURL();
    let h=0;for(let i=0;i<data.length;i++){h=(h*31+data.charCodeAt(i))|0;}
    return 'fp_'+(h>>>0).toString(16);
  }catch(e){return null;}
}

// Deteccao de fontes instaladas comparando a largura do texto com fontes-base.
function detectFonts(){
  const base=['monospace','sans-serif','serif'];
  const test=['Arial','Verdana','Times New Roman','Courier New','Georgia',
    'Comic Sans MS','Impact','Tahoma','Trebuchet MS','Segoe UI','Calibri',
    'Cambria','Consolas','Roboto','Helvetica Neue','Ubuntu','Noto Sans','Open Sans'];
  const probe='mmmmmmmmmmlli';
  const span=document.createElement('span');
  span.style.cssText='position:absolute;left:-9999px;top:-9999px;font-size:72px;line-height:normal';
  span.textContent=probe;
  document.body.appendChild(span);
  const def={};
  base.forEach(b=>{span.style.fontFamily=b;def[b]={w:span.offsetWidth,h:span.offsetHeight};});
  const found=[];
  test.forEach(f=>{
    let hit=false;
    base.forEach(b=>{
      span.style.fontFamily="'"+f+"',"+b;
      if(span.offsetWidth!==def[b].w||span.offsetHeight!==def[b].h)hit=true;
    });
    if(hit)found.push(f);
  });
  document.body.removeChild(span);
  return found;
}

// IPs locais via WebRTC (classico "vazamento" de IP; resolve em ate 2s).
function getWebRTCIPs(){
  return new Promise(resolve=>{
    const ips=new Set();let pc;
    try{pc=new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});}
    catch(e){return resolve([]);}
    try{pc.createDataChannel('');}catch(e){}
    const re=/([0-9]{1,3}(?:\.[0-9]{1,3}){3}|(?:[a-f0-9]{1,4}:){2,}[a-f0-9]{1,4})/i;
    pc.onicecandidate=e=>{
      if(!e.candidate){try{pc.close();}catch(_){}return resolve([...ips]);}
      const m=re.exec(e.candidate.candidate||'');
      if(m)ips.add(m[1]);
    };
    pc.createOffer().then(o=>pc.setLocalDescription(o)).catch(()=>resolve([...ips]));
    setTimeout(()=>{try{pc.close();}catch(_){}resolve([...ips]);},2000);
  });
}

// Fingerprint de audio: renderiza um tom num OfflineAudioContext e gera um hash
// do resultado. O "stack" de audio varia por SO/driver/hardware — silencioso.
function audioFingerprint(){
  return new Promise(resolve=>{
    try{
      const Ctx=window.OfflineAudioContext||window.webkitOfflineAudioContext;
      if(!Ctx)return resolve(null);
      const ctx=new Ctx(1,5000,44100);
      const osc=ctx.createOscillator();osc.type='triangle';osc.frequency.value=10000;
      const comp=ctx.createDynamicsCompressor();
      osc.connect(comp);comp.connect(ctx.destination);
      osc.start(0);
      const guard=setTimeout(()=>resolve(null),1500);
      ctx.oncomplete=e=>{
        clearTimeout(guard);
        const buf=e.renderedBuffer.getChannelData(0);
        let acc=0;for(let i=0;i<buf.length;i++)acc+=Math.abs(buf[i]);
        resolve('afp_'+Math.round(acc*1000).toString(16));
      };
      ctx.startRendering();
    }catch(e){resolve(null);}
  });
}

// WebGL detalhado: versao, limites e numero de extensoes -> vira um hash estavel
// que complementa o canvas fingerprint (rastreio sem cookies).
function getWebGLDetails(){
  try{
    const c=document.createElement('canvas');
    const gl=c.getContext('webgl')||c.getContext('experimental-webgl');
    if(!gl)return{};
    const exts=gl.getSupportedExtensions()||[];
    const parts=[
      gl.getParameter(gl.VERSION),gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
      gl.getParameter(gl.MAX_TEXTURE_SIZE),gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
      gl.getParameter(gl.MAX_VERTEX_ATTRIBS),exts.join(',')
    ].join('|');
    let h=0;for(let i=0;i<parts.length;i++){h=(h*31+parts.charCodeAt(i))|0;}
    return{
      glVersion:gl.getParameter(gl.VERSION),
      glMaxTexture:gl.getParameter(gl.MAX_TEXTURE_SIZE),
      glExtCount:exts.length,
      webglFp:'wgl_'+(h>>>0).toString(16)
    };
  }catch(e){return{};}
}

// "Superficie" de APIs que o navegador expoe (apenas deteccao de recurso).
function getApiSupport(){
  const has=(o,k)=>{try{return o&&(k in o);}catch(e){return false;}};
  return{
    webauthn:has(window,'PublicKeyCredential'),
    bluetooth:has(navigator,'bluetooth'),
    usb:has(navigator,'usb'),
    serial:has(navigator,'serial'),
    hid:has(navigator,'hid'),
    nfc:has(window,'NDEFReader'),
    webgpu:has(navigator,'gpu'),
    serviceWorker:has(navigator,'serviceWorker'),
    paymentRequest:has(window,'PaymentRequest'),
    credentials:has(navigator,'credentials'),
    wasm:has(window,'WebAssembly')
  };
}

// Codecs de video/audio suportados (pista de SO/hardware/licencas).
function getCodecs(){
  const v=document.createElement('video');
  const ok=t=>{try{return !!v.canPlayType(t);}catch(e){return false;}};
  const list=[];
  if(ok('video/mp4; codecs="avc1.42E01E"'))list.push('H.264');
  if(ok('video/webm; codecs="vp9"'))list.push('VP9');
  if(ok('video/mp4; codecs="hev1.1.6.L93.B0"'))list.push('HEVC');
  if(ok('video/mp4; codecs="av01.0.05M.08"'))list.push('AV1');
  if(ok('audio/mp4; codecs="mp4a.40.2"'))list.push('AAC');
  if(ok('audio/ogg; codecs="opus"'))list.push('Opus');
  if(ok('audio/flac'))list.push('FLAC');
  return list;
}

// Vozes de sintese de fala instaladas -> revela pacotes de idioma / SO.
function getVoices(){
  try{
    if(!window.speechSynthesis)return null;
    const vs=speechSynthesis.getVoices()||[];
    const langs=[...new Set(vs.map(v=>v.lang))];
    return{count:vs.length,langs:langs.slice(0,12)};
  }catch(e){return null;}
}

// Coleta os dados disponiveis no navegador.
async function collectData(){
  const ua=navigator.userAgent||'';
  const data={
    collectedAt:new Date().toISOString(),
    url:location.href,
    referrer:document.referrer||null,
    title:document.title,
    userAgent:ua,
    platform:navigator.platform||null,
    vendor:navigator.vendor||null,
    language:navigator.language||null,
    languages:navigator.languages||[],
    os:guessOS(ua),
    browser:guessBrowser(ua),
    isMobile:isMobile(ua),
    screen:{
      width:screen.width,height:screen.height,
      availWidth:screen.availWidth,availHeight:screen.availHeight,
      colorDepth:screen.colorDepth,pixelDepth:screen.pixelDepth
    },
    devicePixelRatio:window.devicePixelRatio,
    viewport:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},
    orientation:(screen.orientation&&screen.orientation.type)||null,
    hardwareConcurrency:navigator.hardwareConcurrency||null,
    deviceMemory:navigator.deviceMemory||null,
    maxTouchPoints:navigator.maxTouchPoints||0,
    timezone:(Intl.DateTimeFormat().resolvedOptions().timeZone)||null,
    timezoneOffset:new Date().getTimezoneOffset(),
    cookieEnabled:navigator.cookieEnabled,
    doNotTrack:navigator.doNotTrack||null,
    storageOK:(function(){try{localStorage.setItem('_t','1');localStorage.removeItem('_t');return true;}catch(e){return false;}})(),
    pluginsCount:(navigator.plugins&&navigator.plugins.length)||0,
    canvasFp:canvasFingerprint()
  };

  // Rede (Network Information API).
  const conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
  if(conn){
    data.connection={
      effectiveType:conn.effectiveType,downlink:conn.downlink,
      rtt:conn.rtt,saveData:conn.saveData
    };
  }

  Object.assign(data,getGPU());

  // Bateria (API Battery Status): so existe em navegadores Chromium (Chrome/Edge/
  // Opera). Firefox removeu e Safari/iOS nunca tiveram -> por isso aparece em uns
  // acessos e em outros nao. Em desktop sem bateria volta 100%/carregando.
  try{
    if(navigator.getBattery){
      const b=await navigator.getBattery();
      data.battery={
        level:b.level,charging:b.charging,
        chargingTime:isFinite(b.chargingTime)?b.chargingTime:null,
        dischargingTime:isFinite(b.dischargingTime)?b.dischargingTime:null
      };
      data.batterySupported=true;
    }else{
      data.batterySupported=false;
    }
  }catch(e){ data.batterySupported=false; }

  // Client Hints de alta entropia (Chrome/Edge): MODELO do aparelho (no celular!),
  // versao do SO, arquitetura, lista completa de versoes do navegador.
  try{
    if(navigator.userAgentData){
      data.uaMobile=navigator.userAgentData.mobile;
      data.uaPlatform=navigator.userAgentData.platform;
      const hi=await navigator.userAgentData.getHighEntropyValues(
        ['architecture','bitness','model','platformVersion','fullVersionList']);
      data.uaArch=hi.architecture; data.uaBitness=hi.bitness;
      data.deviceModel=hi.model||null; data.platformVersion=hi.platformVersion;
      data.fullVersionList=(hi.fullVersionList||[]).map(b=>b.brand+' '+b.version);
    }
  }catch(e){}

  // Estado das permissoes (SILENCIOSO — nao abre nenhum prompt).
  try{
    if(navigator.permissions&&navigator.permissions.query){
      const names=['camera','microphone','geolocation','notifications','clipboard-read'];
      const perms={};
      for(const n of names){
        try{ perms[n]=(await navigator.permissions.query({name:n})).state; }catch(_){}
      }
      data.permissions=perms;
    }
  }catch(e){}

  // Dispositivos de midia: quantas cameras/microfones/alto-falantes (sem permissao,
  // vem so a contagem; com permissao viriam os nomes).
  try{
    if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){
      const devs=await navigator.mediaDevices.enumerateDevices();
      const c={cameras:0,microphones:0,speakers:0};
      devs.forEach(d=>{
        if(d.kind==='videoinput')c.cameras++;
        else if(d.kind==='audioinput')c.microphones++;
        else if(d.kind==='audiooutput')c.speakers++;
      });
      data.mediaDevices=c;
    }
  }catch(e){}

  // Preferencias do usuario (tema escuro, movimento reduzido, contraste, cores).
  try{
    const mm=q=>window.matchMedia(q).matches;
    data.prefs={
      darkMode:mm('(prefers-color-scheme: dark)'),
      reducedMotion:mm('(prefers-reduced-motion: reduce)'),
      contrast:mm('(prefers-contrast: more)')?'more':(mm('(prefers-contrast: less)')?'less':'normal'),
      colorGamutP3:mm('(color-gamut: p3)'),
      hdr:mm('(dynamic-range: high)')
    };
  }catch(e){}

  // Estimativa de armazenamento (quota/uso em disco do navegador).
  try{
    if(navigator.storage&&navigator.storage.estimate){
      const est=await navigator.storage.estimate();
      data.storage={quotaMB:Math.round((est.quota||0)/1048576),usageMB:Math.round((est.usage||0)/1048576)};
    }
  }catch(e){}

  // Fontes instaladas (deteccao por largura de texto — fingerprint).
  try{ data.fonts=detectFonts(); }catch(e){}

  // IPs locais via WebRTC (best-effort; pode vir ofuscado por mDNS).
  try{ data.localIPs=await getWebRTCIPs(); }catch(e){}

  // Global Privacy Control (sinal de privacidade que o usuario habilitou).
  data.gpc=navigator.globalPrivacyControl||null;

  // ── Dados adicionais (todos silenciosos e ja expostos pelo navegador) ──

  // WebGL detalhado + fingerprint de WebGL.
  Object.assign(data,getWebGLDetails());

  // Capacidades/APIs disponiveis no navegador.
  data.apiSupport=getApiSupport();

  // Codecs de video/audio suportados.
  try{ data.codecs=getCodecs(); }catch(e){}

  // Vozes de sintese de fala (pacotes de idioma instalados).
  data.voices=getVoices();

  // Fingerprint de audio (assincrono; identifica o stack de audio).
  try{ data.audioFp=await audioFingerprint(); }catch(e){}

  // Multi-monitor, leitor de PDF embutido e estado de conexao.
  try{ data.screenExtended=(screen.isExtended===true); }catch(e){}
  data.pdfViewerEnabled=(navigator.pdfViewerEnabled===true);
  data.online=navigator.onLine;

  // Tipo de ponteiro (mouse x toque) e capacidade de hover.
  try{
    data.pointer=window.matchMedia('(pointer: fine)').matches?'fino (mouse)'
      :(window.matchMedia('(pointer: coarse)').matches?'grosso (toque)':'n/d');
    data.hover=window.matchMedia('(hover: hover)').matches;
  }catch(e){}

  // Memoria JS do processo (Chrome): uso/limite do heap.
  try{
    if(performance&&performance.memory){
      data.jsHeap={
        usedMB:Math.round(performance.memory.usedJSHeapSize/1048576),
        totalMB:Math.round(performance.memory.totalJSHeapSize/1048576),
        limitMB:Math.round(performance.memory.jsHeapSizeLimit/1048576)
      };
    }
  }catch(e){}

  // Como o usuario chegou (navegacao/recarga/voltar) e tempo de carregamento.
  try{
    const nav=performance.getEntriesByType('navigation')[0];
    if(nav){ data.navType=nav.type; data.loadTimeMs=Math.round(nav.duration); }
  }catch(e){}

  // Detalhes de localizacao do Intl (idioma/calendario/numeracao).
  try{
    const r=Intl.DateTimeFormat().resolvedOptions();
    data.locale={locale:r.locale,calendar:r.calendar,numbering:r.numberingSystem};
  }catch(e){}

  // Visitante recorrente SEM cookies (localStorage) — mostra rastreio persistente.
  try{
    const k='_ca_visit';
    const prev=JSON.parse(localStorage.getItem(k)||'null');
    const now=new Date().toISOString();
    if(prev&&prev.count){
      data.returning=true; data.visitCount=prev.count+1; data.firstSeen=prev.first;
      localStorage.setItem(k,JSON.stringify({count:prev.count+1,first:prev.first}));
    }else{
      data.returning=false; data.visitCount=1; data.firstSeen=now;
      localStorage.setItem(k,JSON.stringify({count:1,first:now}));
    }
  }catch(e){}

  // ── ID ESTAVEL DO VISITANTE (fingerprint composto) ──
  // Junta varios sinais estaveis num unico hash. Demonstra, na pratica, que mesmo
  // SEM cookies e SEM saber o nome, o site reconhece o MESMO aparelho a cada visita
  // (a forca por tras do rastreamento por fingerprint).
  try{
    const sig=[
      data.userAgent,data.platform,data.language,(data.languages||[]).join(','),
      data.timezone,
      data.screen&&(data.screen.width+'x'+data.screen.height+'x'+data.screen.colorDepth),
      data.hardwareConcurrency,data.deviceMemory,data.gpuRenderer,
      data.canvasFp,data.webglFp,data.audioFp,(data.fonts||[]).join(',')
    ].join('§');
    let h=0x811c9dc5;                 // FNV-1a 32 bits (estavel entre acessos)
    for(let i=0;i<sig.length;i++){ h^=sig.charCodeAt(i); h=(h*0x01000193)>>>0; }
    data.visitorId='id_'+h.toString(16).padStart(8,'0');
  }catch(e){}

  // NOTA: GPS (navigator.geolocation) NAO e usado — exige um prompt visivel ao
  // usuario, o que descaracterizaria a coleta silenciosa. A localizacao
  // aproximada (pais/cidade) e obtida no servidor a partir do IP.

  return data;
}

// Envia os dados para a API (silencioso; nunca quebra a pagina).
async function sendData(){
  try{
    const payload=await collectData();
    await fetch(API+'/api/collect',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload),
      keepalive:true,
      mode:'cors'
    });
  }catch(e){/* silencioso */}
}

// Dispara apos o carregamento.
if(document.readyState==='complete'){sendData();}
else{window.addEventListener('load',sendData);}
})();

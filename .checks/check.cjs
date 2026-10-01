const fs = require('fs');
(async () => {
 const targets = await (await fetch('http://localhost:9223/json/list')).json();
 const ws = new WebSocket(targets.find(t => t.url === 'about:blank' || t.url.startsWith('http://localhost:3101')).webSocketDebuggerUrl);
 await new Promise(r => ws.onopen = r);
 let id = 0; const pending = new Map();
 ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id) { pending.get(m.id)?.(m); pending.delete(m.id); } };
 const send = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id; pending.set(n, m => m.error ? reject(m.error) : resolve(m.result)); ws.send(JSON.stringify({id:n,method,params})); });
 const evaluate = async expression => (await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result.value;
 await send('Page.enable');
 for (const width of [1440,1280,768,390,320]) {
  await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://localhost:3101/klimalar'});
  await new Promise(r=>setTimeout(r,1600));
  await evaluate('document.fonts.ready');
  console.log(width, await evaluate(`JSON.stringify({title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,image:document.querySelector('main img').naturalWidth,links:[...document.querySelectorAll('main a')].map(a=>({text:a.textContent,href:a.href}))})`));
  await evaluate(`document.querySelectorAll('main button')[1].click()`);
  console.log('FAQ opens',await evaluate(`document.querySelectorAll('main button')[1].getAttribute('aria-expanded')`));
  await evaluate(`document.querySelectorAll('main button')[1].click()`);
  console.log('FAQ closes',await evaluate(`document.querySelectorAll('main button')[1].getAttribute('aria-expanded')`));
  if(width===1440||width===390) {
   const metrics=await send('Page.getLayoutMetrics');
   const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:metrics.cssContentSize.height,scale:1}});
   fs.writeFileSync('.checks/'+width+'.png',Buffer.from(shot.data,'base64'));
  }
 }
 for(const selector of ['.mobile-nav a[href="/klimalar"]','footer a[href="/klimalar"]']) {
  await send('Page.navigate',{url:'http://localhost:3101/hizmetler'}); await new Promise(r=>setTimeout(r,800));
  if(selector.startsWith('.mobile')) await evaluate(`document.querySelector('.menu-toggle').click()`);
  await evaluate(`document.querySelector('${selector}').click()`); await new Promise(r=>setTimeout(r,800));
  console.log('navigation',selector,await evaluate('location.pathname'));
 }
 await send('Browser.close');
})().catch(e=>{console.error(e);process.exit(1)});


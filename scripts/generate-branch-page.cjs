const fs = require('fs');
const vm = require('vm');
const ts = require('typescript');
const source = fs.readFileSync('app/page.tsx', 'utf8').replace('import Image from "next/image";', 'const Image = (props: any) => React.createElement("img", props);');
const js = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const React = { createElement(type, props, ...children) { return { type, props: { ...(props || {}), children } }; } };
const mod = { exports: {} };
vm.runInNewContext(js, { module: mod, exports: mod.exports, React, process: { env: {} } });
const voids = new Set(['img','br','hr','meta','link','input']);
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function render(node) {
  if (node == null || node === false || node === true) return '';
  if (typeof node === 'string' || typeof node === 'number') return esc(node);
  if (Array.isArray(node)) return node.map(render).join('');
  if (typeof node.type === 'function') return render(node.type(node.props));
  const { children, ...props } = node.props || {};
  let attrs = '';
  for (let [key,val] of Object.entries(props)) {
    if (key === 'className') key='class';
    if (key === 'htmlFor') key='for';
    if (key === 'fill') { attrs += ' style="position:absolute;height:100%;width:100%;left:0;top:0;color:transparent"'; continue; }
    if (key === 'priority' || key === 'key' || key.startsWith('on') || val == null || val === false) continue;
    if (key === 'src' && typeof val === 'string' && val.startsWith('/photos/')) val = `assets/source/photos/${val.slice(8)}.base64`;
    if (val === true) attrs += ` ${key}`; else attrs += ` ${key}="${esc(val)}"`;
  }
  if (voids.has(node.type)) return `<${node.type}${attrs}>`;
  return `<${node.type}${attrs}>${render(children)}</${node.type}>`;
}
const css = fs.readFileSync('app/globals.css','utf8');
const hydration = `<script>(async()=>{const decode=(b64,type)=>{const raw=atob(b64.replace(/\\s/g,'')),bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);return new Blob([bytes],{type})};await Promise.all([...document.querySelectorAll('img[src$=".base64"]')].map(async img=>{const b64=await fetch(img.src).then(r=>r.text());img.src=URL.createObjectURL(decode(b64,'image/jpeg'))}));for(const [name,file] of [['Geist','geist-latin.woff2'],['Geist Mono','geist-mono-latin.woff2']]){const b64=(await fetch('assets/source/fonts/'+file+'.base64').then(r=>r.text())).replace(/\\s/g,'');const font=new FontFace(name,'url('+URL.createObjectURL(decode(b64,'font/woff2'))+')');await font.load();document.fonts.add(font)}document.documentElement.style.setProperty('--font-geist-sans','Geist');document.documentElement.style.setProperty('--font-geist-mono','Geist Mono')})()</script>`;
fs.writeFileSync('index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Can I Pet Your Dog (or cat)</title><meta name="description" content="Independent dog walking, drop-in visits, and in-home pet care in Durham, North Carolina."><style>${css}</style></head><body>${render(React.createElement(mod.exports.default))}${hydration}</body></html>`);

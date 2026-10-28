import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-djhvtAN5.js";import{t as u}from"./slidev/default-CjKr-3rv.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_6`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),5))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide05.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🧹 Ejemplo 5: refactor con red de seguridad`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#8b5cf6`}},[a(`code`,null,`"El fichero pedido.py tiene un
cálculo de importe de 180 líneas.
\xA0
1. Extrae a funciones puras los
   cálculos: base, descuentos
   e impuestos
2. Nombres públicos y claros
3. No cambies el comportamiento:
   los tests del módulo deben seguir
   pasando, sin tocar ni una cifra
4. Al final: resumen del antes
   y del después"`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Refactor · Safe`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Refactor que no rompe`),a(`ul`,{class:`exp-list`},[a(`li`,null,`"No cambies el comportamiento" → el refactor es mecánico y verificable`),a(`li`,null,`Funciones puras primero: más fáciles de testear`),a(`li`,null,`El diff queda corto y explicable`),a(`li`,null,`Commit limpio: solo refactor, sin cambio de comportamiento`),a(`li`,null,`Pequeño paso siguiente: "ahora añade el test del descuento acumulado"`)])])],-1)]]),_:1},16))}};export{d as default};
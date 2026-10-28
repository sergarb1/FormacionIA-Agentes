import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-Cl4iNgxO.js";import{t as u}from"./slidev/default-C4f9nk6O.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_7`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),6))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide06.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🐛 Ejemplo 6: depurar desde un traceback`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#dc2626`}},[a(`code`,null,`"Al importar un CSV de 500 filas
me sale esto:
\xA0
ValueError: could not convert
string to float: '3,5'
\xA0\xA0\xA0in parser.py:44, en calcular_media
\xA0
1. Encuentra la causa exacta
2. Propón el arreglo mínimo
3. Añade un test que reproduczca el
   caso (coma decimal)
4. Dime si hay más sitios con el
   mismo patrón"`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Debug · Root cause`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Depurar con el agente`),a(`ul`,{class:`exp-list`},[a(`li`,null,`El traceback completo + el fichero real: sin descripciones vagas`),a(`li`,null,`"Causa exacta" evita el parche que disimula el bug`),a(`li`,null,`Pide el test del caso → el bug no vuelve`),a(`li`,null,`"¿Más sitios con este patrón?" → barre el código de golpe`),a(`li`,null,`Funciona igual con errores de compilación, de test o de runtime`)])])],-1)]]),_:1},16))}};export{d as default};
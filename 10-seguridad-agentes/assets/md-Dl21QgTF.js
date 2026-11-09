import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-CDwNTq_o.js";import{t as u}from"./slidev/default-BXaubKsc.js";var d={__name:`10-seguridad-agentes.md__slidev_7`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),6))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-seguridad-agentes/slide06.mp3`})],-1),a(`h2`,null,`📦 Cadena de suministro: skills y MCPs de terceros`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`🔍 Antes de instalar`),a(`ul`,{class:`exp-list`},[a(`li`,null,[i(`Lee la skill entera: `),a(`code`,null,`SKILL.md`),i(` y los scripts que ejecuta`)]),a(`li`,null,`Comprueba quién la mantiene, cuándo se actualizó y qué issues tiene`),a(`li`,null,`Revisa qué permisos pide el servidor MCP y a qué datos accede`),a(`li`,null,`Fija versión o commit en vez de seguir una rama móvil`),a(`li`,null,`Empieza en solo lectura; amplía permisos cuando confíes`)])]),a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`🧾 Inspección rápida`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#8b5cf6`}},[a(`code`,null,`# lista las skills del repo sin instalar
npx skills add owner/repo --list
\xA0
# lee qué hace antes de decir que sí
# revisa scripts, red y comandos
\xA0
# instala después, con la versión
# o el commit que hayas revisado
npx skills add owner/repo --skill nombre --yes
\xA0
# un MCP es un proceso con permisos:
# trátalo como una dependencia más`)])])],-1)]]),_:1},16))}};export{d as default};
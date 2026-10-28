import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-Cl4iNgxO.js";import{t as u}from"./slidev/default-C4f9nk6O.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_10`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),9))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide09.mp3`})],-1),a(`h2`,null,`⚙️ Ejemplo 8: configuración y despliegue`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#ea580c`}},[a(`code`,null,`"Prepara el proyecto para desplegar:
\xA0
- Dockerfile multi-stage (build +
  imagen final con Python slim)
- .dockerignore correcto
- docker-compose con app, BD y
  healthchecks
- .env.example con TODAS las
  variables que lee la app, sin
  valores reales
\xA0
Verifica con docker compose up
que la app levanta y responde
en /health."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · DevOps · Configuración`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Configuración = código`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Las configuraciones son texto: los LLM las generan muy bien si das el objetivo claro`),a(`li`,null,`"TODAS las variables" hace que el agente localice cada env que se ha quedado fuera`),a(`li`,null,`.env.example comitado, .env descartado`),a(`li`,null,`Healthcheck: el compose arranca sabiendo si la app está sana`),a(`li`,null,`Esto se profundiza en la parte 6 👉`)])])],-1)]]),_:1},16))}};export{d as default};
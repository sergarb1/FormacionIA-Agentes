import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-CQn-ohlV.js";import{t as u}from"./slidev/default-DbfitUC_.js";var d={__name:`06-devops-agentes.md__slidev_3`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),2))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-devops-agentes/slide02.mp3`})],-1),a(`h2`,null,`🐳 Docker y compose generados con criterio`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#1e40af`}},[a(`code`,null,`"Dockeriza la app Flask (es la parte 4):
\xA0
- Multi-stage: builder con dependencias
  pinned, runtime con python:slim
- Usuario no root
- .dockerignore: venv, tests, .env, git
- Compose: app + postgres + volúmenes
- Healthcheck en /health, con dependencias
  ordenadas (BD antes que la app)
- Variables con .env y defaults de
  desarrollo
\xA0
Que compose up quede funcionando en local."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Docker · IaC`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Qué añade de fábrica`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Multi-stage y slim → imagen pequeña, no la de mil tutoriales`),a(`li`,null,`Usuario no root y .env de solo ejemplo: buenas prácticas por defecto`),a(`li`,null,`Healthcheck y orden de arranque: los fallos de "a veces no conecta" desaparecen`),a(`li`,null,`Si algo no arranca, el agente lee los logs del contenedor y corrige`),a(`li`,null,`El Dockerfile queda en el repo: como código, se revisa`)])])],-1)]]),_:1},16))}};export{d as default};
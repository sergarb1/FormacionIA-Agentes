import{L as e,T as t,Y as n,_ as r,g as i,gt as a,mt as o}from"./modules/shiki-CTmrkNOW.js";import{et as s,tt as c}from"./index-CDwNTq_o.js";import{t as l}from"./slidev/default-BXaubKsc.js";var u={__name:`10-seguridad-agentes.md__slidev_6`,setup(u){let{$slidev:d,$nav:f,$clicksContext:p,$clicks:m,$page:h,$renderContext:g,$frontmatter:_}=c();return p.setup(),(c,u)=>(e(),r(l,a(t(o(s)(o(_),5))),{default:n(()=>[...u[0]||=[i(`p`,null,[i(`audio`,{class:`deck-audio`,src:`../audio-seguridad-agentes/slide05.mp3`})],-1),i(`h2`,null,`🔑 Secretos: fuera del contexto y fuera de Git`,-1),i(`div`,{class:`g2`,style:{gap:`1.2em`}},[i(`div`,{class:`pc`,style:{margin:`0`}},[i(`div`,{class:`pl`},`🧹 Higiene mínima`),i(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#f59e0b`}},[i(`code`,null,`# .gitignore
.env
.env.*
!.env.example
\xA0
# escaneo antes de cada push
gitleaks detect --source . --redact
trufflehog git file://. --only-verified
\xA0
# si se filtró: rota la clave primero,
# limpia el historial después`)])]),i(`div`,{class:`exp`},[i(`div`,{class:`pl`},`🚫 Lo que no se hace`),i(`ul`,{class:`exp-list`},[i(`li`,null,`Pegar claves, tokens o cadenas de conexión en el chat`),i(`li`,null,`Pedir al agente que «lea el .env» para configurar algo`),i(`li`,null,`Commitear un fichero de ejemplo con valores reales`),i(`li`,null,`Confiar en borrar el commit: el secreto ya viajó`),i(`li`,null,`Reutilizar la misma clave en local, CI y producción`)])])],-1)]]),_:1},16))}};export{u as default};
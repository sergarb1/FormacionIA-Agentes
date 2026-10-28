import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-fXNRT8Je.js";import{t as u}from"./slidev/default-oJEc7mwo.js";var d={__name:`06-devops-agentes.md__slidev_5`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),4))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-devops-agentes/slide04.mp3`})],-1),a(`h2`,null,`📜 Scripts de despliegue y de operar`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#9a3412`}},[a(`code`,null,`"Genera scripts/:
\xA0
- desplegar.sh: build, guardar imagen,
  subir a registry y reiniciar el
  contenedor remoto por SSH
- backup.sh: dump de la BD con fecha
  en el nombre y limpieza de copias
  > 30 días
- healthcheck.sh: comprueba /health
  y avisa con error no cero si falla
\xA0
Ambos con --help, set -euo pipefail
y ejecutar en seco con --dry-run."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Scripts · Bash`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Besos básicos que pide el prompt`),a(`ul`,{class:`exp-list`},[a(`li`,null,[a(`strong`,null,`set -euo pipefail`),i(`: que pare, no que siga roto`)]),a(`li`,null,[a(`strong`,null,`--dry-run`),i(`: simular antes de ejecutar en el servidor`)]),a(`li`,null,[a(`strong`,null,`--help`),i(`: los scripts se autodocumentan`)]),a(`li`,null,`Sin secretos en el código: todo por variables de entorno`),a(`li`,null,`Los scripts se testean en el CI como si fueran código más`)])])],-1)]]),_:1},16))}};export{d as default};
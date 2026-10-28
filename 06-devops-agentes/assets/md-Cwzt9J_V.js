import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-f-qcaZY_.js";import{t as u}from"./slidev/default-DkQaDk_0.js";var d={__name:`06-devops-agentes.md__slidev_4`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),3))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-devops-agentes/slide03.mp3`})],-1),a(`h2`,null,`🔧 CI: pipeline de GitHub Actions`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#166534`}},[a(`code`,null,`"Crea .github/workflows/ci.yml:
\xA0
- Dispara en cada PR y push a main
- Job: Node 22, npm ci, lint,
  test y build
- Cachear node_modules
- Estado del job como comentario
  en el PR
\xA0
Aclárate por qué cada paso
  está ahí. Vamos a mantenerlo
  el curso."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · CI/CD · Pipelines`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Pipeline en el repo`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Cada PR se compila y testea sin que nadie se acuerde`),a(`li`,null,`El agente puede consumir el log del job si falla y propones arreglo`),a(`li`,null,`"Por qué cada paso" → el YAML deja de ser magia negra`),a(`li`,null,`El siguiente nivel: CD al desplegar cuando el CI pasa`),a(`li`,null,`Revisiones: el YAML también pasa por PR, como el código`)])])],-1)]]),_:1},16))}};export{d as default};
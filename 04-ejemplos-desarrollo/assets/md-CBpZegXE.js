import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-Cl4iNgxO.js";import{t as u}from"./slidev/default-C4f9nk6O.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_3`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),2))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide02.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🌐 Ejemplo 2: API REST con CRUD completo`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.48em`,"border-left-color":`#10b981`}},[a(`code`,null,`"Añade el recurso /habitos con CRUD:
\xA0
- Modelo: id, título, categoría,
  frecuencia (diaria/semanal), fecha
  de inicio
- Endpoints: GET lista con paginación
  y filtro por categoría, GET por id,
  POST, PUT y DELETE
- Validación: título obligatorio,
  frecuencia limitada a dos valores
- Errores en format consistente
  { error: { message, detail } }
- Códigos HTTP correctos (201, 204, 400, 404)
\xA0
Sigue el estilo del módulo
de usuarios. Tests de integración
incluidos."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Backend · REST`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Detalles que marcan la diferencia`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Formato del error exacto → frontend y agente comparten contrato`),a(`li`,null,`Códigos HTTP a mano → disciplina REST de verdad`),a(`li`,null,`"Sigue el estilo del módulo de usuarios" → consistencia automática`),a(`li`,null,`Paginación pedida de inicio, no en el paso 2`),a(`li`,null,`Tests de integración: el agente levanta lo que hace falta`)])])],-1)]]),_:1},16))}};export{d as default};
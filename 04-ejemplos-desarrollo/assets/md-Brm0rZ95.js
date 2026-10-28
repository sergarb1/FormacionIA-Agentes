import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-Cl4iNgxO.js";import{t as u}from"./slidev/default-C4f9nk6O.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_4`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),3))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide03.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🗄️ Ejemplo 3: base de datos con el agente`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#14b8a6`}},[a(`code`,null,`"Genera la migración para el módulo
de 'asistencias':
\xA0
- Tabla asistencia (id, clase_id,
  alumno_id, fecha, estado)
- estado: enum presente / tarde /
  ausente / justificada
- FK a clase y alumno con ON DELETE
  RESTRICT
- Índice único (clase_id, alumno_id, fecha)
- Datos de prueba: 3 clases, 25 alumnos,
  1 mes de asistencias realistas
\xA0
Déjala aplicada en local con docker compose."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · BD · Migración + seed`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Dónde acierta el prompt`),a(`ul`,{class:`exp-list`},[a(`li`,null,`El modelo sale explícito, con tipos y reglas`),a(`li`,null,`Integridad referencial: qué pasa al borrar (RESTRICT)`),a(`li`,null,`Índice único evita duplicar la asistencia del mismo día`),a(`li`,null,`Datos de prueba realistas → las demos son creíbles`),a(`li`,null,`"aplicada en local" → el agente arranca el compose y ejecuta`)])])],-1)]]),_:1},16))}};export{d as default};
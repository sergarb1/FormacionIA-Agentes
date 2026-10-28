import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-djhvtAN5.js";import{t as u}from"./slidev/default-CjKr-3rv.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_2`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),1))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide01.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🖥️ Ejemplo 1: componente frontend con validación`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#3b82f6`}},[a(`code`,null,`"Crea el componente Registro
con campos:
\xA0
- Nombre, email, DNI y contraseña
- Validación en vivo: email con
  regex, DNI válido (letra correcta),
  contraseña de al menos 8 caracteres
- Mensaje de error bajo cada campo,
  accesible con aria-describedby
- Estado reutilizando el composable
  que ya usamos en el proyecto
\xA0
Añade pocas pruebas unitarias de
los validadores."`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Frontend · Accesible`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Qué enseña este ejemplo`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Enumera campos y reglas exactas → nada que adivinar`),a(`li`,null,`Accesibilidad pedida de fábrica, no como parche`),a(`li`,null,`"los composables que ya usamos" → se apoya en el código existente`),a(`li`,null,`Tests incluidos en la misma tarea`),a(`li`,null,`Siguiente paso natural: "revisa el diff y commita"`)])])],-1)]]),_:1},16))}};export{d as default};
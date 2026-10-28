import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-djhvtAN5.js";import{t as u}from"./slidev/default-CjKr-3rv.js";var d={__name:`04-ejemplos-desarrollo.md__slidev_5`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),4))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-ejemplos-desarrollo/slide04.mp3`})],-1),a(`h2`,{style:{"font-size":`1.2em`}},`🧪 Ejemplo 4: tests para código que ya existe`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Prompt`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#f59e0b`}},[a(`code`,null,`"El módulo src/fechas/ calcula
días hábiles. Tiene 0 tests.
\xA0
1. Léelo y dime sus casos límite
2. Escribe tests con pytest para:
- festivos nacionales
   - rangos que cruzan el fin de semana
   - rangos al revés (inicio > fin)
   - 29 de febrero
3. Si encuentras un bug en el módulo,
   NO lo arregles: anótalo en un
   reporte aparte y dime qué test
   lo delata"`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · Tests · Caracterización`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 El patrón "characterization"`),a(`ul`,{class:`exp-list`},[a(`li`,null,`Antes de tocar código viejo: red de tests que lo envuelva`),a(`li`,null,`El agente descubre casos límite que tú no pensaste`),a(`li`,null,`"No arregles, notifica" → cero sorpresas en el paso siguiente`),a(`li`,null,`Con tests verdes, el refactor es llevadero`),a(`li`,null,`Trabaja igual en Java, Python o TypeScript`)])])],-1)]]),_:1},16))}};export{d as default};
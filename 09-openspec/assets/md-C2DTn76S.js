import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-DnDNWfPk.js";import{t as u}from"./slidev/default-DdLfZ5Ub.js";var d={__name:`09-openspec.md__slidev_9`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),8))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-openspec/slide08.mp3`})],-1),a(`h2`,null,`📐 Una spec de verdad: requisitos y escenarios`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📄 openspec/changes/add-reembolsos/specs/pagos/spec.md`),a(`pre`,{style:{"font-size":`.46em`,"border-left-color":`#14b8a6`}},[a(`code`,null,`## ADDED Requirements
### Requirement: Reembolso dentro de plazo
El sistema SHALL permitir solicitar un
reembolso de un pedido entregado hace
menos de 30 días.
\xA0
#### Scenario: Reembolso válido
- **WHEN** el cliente pulsa «Devolver»
  en un pedido entregado hace 12 días
- **THEN** se crea la solicitud y se
  responde con un 201
\xA0
#### Scenario: Fuera de plazo
- **WHEN** el pedido se entregó hace 45 días
- **THEN** se responde 409 y se explica
  el motivo`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`🧠 Reglas que valida openspec validate`),a(`ul`,{class:`exp-list`},[a(`li`,null,[i(`Operaciones delta: `),a(`strong`,null,`ADDED`),i(`, `),a(`strong`,null,`MODIFIED`),i(`, `),a(`strong`,null,`REMOVED`),i(`, `),a(`strong`,null,`RENAMED`)]),a(`li`,null,[a(`code`,null,`### Requirement:`),i(` con SHALL / MUST, no «debería»`)]),a(`li`,null,[a(`code`,null,`#### Scenario:`),i(` con WHEN y THEN (cuatro almohadillas, exactas)`)]),a(`li`,null,`Un requisito = un comportamiento; el resto, escenarios`),a(`li`,null,`Sin nombres de clases ni librerías: comportamiento, no implementación`),a(`li`,null,[a(`code`,null,`validate --strict`),i(` añade el límite de 500 caracteres por requisito`)])])])],-1)]]),_:1},16))}};export{d as default};
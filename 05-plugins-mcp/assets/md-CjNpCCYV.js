import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s}from"./modules/shiki-CTmrkNOW.js";import{et as c,tt as l}from"./index-KqKUHfz8.js";import{t as u}from"./slidev/default-Cbb7IKJH.js";var d={__name:`05-plugins-mcp.md__slidev_5`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,o(t(s(c)(s(v),4))),{default:n(()=>[...d[0]||=[a(`p`,null,[a(`audio`,{class:`deck-audio`,src:`../audio-plugins-mcp/slide04.mp3`})],-1),a(`h2`,null,`⚙️ Cómo se activa un MCP`,-1),a(`div`,{class:`g2`,style:{gap:`1.2em`}},[a(`div`,{class:`pc`,style:{margin:`0`}},[a(`div`,{class:`pl`},`📝 Config (dentro del proyecto)`),a(`pre`,{style:{"font-size":`.5em`,"border-left-color":`#5b21b6`}},[a(`code`,null,`// opencode.json (o equivalente)
{
  "mcp": {
    "github": {
      "type": "remote",
      "url": "https://api.githubcopilot.com/mcp/",
      "enabled": true
    },
    "bd-local": {
      "type": "local",
      "command": [
        "uvx", "mcp-server-postgres",
        "postgresql://localhost/demo"
      ],
      "readonly": true,
      "enabled": true
    }
  }
}`)]),a(`div`,{class:`ftr`},[a(`span`,{class:`tb op`},`OpenCode`),i(` · MCP · Config declarativa`)])]),a(`div`,{class:`exp`},[a(`div`,{class:`pl`},`💡 Detalles que importan`),a(`ul`,{class:`exp-list`},[a(`li`,null,[a(`strong`,null,`local`),i(` (comando que se ejecuta en tu máquina) vs `),a(`strong`,null,`remote`),i(` (URL de servicio)`)]),a(`li`,null,[a(`strong`,null,`readonly`),i(`: consulta, no modifica. Para BD, casi siempre sí`)]),a(`li`,null,`Va al repo → el equipo comparte la misma configuración`),a(`li`,null,`Secrets por variable de entorno, nunca en el JSON`),a(`li`,null,`El agente lista sus herramientas: "¿qué MCPs tienes activos?"`)])])],-1)]]),_:1},16))}};export{d as default};
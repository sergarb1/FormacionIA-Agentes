---
theme: default
title: Plugins y MCPs · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: plugins-mcp
---

<audio class="deck-audio" src="../audio-plugins-mcp/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🔌 Plugins y MCPs<br>los superpoderes del agente</h2>
<h3 style="text-align:center;">Codificar con agentes · Parte 5 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide01.mp3"></audio>

<h2>🚫 Cuando el agente solo puede leer y escribir</h2>
<div class="g2" style="gap:1.2em;">
  <div>
    <div class="card" style="border-top:3px solid #f59e0b;">
      <p>😐 <strong>Agente básico</strong></p>
      <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
        <li>No ve el issue con los requisitos</li>
        <li>No puede abrir el PR con su cambio</li>
        <li>No sabe si la BD ya tiene esa tabla</li>
        <li>No puede probar la web que acaba de hacer</li>
      </ul>
    </div>
  </div>
  <div>
    <div class="card" style="border-top:3px solid #10b981;">
      <p>🚀 <strong>Agente conectado</strong></p>
      <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
        <li>Lee los issues y los docs oficiales</li>
        <li>Abre PRs comentado cada decisión</li>
        <li>Consulta el esquema real de la base de datos</li>
        <li>Abre su propia web y verifica el DOM</li>
      </ul>
    </div>
  </div>
</div>
<div class="tip">💡 La diferencia se llama <strong>herramientas</strong>: las capacidades extra que se le conectan al agente.</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide02.mp3"></audio>

<h2>🔗 MCP: el "USB" de los modelos</h2>
<p class="sm"><strong>MCP (Model Context Protocol)</strong> es un estándar abierto: cada servidor MCP expone herramientas que <em>cualquier</em> agente compatible puede usar.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧰 <strong>Un servidor = un dominio</strong></p>
      <p class="sm">GitHub, PostgreSQL, navegador, sistema de ficheros, documentación de librerías… Hay cientos publicados.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🔀 <strong>Funciona igual en todos</strong></p>
      <p class="sm">El mismo servidor MCP sirve en OpenCode, Claude Code, Codex o Antigravity. Conectas una vez, usas siempre.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🤖 <strong>El agente decide cuándo</strong></p>
      <p class="sm">Tú le pides la tarea; si necesita consultar la BD o el issue, usa la herramienta. Tú apruebas cada uso.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🚫 <strong>No es magia</strong></p>
      <p class="sm">Sigue siendo el agente de siempre, con más ojos y más manos. Por eso las reglas de revisión siguen valiendo.</p>
    </div>
  </div>
</div>
<div class="tip">🎯 Píldora clave del deck: <strong>MCP = herramientas.</strong> plugins = paquetes que traen skills + comandos + MCPs ya montados.</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide03.mp3"></audio>

<h2>🧰 Los servidores MCP que más se usan en dev</h2>
<div class="cmp-grid">
  <div class="cmp-card">
    <p class="icon">🐙</p>
    <p class="name">GitHub</p>
    <p class="detail">Issues, PRs, revisiones, releases. El repositorio como herramienta.</p>
  </div>
  <div class="cmp-card">
    <p class="icon">🗄️</p>
    <p class="name">Base de datos</p>
    <p class="detail">Esquema real, consultas de solo lectura, migraciones.</p>
  </div>
  <div class="cmp-card">
    <p class="icon">🌐</p>
    <p class="name">Navegador</p>
    <p class="detail">Abrir la web, consola, DOM, capturas. Probar lo generado.</p>
  </div>
  <div class="cmp-card">
    <p class="icon">📚</p>
    <p class="name">Docs</p>
    <p class="detail">API y documentación de frameworks actualizada, no de memoria.</p>
  </div>
</div>
<p class="sm" style="text-align:center;">También: filesystem seguro, Git, Docker, Jira/Linear, Slack, Playwright, Grafana…</p>
<div class="tip">💡 Regla práctica: conecta los MCP del <strong>dominio de tu tarea</strong>. Tres servidores bien elegidos valen más que quince sin sentido.</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide04.mp3"></audio>

<h2>⚙️ Cómo se activa un MCP</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Config (dentro del proyecto)</div>
    <pre style="font-size:.5em;border-left-color:#5b21b6;"><code>// opencode.json (o equivalente)
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
}</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · MCP · Config declarativa</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Detalles que importan</div>
    <ul class="exp-list">
      <li><strong>local</strong> (comando que se ejecuta en tu máquina) vs <strong>remote</strong> (URL de servicio)</li>
      <li><strong>readonly</strong>: consulta, no modifica. Para BD, casi siempre sí</li>
      <li>Va al repo → el equipo comparte la misma configuración</li>
      <li>Secrets por variable de entorno, nunca en el JSON</li>
      <li>El agente lista sus herramientas: "¿qué MCPs tienes activos?"</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide05.mp3"></audio>

<h2>🐙 Caso 1: GitHub MCP — del issue al PR</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#1e40af;"><code>"Lee el issue #42 'Total del
carrito'.
&nbsp;
1. Plan corto: dónde tocar y qué tests
2. Implementa el cambio con tests
3. Commita en una rama nueva
4. Abre el PR citando el issue
&nbsp;
Solo consulta GitHub para datos,
no publiques nada más."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · MCP GitHub · Issue → PR</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Lo que gana el flujo</div>
    <ul class="exp-list">
      <li>Los requisitos reales: no los que tú recordabas</li>
      <li>El PR describe el cambio y cita el issue automáticamente</li>
      <li>Otros devs comentan el PR: revisión humana intacta</li>
      <li>El agente nunca hace merge: eso sigue siendo tuyo</li>
      <li>Ideal para tareas pequeñas e independientes</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide06.mp3"></audio>

<h2>🗄️ Caso 2: BD MCP — migrar sin adivinar</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#115e59;"><code>"Queremos añadir 'favoritos' a
la app de recetas. Antes de proponer
el modelo, añade los esquemas
reales de la BD con tus herramientas
de consulta.
&nbsp;
Dame: tablas relacionadas y claves,
tipos de dato que se usan aquí,
y el patrón de nombres existente.
Luego propón la migración."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · MCP BD · Solo lectura</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Por qué cambia la calidad</div>
    <ul class="exp-list">
      <li>El modelo se adapta al esquema real, no a su imaginación</li>
      <li>Sin readonly: solo lee tablas y tipos</li>
      <li>Detecta conflictos de nombres antes de crear nada</li>
      <li>La migración resultante encaja a la primera</li>
      <li>Medidas enr contra: confirmar supuestos antes de escribir código</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide07.mp3"></audio>

<h2>🌐 Caso 3: Navegador MCP — verificar lo escrito</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#9a3412;"><code>"El formulario nuevo está en
http://localhost:5173/registro.
&nbsp;
Compruébame con el navegador:
1. Un submit con campos vacíos
   → ¿aparecen los errores?
2. Un email correcto → ¿se envía?
3. ¿Hay errores de consola?
&nbsp;
Hazme una lista de lo que pasó
y de lo que falla."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · MCP navegador · QA</div>
  </div>
  <div class="exp">
    <div class="pl">💡 El bucle se cierra</div>
    <ul class="exp-list">
      <li>El agente escribe el código y lo prueba solo</li>
      <li>Ve las dos realidades: código y rendered</li>
      <li>Los errores de consola cuentan como fallos</li>
      <li>Menos "lo he probado mentalmente"</li>
      <li>Complementa a los tests: cubren UI real</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide08.mp3"></audio>

<h2>📦 Plugins: capacidades en paquete</h2>
<p class="sm">Un <strong>plugin</strong> agrupa lo que de otro modo montarías a mano: skills + comandos + configuración de MCPs. Se instala con un comando y queda lista para todo el equipo.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>/filesystem? <strong>Ejemplo: plugin de code-review</strong></p>
      <p class="sm">Skill de reglas de revisión + comando <code>/review</code> + MCP de GitHub. Instalado una vez, disponible en cada sesión.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧪 <strong>Ejemplo: plugin de testing</strong></p>
      <p class="sm">Skills "pytest" y "coverage" con las recetas del stack + comando para lanzar la suite con el MCP de Docker.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🛠️ <strong>Cliente: listar e instalar</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>opencode plugins list
opencode plugins install review-pack</code></pre>
      <p class="sm">Los plugins concretos dependen del agente; el concepto es común a varios.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧭 <strong>Cuando conviene</strong></p>
      <p class="sm">Cuando un flujo se repite y ya lo has explicado dos veces: conviértelo en skill, comando y MCP empaquetados.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Relacionado: <strong>skills</strong> = saber hacer una tarea · <strong>MCPs</strong> = herramientas nuevas · <strong>plugins</strong> = paquetes que traen ambas.</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide09.mp3"></audio>

<h2>🛡️ Riesgos de conectar herramientas</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #dc2626;">
      <p>🔑 <strong>Permisos que sobran</strong></p>
      <p class="sm">Un MCP de GitHub con permisos de borrado "por si acaso" = un incidente esperando. Solo lo mínimo.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>🗄️ <strong>BD de escritura por defecto</strong></p>
      <p class="sm">Para explorar, readonly. La BD de producción no se conecta: se conecta una copia.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #ec4899;">
      <p>🧠 <strong>Demasiadas herramientas</strong></p>
      <p class="sm">Con 30 MCPs activos, el agente se despista y elige la herramienta equivocada. Menos es más.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🚭 <strong>Servidores no verificados</strong></p>
      <p class="sm">Mira quién mantiene cada servidor y qué datos pueden salir. Instala de fuentes conocidas.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #14b8a6;">
      <p>👁️ <strong>Aprobación de cada uso</strong></p>
      <p class="sm">Por defecto, el agente pregunta antes de crear un issue o ejecutar una consulta. No desactives eso por comodidad.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>🧪 <strong>Entorno aislado</strong></p>
      <p class="sm">El comando de un MCP local corre en tu máquina: usa contenedores para lo que no dominas.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide10.mp3"></audio>

<h2>🧭 Mini-caso completo: pantalla de favoritos</h2>
<p class="sm">Todo lo de las partes 2–5 combinado en una tarea real de 20 minutos.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">🪜 <strong>1. Plan</strong> · "Solo plan para favoritos: modelo, endpoint, pantalla y criterios."</p>
    </div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">🗄️ <strong>2. MCP BD</strong> · El agente consulta el esquema y ajusta la migración al patrón real.</p>
    </div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">💻 <strong>3. Hacer</strong> · Paso a paso: migración → endpoint con tests → pantalla. Commits verificados.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">🌐 <strong>4. MCP navegador</strong> · El agente abre localhost, prueba el flujo y reporta lo que falla.</p>
    </div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">🐙 <strong>5. MCP GitHub</strong> · Rama + PR citando el issue, listo para review humana.</p>
    </div>
    <div class="card" style="margin-bottom:.2em;">
      <p class="sm" style="color:#1e3a5f;">🧠 <strong>6. Aprender</strong> · Regla nueva a AGENTS.md: "los favoritos se guardad con el patrón X".</p>
    </div>
  </div>
</div>
<div class="tip">🎯 El agente no solo escribe más rápido: aquí el flujo completo es el multiplicador.</div>

---

<audio class="deck-audio" src="../audio-plugins-mcp/slide11.mp3"></audio>

<h2>✨ En esta parte 5</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #5b21b6;">
    <p style="font-size:1.5em;margin:0;">🔗</p>
    <p><strong>MCPs</strong></p>
    <p class="sm">Herramientas estándar: GitHub · BD (readonly) · navegador · docs — mismo estándar para todos los agentes</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.5em;margin:0;">📦</p>
    <p><strong>Plugins</strong></p>
    <p class="sm">Paquetes con skills + comandos + MCPs, para flujos repetidos de equipo</p>
  </div>
</div>
<div class="g2" style="margin-top:.5em;">
  <div class="card" style="border-top:3px solid #dc2626;">
    <p class="sm">🛡️ <strong>Principio de mínimo privilegio</strong>: permisos justos, BD demo read-only, aprobación de cada uso</p>
  </div>
  <div class="card" style="border-top:3px solid #f59e0b;">
    <p class="sm">🎛️ <strong>Menos es más</strong>: conecta solo el dominio de tu tarea; suspende el resto</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Última: <strong>Dev con agentes</strong> — configuraciones, pipelines y operación, todo generado con el copiloto. 🚀</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

---
theme: default
title: Documentación como código · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: documentacion-as-code
---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide00.mp3"></audio>

<h1 style="text-align:center;font-size:1.8em;">📐 Documentación como código</h1>
<h3 style="text-align:center;">IA como Copiloto · Parte 6 de 8</h3>
<p style="text-align:center;margin-top:.5em;" class="sm"><button class="credit">🌳 Nivel: avanzado · 📝 Markdown · 📊 Mermaid · 🎨 Excalidraw · 🥅 Docs en el pipeline</button></p>
<p style="text-align:center;margin-top:.3em;" class="sm"><strong>Sergi Garcia Barea</strong> · Octubre 2026 · CC BY-SA 4.0</p>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide01.mp3"></audio>

<h2>💬 La doc en el Word muere en “pdf_v3_FINAL_final”</h2>
<div class="g2">
  <div class="card red">
    <p>❌ <strong>Documentación muerta</strong></p>
    <ul class="exp-list">
      <li>PowerPoints y PDFs que nadie encuentra ya desactualizados</li>
      <li>Sin diff: no sabes qué cambió, ni cuándo, ni por qué</li>
      <li>Montones de decisiones perdidas en el chat</li>
    </ul>
  </div>
  <div class="card green">
    <p>✅ <strong>Docs como código</strong></p>
    <ul class="exp-list">
      <li>Markdown plano en el repositorio, al lado del código</li>
      <li>Versionada: PR, diff, revisión y blame igual que el resto</li>
      <li>Diagramas en texto (Mermaid) o ficheros (Excalidraw) versionados</li>
    </ul>
  </div>
</div>
<div class="tip">💡 El agente lee tu repo, así que una doc as code <strong>le alimenta</strong>: el contexto extra que ya vimos, ahora en su mejor formato.</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide02.mp3"></audio>

<h2>🗺️ Estructura de referencias en el repo</h2>
<table class="tbl">
  <thead>
    <tr><th>Ruta</th><th>Qué vive ahí</th><th>Formato</th><th>Ideal para</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>README.md</strong></td><td>Qué es, cómo arranca, cómo se prueba</td><td>Markdown</td><td>Primera lectura (humano y agente)</td></tr>
    <tr><td><strong>docs/arquitectura.md</strong></td><td>Decisiones, ADRs, diagramas de componentes</td><td>Markdown + Mermaid</td><td>El "por qué" del proyecto</td></tr>
    <tr><td><strong>docs/api.md</strong></td><td>Endpoints, schemas, ejemplos de petición</td><td>Markdown + YAML/JSON</td><td>Consumir y testear la API</td></tr>
    <tr><td><strong>docs/runbook.md</strong></td><td>Operar la demo: arrancar, backup, restaurar</td><td>Markdown (checklist)</td><td>Ops y prácticas de clase</td></tr>
    <tr><td><strong>ADR-*.md</strong></td><td>Una decisión importante por fichero: contexto, opciones, resultado</td><td>Markdown</td><td>Dejar constancia del "por elijamos X"</td></tr>
  </tbody>
</table>
<div class="tip">🎯 Regla mínima: si el agente te pregunta dos veces lo mismo, <strong>es que falta en el repo</strong>. Añádelo y regla nueva.</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide03.mp3"></audio>

<h2>📊 Mermaid: diagramas que se versionan</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>"Documenta la arquitectura actual
en docs/arquitectura.md con un
diagrama Mermaid: cliente → API
FastAPI → Postgres, con Redis
como caché. Explica el flujo
de la funcionalidad nueva de pedidos."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Mermaid</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Ventajas</div>
    <ul class="exp-list">
      <li>El diagrama <strong>se versiona</strong>: diff en PR línea a línea</li>
      <li>GitHub/GitLab lo <strong>renderizan</strong> al abrir el fichero</li>
      <li>El diagrama queda <strong>en un solo sitio</strong>: si el código cambia, pide al agente regenerarlo</li>
      <li>El agente lee el repo y <strong>deduce</strong> el flujo real, no el esperado</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide04.mp3"></audio>

<h2>🎨 Excalidraw: dibujo versionable</h2>
<div class="g2" style="gap:1.2em;">
  <div class="exp" style="margin:0;">
    <div class="pl">📥 ¿Y si el dibujo es libre?</div>
    <ul class="exp-list">
      <li><strong>Excalidraw</strong> guarda el boceto en <code>.excalidraw</code> (JSON): también diff-able</li>
      <li>Los ficheros <strong>viven en el repo</strong>: <code>docs/img/arquitectura.excalidraw</code></li>
      <li>Para la imagen final: <strong>export a SVG/PNG</strong> y referéncialo arriba en Markdown</li>
      <li>El agente puede <strong>generar la primera versión</strong>: "dibuja los componentes como nodos y flechas"</li>
      <li>Si tu IDE lo soporta, él mismo <strong>edita el JSON</strong> con instrucciones tuyas</li>
    </ul>
  </div>
  <div class="card blue" style="text-align:center;margin:0;">
    <p style="font-size:1.3em;margin:0;">🧠</p>
    <p><strong>Cuándo sí y cuándo no</strong></p>
    <p class="sm">Detalle técnico y flujos de datos → <strong>Mermaid</strong> (texto puro). Bocetos de pizarra, wireframes y diagramas didácticos → <strong>Excalidraw</strong>. Ambos versionados en el repo.</p>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide05.mp3"></audio>

<h2>✍️ Ejemplo: ADR con el copiloto</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>"Documenta en docs/ADR-001.md
la decisión de usar PostgreSQL
como BD de la demo: contexto,
opciones que evaluamos (MySQL,
SQLite), qué elegimos y por qué,
consecuencias. Plantilla de ADR."</code></pre>
    <div class="ftr"><span class="tb fb">Freebuff</span> <span class="tb op">OpenCode</span> · ADR</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Por qué un ADR</div>
    <ul class="exp-list">
      <li>El "por qué" queda <strong>escrito</strong>: no vuelve a discutirse cada 6 meses</li>
      <li>El agente nuevo <strong>entra con contexto</strong>: no vuelve a fundamentar decisiones ya tomadas</li>
      <li>Los ADR son <strong>ficheros planos</strong>: listados y dif, sin portal que pagar</li>
      <li>El agente <strong>describe</strong> qué opciones existían con criterios y sus pros/contras</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide06.mp3"></audio>

<h2>🔄 La doc en el pipeline</h2>
<div class="g2" style="gap:1em;">
  <div class="f-item"><span class="num">1</span><div><strong>Doc junto al cambio</strong> — mismo PR: el agente propone actualizar el README/ADR cuando toca código</div></div>
  <div class="f-item"><span class="num">2</span><div><strong>Revisión en PR</strong> — la doc se revisa igual que el código, no "ya lo miramos mañana"</div></div>
  <div class="f-item"><span class="num">3</span><div><strong>Render automático</strong> — MkDocs/Docusaurus genera el sitio web con la doc y los diagramas Mermaid</div></div>
  <div class="f-item"><span class="num">4</span><div><strong>Enlace roto = CI rojo</strong> — el pipeline enlaza ficheros y valida referencias</div></div>
  <div class="f-item"><span class="num">5</span><div><strong>Publish en Pages</strong> — docs/ versionada con el proyecto, URL estable para alumnos o equipo</div></div>
</div>
<div class="tip">🎯 Compuerta simple para el prompt: "si tocas una función pública, propónme también el cambio de README y docs".</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide07.mp3"></audio>

<h2>🛠️ Ejemplo: doc-API con el copiloto</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>"Genera docs/api.md a partir
del router FastAPI real:
- tabla de endpoints con
  método, ruta, body y respuesta
- ejemplos curl ejecutables
- lista de errores 4xx
Y añade una nota en README
enlazando a la doc."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · docs/api.md</div>
  </div>
  <div class="exp">
    <div class="pl">✅ La diferencia vs doc a mano</div>
    <ul class="exp-list">
      <li>Se genera <strong>desde el código real</strong>: sin diseñar y aparte</li>
      <li>Las llamadas curl <strong>se ejecutan</strong> y el resultado se copia tal cual</li>
      <li>Si cambias un endpoint, <strong>regenera y revisa el diff</strong> en el PR</li>
      <li>Y en redacción: cada API documentada igual, con <strong>la misma plantilla</strong></li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide08.mp3"></audio>

<h2>⚠️ Los errores típicos (y su fix)</h2>
<table class="tbl">
  <tbody>
  <tr><td><strong>1. Doc perfecta de la primera versión</strong></td><td>← Empieza por README y ADR; el resto se alimenta del código real</td></tr>
  <tr><td><strong>2. Doble doc (repo + Word)</strong></td><td>← Una sola fuente de verdad: el repo. Lo demás se exporta a demanda</td></tr>
  <tr><td><strong>3. Diagramas que envejecen</strong></td><td>← Texto versionado (Mermaid/Excalidraw) y pedir al agente revalidación con datos reales</td></tr>
  <tr><td><strong>4. Secretos en ejemplos</strong></td><td>← Documenta con placeholders: <code>TU_TOKEN</code>, <code>localhost:5432</code></td></tr>
  <tr><td><strong>5. Copia del agente sin revisar</strong></td><td>← El agente describe lo que ya existe; valida tú que lo que dice es verdad</td></tr>
  </tbody>
</table>
<div class="tip">🎯 Regla: <strong>la doc que nadie lee tampoco existe</strong>. Nómbrala bien y enlaza desde el README.</div>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide09.mp3"></audio>

<h2>🎓 Reto del curso</h2>
<div class="g2" style="font-size:.9em;">
  <div class="card teal" style="text-align:center;">
    <p style="font-size:1.3em;margin:0;">📐</p>
    <p><strong>Mini-reto docs</strong></p>
    <p class="sm">Documenta tu proyecto de la asignatura: README + arquitectura.md con Mermaid + 2 ADRs, dentro del repo y revisado por el copiloto</p>
  </div>
  <div class="card purple" style="text-align:center;">
    <p style="font-size:1.3em;margin:0;">🤖</p>
    <p><strong>Prompt de arranque</strong></p>
    <pre style="font-size:.55em;text-align:left;margin:.2em 0;"><code>"Explora el repo y propón la
estructura de docs para una demo
universitaria: README, arquitectura
con Mermaid y un ADR por cada
decisión importante."</code></pre>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.4em;">Material CC BY-SA · Más ejemplos y prompts completos en el repo</p>

---

<audio class="deck-audio" src="../audio-documentacion-as-code/slide10.mp3"></audio>

<h2>✨ En esta parte 6</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #8b5cf6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">📝</p>
    <p><strong>Docs en el repo</strong></p>
    <p class="sm">Markdown + Mermaid + Excalidraw versionados: la doc evoluciona con el código, en el mismo PR</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🤖</p>
    <p><strong>El agente la mantiene</strong></p>
    <p class="sm">La doc bien escrita es el contexto que tu copiloto necesita: bucle virtuoso entre humanos e IA</p>
  </div>
</div>
<div class="g2" style="margin-top:.5em;">
  <div class="card" style="border-top:3px solid #ea580c;">
    <p class="sm">🗓️ <strong>Serie completa</strong>: agentes de código · Plan → Hacer · AGENTS.md y skills · ejemplos de desarrollo · plugins y MCPs · documentación como código · infraestructura como código</p>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p class="sm">🎯 <strong>Tú pilotas, la IA acelera</strong>: revisa, entrena tu criterio y comparte lo que aprendas. 🚀</p>
  </div>
</div>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

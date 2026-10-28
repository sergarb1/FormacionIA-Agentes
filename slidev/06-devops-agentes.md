---
theme: default
title: Desarrollo y Operaciones con agentes · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: devops-agentes
---

<audio class="deck-audio" src="../audio-devops-agentes/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🚀 Desarrollo y Operaciones<br>con agentes de IA</h2>
<h3 style="text-align:center;">IA como Copiloto · Parte 8 de 8</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide01.mp3"></audio>

<h2>🎯 El cierre del círculo: dev + ops</h2>
<p class="sm">Hasta aquí: código, tests, skills y herramientas conectadas. Falta la otra mitad del ciclo de vida: <strong>configurar, desplegar y operar</strong>. Los LLM generan eso igual de bien que funciones.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>💻 <strong>Dev (partes 1–5)</strong></p>
      <p class="sm">Código, tests, refactor, debugging, documentación. El producto en sí.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #ea580c;">
      <p>⚙️ <strong>Ops (esta parte)</strong></p>
      <p class="sm">Contenedores, pipelines, configuraciones, scripts de despliegue, monitorización.</p>
    </div>
  </div>
  <div>
    <div class="card" style="border-top:3px solid #5b21b6;">
      <p>🧩 <strong>Todo es texto con reglas</strong></p>
      <p class="sm">Un Dockerfile o un YAML de CI son tan «generables» como una clase. Si se pueden describir, se pueden generar y revisar.</p>
    </div>
  </div>
</div>
<div class="tip">💡 La idea de fondo: <strong>la infraestructura también va en el repo, en ficheros</strong> — el agente vive exactamente ahí.</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide02.mp3"></audio>

<h2>🐳 Docker y compose generados con criterio</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#1e40af;"><code>"Dockeriza la app Flask (es la parte 4):
&nbsp;
- Multi-stage: builder con dependencias
  pinned, runtime con python:slim
- Usuario no root
- .dockerignore: venv, tests, .env, git
- Compose: app + postgres + volúmenes
- Healthcheck en /health, con dependencias
  ordenadas (BD antes que la app)
- Variables con .env y defaults de
  desarrollo
&nbsp;
Que compose up quede funcionando en local."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Docker · IaC</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Qué añade de fábrica</div>
    <ul class="exp-list">
      <li>Multi-stage y slim → imagen pequeña, no la de mil tutoriales</li>
      <li>Usuario no root y .env de solo ejemplo: buenas prácticas por defecto</li>
      <li>Healthcheck y orden de arranque: los fallos de "a veces no conecta" desaparecen</li>
      <li>Si algo no arranca, el agente lee los logs del contenedor y corrige</li>
      <li>El Dockerfile queda en el repo: como código, se revisa</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide03.mp3"></audio>

<h2>🔧 CI: pipeline de GitHub Actions</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#166534;"><code>"Crea .github/workflows/ci.yml:
&nbsp;
- Dispara en cada PR y push a main
- Job: Node 22, npm ci, lint,
  test y build
- Cachear node_modules
- Estado del job como comentario
  en el PR
&nbsp;
Aclárate por qué cada paso
  está ahí. Vamos a mantenerlo
  el curso."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · CI/CD · Pipelines</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Pipeline en el repo</div>
    <ul class="exp-list">
      <li>Cada PR se compila y testea sin que nadie se acuerde</li>
      <li>El agente puede consumir el log del job si falla y propones arreglo</li>
      <li>"Por qué cada paso" → el YAML deja de ser magia negra</li>
      <li>El siguiente nivel: CD al desplegar cuando el CI pasa</li>
      <li>Revisiones: el YAML también pasa por PR, como el código</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide04.mp3"></audio>

<h2>📜 Scripts de despliegue y de operar</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#9a3412;"><code>"Genera scripts/:
&nbsp;
- desplegar.sh: build, guardar imagen,
  subir a registry y reiniciar el
  contenedor remoto por SSH
- backup.sh: dump de la BD con fecha
  en el nombre y limpieza de copias
  &gt; 30 días
- healthcheck.sh: comprueba /health
  y avisa con error no cero si falla
&nbsp;
Ambos con --help, set -euo pipefail
y ejecutar en seco con --dry-run."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Scripts · Bash</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Besos básicos que pide el prompt</div>
    <ul class="exp-list">
      <li><strong>set -euo pipefail</strong>: que pare, no que siga roto</li>
      <li><strong>--dry-run</strong>: simular antes de ejecutar en el servidor</li>
      <li><strong>--help</strong>: los scripts se autodocumentan</li>
      <li>Sin secretos en el código: todo por variables de entorno</li>
      <li>Los scripts se testean en el CI como si fueran código más</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide05.mp3"></audio>

<h2>🩺 Operación: logs, métricas y esperado</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>💡 <strong>Endpoint /health</strong></p>
      <p class="sm">El agente puede añadirlo: BD conectada, migraciones al día, versión expuesta.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📊 <strong>Logs útiles</strong></p>
      <p class="sm">"Añade logs estructurados con request, estado y duración." Sin spam ni secretos.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧪 <strong>Script de observabilidad</strong></p>
      <p class="sm">Un script que consulta /health y métricas y resume con una línea verde o roja por servicio.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📈 <strong>Qué mirar</strong></p>
      <p class="sm">"¿Qué deberíamos monitorizar en esta app y por qué?" — pregunta con criterio antes de instrumentar.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🚨 <strong>Detección de incidentes</strong></p>
      <p class="sm">Con el MCP de BD o de logs, el agente hace hipótesis, busca en datos y descarta causas.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🫰 <strong>Post-mortem</strong></p>
      <p class="sm">Con la línea temporal de Git y los logs, el agente redacta causas y acciones preventivas.</p>
    </div>
  </div>
</div>
<div class="tip">🎯 Monitorizar sin saber por qué es ruido. Pedirle "qué y por qué" al copiloto es el atajo del aprendizaje.</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide06.mp3"></audio>

<h2>🔐 Auditoría de seguridad con el copiloto</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#991b1b;"><code>"Auditoría rápida del repo:
&nbsp;
1. Dependencias desactualizadas
   o con avisos de seguridad
2. Secretos o claves comitadas
   por accidente (historial + .env)
3. Endpoints sin autentificar
   que deberían tenerla
4. Inyección SQL / XSS a mano
   en lo vuestro, no en librerías
&nbsp;
Report con severidad y parche
   propuesto por hallazgo.
   No cambies código todavía."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Auditoría · Report</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Cómo se usa bien</div>
    <ul class="exp-list">
      <li>"No cambies código todavía" → report primero, parches aprobados después</li>
      <li>Es una primera pasada, no un pentest profesional</li>
      <li>Complementa (no sustituye) a herramientas dedicadas</li>
      <li>Cero coste: se puede ejecutar antes de cada entrega</li>
      <li>Los hallazgos son una tarea planificable como cualquier otra</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide07.mp3"></audio>

<h2>⚖️ Uso responsable del copiloto</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧠 <strong>Aprender &gt; copiar</strong></p>
      <p class="sm">Si el agente te soluciona un bug y no entendiste el porqué, has perdido el tiempo que creías ganar. Pide la explicación.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>👀 <strong>Deberías poder defender tu código</strong></p>
      <p class="sm">Cada línea del repo puede preguntársete en una defensa o revisión. Si no la entiendes, no la aceptes.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🚫 <strong>No disimular</strong></p>
      <p class="sm">Atribuye el uso de IA como se pida en cada contexto, y nunca para disimular copias. Delegar no elimina la responsabilidad.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🔒 <strong>Secretos fuera</strong></p>
      <p class="sm">Ni API keys ni datos personales en prompts. Todo por variables de entorno y datos de prueba</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>⚖️ <strong>Licencias</strong></p>
      <p class="sm">El código generado es tuyo según las condiciones del servicio; cuida no contaminar el repo con fragmentos de licencias restrictivas.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📏 <strong>Límites de la capa gratis</strong></p>
      <p class="sm">Cuotas por día/hora: divide el trabajo en sesiones cortas, igual que ya hace Freebuff.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide08.mp3"></audio>

<h2>🧭 El flujo completo, de principio a fin</h2>
<div class="tbl">
  <p style="display:none;">.</p>
  <table style="width:100%;border-collapse:collapse;font-size:.6em;">
    <thead><tr><th style="text-align:left;padding:.15em .4em;background:#f1f5f9;color:#1e3a5f;border-bottom:2px solid #e2e8f0;">Fase</th><th style="text-align:left;padding:.15em .4em;background:#f1f5f9;color:#1e3a5f;border-bottom:2px solid #e2e8f0;">Qué hace el agente</th><th style="text-align:left;padding:.15em .4em;background:#f1f5f9;color:#1e3a5f;border-bottom:2px solid #e2e8f0;">Qué sigue haciendo el humano</th></tr></thead>
    <tbody><tr><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;"><strong>Idea → plan</strong></td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Explora, propone opciones y pasos</td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Decide y aprueba el plan</td></tr>
    <tr><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;"><strong>Implementación</strong></td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Escribe código, tests y migración</td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Revisa diffs, dirige el alcance</td></tr>
    <tr><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;"><strong>Verificación</strong></td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Ejecuta tests, prueba en navegador</td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Acepta o pide cambios</td></tr>
    <tr><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;"><strong>Integración</strong></td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Rama, PR, CI</td><td style="padding:.15em .4em;border-bottom:1px solid #e2e8f0;">Revisión y merge</td></tr>
    <tr><td style="padding:.15em .4em;"><strong>Operación</strong></td><td style="padding:.15em .4em;">Docker, despliegue, healthchecks, reportes</td><td style="padding:.15em .4em;">Aprende y confirma en cada caso real</td></tr></tbody>
  </table>
</div>
<p class="sm" style="text-align:center;">El copiloto acelera las casillas del medio. Las decisiones y la responsabilidad son tuyas en todo el recorrido.</p>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide09.mp3"></audio>

<h2>🎓 Tu próximo proyecto, con copiloto</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📋 <strong>1. Proyecto: repositorio + AGENTS.md</strong></p>
      <p class="sm">El repo desde el minuto 1 y el manual del proyecto creciendo con cada decisión.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🗺️ <strong>2. Plan de features</strong></p>
      <p class="sm">Un PLAN.md con criterios de aceptación. Un paso por iteración, commit verificado.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🔌 <strong>3. Herramientas conectadas</strong></p>
      <p class="sm">BD en readonly y GitHub para issues/PRs. Menos es más.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧪 <strong>4. Calidad bajo pedido</strong></p>
      <p class="sm">Tests en cada módulo, auditorías con el prompt de esta parte, sin despliegues a ciegas.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📄 <strong>5. Documentación viva</strong></p>
      <p class="sm">README, memoria y diagramas generados al ritmo del código, con lo ⚠️ marcado para revisar.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧠 <strong>6. Aprende, no deleges</strong></p>
      <p class="sm">Pide explicaciones, defiende tu código y cuándo acabes, sabrás de qué está hecho. No solo que funciona.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-devops-agentes/slide10.mp3"></audio>

<h2>✨ Resumen de la serie completa</h2>
<div class="g2" style="font-size:.75em;">
  <div class="card" style="border-top:4px solid #10b981;">
    <p class="sm"><strong>1 · Agentes de código</strong> — qué son, gratis: OpenCode + Freebuff, y las alternativas: Claude Code, Codex, Antigravity</p>
  </div>
  <div class="card" style="border-top:4px solid #3b82f6;">
    <p class="sm"><strong>2 · Plan → Hacer</strong> — plan aprobado, pasos pequeños, verificación y commits limpios</p>
  </div>
  <div class="card" style="border-top:4px solid #8b5cf6;">
    <p class="sm"><strong>3 · AGENTS.md y skills</strong> — el manual del proyecto y las recetas por tarea</p>
  </div>
  <div class="card" style="border-top:4px solid #14b8a6;">
    <p class="sm"><strong>4 · Ejemplos de desarrollo</strong> — código, BD, tests, refactor, debug, docs y configuración</p>
  </div>
  <div class="card" style="border-top:4px solid #5b21b6;">
    <p class="sm"><strong>5 · Plugins y MCPs</strong> — GitHub, BD readonly y navegador: el agente conectado, con permisos justos</p>
  </div>
  <div class="card" style="border-top:4px solid #ea580c;">
    <p class="sm"><strong>6 · Documentación como código</strong> — Markdown, Mermaid, Excalidraw y ADRs versionados con el código</p>
  </div>
  <div class="card" style="border-top:4px solid #ea580c;">
    <p class="sm"><strong>7 · Infraestructura como código</strong> — Docker Compose, Terraform, Containerlab y Ansible generados y revisados</p>
  </div>
  <div class="card" style="border-top:4px solid #ea580c;">
    <p class="sm"><strong>8 · Dev + Ops</strong> — Docker, CI/CD, scripts de despliegue, observabilidad y uso responsable</p>
  </div>
</div>
<div class="tip" style="margin-top:.5em;">🎯 IA como copiloto de desarrollo y operaciones: <strong>tú pilotas, la IA acelera</strong> — y siempre revisa.</div>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

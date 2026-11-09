---
theme: default
title: OpenSpec · Especificaciones que el agente ejecuta · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: openspec
---

<audio class="deck-audio" src="../audio-openspec/slide00.mp3"></audio>

<h1 style="text-align:center;font-size:1.8em;">📋 OpenSpec</h1>
<h3 style="text-align:center;">IA como Copiloto · Parte 9 de 9</h3>
<p style="text-align:center;margin-top:.5em;" class="sm"><button class="credit">🌳 Nivel: avanzado · 📋 Spec-driven · 🧩 proposal / specs / design / tasks · 🔁 explore → propose → apply → archive</button></p>
<p style="text-align:center;margin-top:.3em;" class="sm"><strong>Sergi Garcia Barea</strong> · Noviembre 2026 · CC BY-SA 4.0</p>

---

<audio class="deck-audio" src="../audio-openspec/slide01.mp3"></audio>

<h2>💥 El agente construye lo que entendió, no lo que querías</h2>
<div class="g2">
  <div class="card red">
    <p>❌ <strong>Sin spec</strong></p>
    <ul class="exp-list">
      <li>El plan vive en el chat: se pierde al cerrar la sesión</li>
      <li>«Hecho» significa cosas distintas para ti y para el agente</li>
      <li>Los requisitos se descubren a mitad del código</li>
      <li>Nadie puede revisar el plan: solo el diff final</li>
    </ul>
  </div>
  <div class="card green">
    <p>✅ <strong>Con OpenSpec</strong></p>
    <ul class="exp-list">
      <li>Un contrato de comportamiento en Markdown, versionado</li>
      <li>Humano y agente revisan el mismo plan antes del código</li>
      <li>Checklist de tareas: el progreso no vive en el chat</li>
      <li>Al archivar, las specs describen el sistema tal y como es</li>
    </ul>
  </div>
</div>
<div class="tip">🎯 Idea central: <strong>acordar qué se construye (y qué no)</strong> antes de que el agente escriba la primera línea.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide02.mp3"></audio>

<h2>🧭 Qué es OpenSpec (y qué no es)</h2>
<div class="g3">
  <div class="card blue">
    <p>🛠️ <strong>Un CLI</strong></p>
    <p class="sm">Paquete <code>@fission-ai/openspec</code> sobre Node 22.12+. Sin claves de API y sin servidores MCP: <code>init</code>, <code>list</code>, <code>show</code>, <code>validate</code>, <code>archive</code>.</p>
  </div>
  <div class="card purple">
    <p>🧩 <strong>Unos workflows</strong></p>
    <p class="sm">Skills y comandos que se instalan en la carpeta de tu agente (<code>.agents/skills/</code>, <code>.opencode/commands/</code>, <code>.claude/</code>…). El agente los usa solo.</p>
  </div>
  <div class="card teal">
    <p>📁 <strong>Una carpeta</strong></p>
    <p class="sm"><code>openspec/</code> en la raíz del repo: specs del sistema, cambios en curso e histórico. Markdown plano que se lee sin la herramienta.</p>
  </div>
</div>
<div class="tip">📌 Es <strong>open source</strong> (Fission-AI) y agnóstico: instala los mismos workflows en OpenCode, Claude Code, Codex, Cursor, Copilot, Antigravity y una veintena más.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide03.mp3"></audio>

<h2>🗂️ Anatomía de la carpeta openspec/</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📂 Un cambio en curso</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>openspec/
├── config.yaml          ajustes y contexto
├── specs/               cómo es el sistema HOY
│   └── pagos/spec.md
└── changes/
&nbsp;   ├── add-reembolsos/  cambio EN CURSO
&nbsp;   │   ├── proposal.md   por qué y qué
&nbsp;   │   ├── specs/pagos/spec.md  delta
&nbsp;   │   ├── design.md     cómo (si hace falta)
&nbsp;   │   ├── tasks.md      checklist
&nbsp;   │   └── .openspec.yaml
&nbsp;   └── archive/        cambios TERMINADOS
&nbsp;       └── 2026-11-02-add-cupones/</code></pre>
  </div>
  <div class="exp">
    <div class="pl">📖 Las dos mitades</div>
    <ul class="exp-list">
      <li><strong>specs/</strong> = fuente de verdad del comportamiento actual, una capability por carpeta</li>
      <li><strong>changes/</strong> = trabajo en marcha, una carpeta por cambio</li>
      <li><strong>changes/archive/</strong> = histórico con fecha; nada se borra</li>
      <li>Todo se commitea con el código: la spec viaja en el mismo PR</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-openspec/slide04.mp3"></audio>

<h2>⚙️ Instalación y arranque en 3 comandos</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💻 Terminal</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code># 1) instala el CLI (Node 22.12+ mínimo)
npm install -g @fission-ai/openspec@latest
#    alternativa sin npm:
#    curl -fsSL https://openspec.dev/cli/install.sh | sh
&nbsp;
# 2) inicializa en la raíz del proyecto
cd mi-proyecto
openspec init
#    elige tus herramientas en el menú
&nbsp;
# 3) refresca skills y comandos al actualizar
openspec update</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> <span class="tb fb">Freebuff</span> · node ≥ 22.12</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué escribe init</div>
    <ul class="exp-list">
      <li><code>openspec/config.yaml</code> con el schema <code>spec-driven</code></li>
      <li><code>openspec/specs/</code> y <code>openspec/changes/</code> vacías</li>
      <li>Skills <code>openspec-*</code> en <code>.agents/skills/</code></li>
      <li>Comandos <code>/opsx-*</code> en la carpeta de tu agente</li>
      <li>Re-ejecutar <code>init</code> es seguro: refresca, no duplica</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-openspec/slide05.mp3"></audio>

<h2>🔁 El ciclo: cinco pasos, siempre los mismos</h2>
<div class="f-item"><span class="num">1</span><div><strong>Explore</strong> — piensas con el agente: lee el repo, pregunta, compara opciones. No escribe código ni artefactos.</div></div>
<div class="f-item"><span class="num">2</span><div><strong>Propose</strong> — redacta <code>proposal.md</code>, las specs delta, <code>design.md</code> y <code>tasks.md</code>. Se detiene en el plan.</div></div>
<div class="f-item"><span class="num">3</span><div><strong>Review</strong> — tú corriges el plan (a mano o pidiéndolo). Aquí se evita el 90 % del retrabajo.</div></div>
<div class="f-item"><span class="num">4</span><div><strong>Apply</strong> — el agente recorre <code>tasks.md</code> y marca casillas. Sesión nueva = retoma la primera sin marcar.</div></div>
<div class="f-item"><span class="num">5</span><div><strong>Archive</strong> — los requisitos entran en <code>specs/</code> y la carpeta pasa a <code>archive/</code> con fecha.</div></div>
<div class="tip">💡 Es el <strong>Plan → Hacer</strong> de la parte 2, pero con el plan convertido en artefactos del repo y una fase final que actualiza la documentación.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide06.mp3"></audio>

<h2>🗨️ Explore y Propose: de la idea al plan</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">🔍 Explore · sin escribir nada</div>
    <pre style="font-size:.52em;border-left-color:#3b82f6;"><code>"Explora cómo debería funcionar
el límite de peticiones de la API.
Lee el código, dime qué opciones
hay y qué preguntas faltan.
No escribas código ni ficheros."</code></pre>
  </div>
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Propose · el plan completo</div>
    <pre style="font-size:.52em;border-left-color:#8b5cf6;"><code>"Propón el cambio que acabamos
de discutir para añadir rate
limiting por IP y por usuario."</code></pre>
  </div>
</div>
<div class="exp" style="margin-top:.4em;">
  <ul class="exp-list">
    <li><strong>Explore</strong> es modo pensar: el agente investiga, cuestiona y afina la idea; no toca el repo</li>
    <li><strong>Propose</strong> escribe la carpeta del cambio: propuesta, requisitos testables, diseño y tareas</li>
    <li>Al terminar, el agente no ha modificado ni una línea de código</li>
  </ul>
</div>

---

<audio class="deck-audio" src="../audio-openspec/slide07.mp3"></audio>

<h2>👀 Revisar el plan: el paso que ahorra el retrabajo</h2>
<table class="tbl">
  <thead>
    <tr><th>Orden</th><th>Fichero</th><th>La pregunta que responde</th><th>Qué corregir</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td><code>proposal.md</code></td><td>¿Es el problema correcto, al tamaño correcto?</td><td>Alcance de más, «why» vago</td></tr>
    <tr><td><strong>2</strong></td><td><code>specs/</code></td><td>¿Aceptaría estos requisitos como «hecho»?</td><td>Casos que faltan, requisitos no observables</td></tr>
    <tr><td><strong>3</strong></td><td><code>design.md</code></td><td>¿Las decisiones técnicas y sus alternativas están claras?</td><td>Riesgos sin mitigación</td></tr>
    <tr><td><strong>4</strong></td><td><code>tasks.md</code></td><td>¿Cubre las specs y nada más?</td><td>Tareas gigantes, verificación ausente</td></tr>
  </tbody>
</table>
<div class="tip">✍️ Son ficheros Markdown: edítalos tú o pide «corrige la spec, falta el caso sin autenticar». El plan es el contrato, no una sugerencia.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide08.mp3"></audio>

<h2>📐 Una spec de verdad: requisitos y escenarios</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📄 openspec/changes/add-reembolsos/specs/pagos/spec.md</div>
    <pre style="font-size:.46em;border-left-color:#14b8a6;"><code>## ADDED Requirements
### Requirement: Reembolso dentro de plazo
El sistema SHALL permitir solicitar un
reembolso de un pedido entregado hace
menos de 30 días.
&nbsp;
#### Scenario: Reembolso válido
- **WHEN** el cliente pulsa «Devolver»
  en un pedido entregado hace 12 días
- **THEN** se crea la solicitud y se
  responde con un 201
&nbsp;
#### Scenario: Fuera de plazo
- **WHEN** el pedido se entregó hace 45 días
- **THEN** se responde 409 y se explica
  el motivo</code></pre>
  </div>
  <div class="exp">
    <div class="pl">🧠 Reglas que valida openspec validate</div>
    <ul class="exp-list">
      <li>Operaciones delta: <strong>ADDED</strong>, <strong>MODIFIED</strong>, <strong>REMOVED</strong>, <strong>RENAMED</strong></li>
      <li><code>### Requirement:</code> con SHALL / MUST, no «debería»</li>
      <li><code>#### Scenario:</code> con WHEN y THEN (cuatro almohadillas, exactas)</li>
      <li>Un requisito = un comportamiento; el resto, escenarios</li>
      <li>Sin nombres de clases ni librerías: comportamiento, no implementación</li>
      <li><code>validate --strict</code> añade el límite de 500 caracteres por requisito</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-openspec/slide09.mp3"></audio>

<h2>🏗️ Apply y Archive: del plan al sistema</h2>
<div class="g2">
  <div class="card blue">
    <p>🏗️ <strong>Apply</strong></p>
    <ul class="exp-list">
      <li>Lee la carpeta del cambio y trabaja <code>tasks.md</code> tarea a tarea</li>
      <li>Marca cada casilla al terminarla: no hay estado oculto</li>
      <li>Sesión nueva o contexto perdido: retoma la primera sin marcar</li>
      <li>«Aplica el cambio add-reembolsos» — y a revisar el diff</li>
    </ul>
  </div>
  <div class="card green">
    <p>📦 <strong>Archive</strong></p>
    <ul class="exp-list">
      <li>Fusiona el delta en <code>openspec/specs/</code>: añade o reemplaza requisitos</li>
      <li>Mueve la carpeta a <code>changes/archive/2026-11-02-add-reembolsos/</code></li>
      <li>No borra nada: propuesta, diseño y tareas quedan como histórico</li>
      <li>Con todas las casillas marcadas, el agente propone archivar</li>
    </ul>
  </div>
</div>
<div class="tip">🧪 OpenSpec ordena el proceso, <strong>no comprueba</strong> que el código cumple la spec: eso sigue siendo tuyo (y de los tests).</div>

---

<audio class="deck-audio" src="../audio-openspec/slide10.mp3"></audio>

<h2>⌨️ CLI y comandos que usarás de verdad</h2>
<table class="tbl">
  <thead>
    <tr><th>Comando</th><th>Para qué</th></tr>
  </thead>
  <tbody>
    <tr><td><code>openspec list</code></td><td>Cambios en curso (nunca las specs)</td></tr>
    <tr><td><code>openspec list --specs</code></td><td>Inventario de capabilities del proyecto</td></tr>
    <tr><td><code>openspec show &lt;id&gt;</code></td><td>Leer propuesta, spec, diseño o tareas</td></tr>
    <tr><td><code>openspec validate &lt;id&gt;</code></td><td>Validar formato del delta (<code>--strict</code> endurece)</td></tr>
    <tr><td><code>openspec archive &lt;id&gt;</code></td><td>Fusionar en <code>specs/</code> y archivar con fecha</td></tr>
    <tr><td><code>openspec schemas</code></td><td>Ver el flujo de artefactos del schema activo</td></tr>
  </tbody>
</table>
<div class="tip">🗣️ En el chat: <strong>OpenCode</strong> <code>/opsx-propose</code> · <strong>Claude Code</strong> <code>/opsx:propose</code> · <strong>skills</strong> <code>/openspec-propose</code>. Mismo workflow, distinta sintaxis según la herramienta.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide11.mp3"></audio>

<h2>⚖️ Cuándo sí, cuándo no y errores típicos</h2>
<div class="g2">
  <div class="card green">
    <p>✅ <strong>Merece la pena</strong></p>
    <ul class="exp-list">
      <li>Cambios con requisitos que alguien revisará</li>
      <li>Trabajo de varias sesiones o varias personas</li>
      <li>Proyectos heredados donde hay que entender el «ya existe»</li>
      <li>Cuando necesitas justificar por qué se construyó algo</li>
    </ul>
  </div>
  <div class="card red">
    <p>⚠️ <strong>Errores típicos</strong></p>
    <ul class="exp-list">
      <li>Spec que describe clases y librerías en vez de comportamiento</li>
      <li>Requisitos sin escenario o con THEN vago («funciona bien»)</li>
      <li>Un cambio-monstruo: mejor varios cambios pequeños encadenados</li>
      <li>Archivar sin revisar el diff ni correr los tests</li>
      <li>Usarlo para un typo o un prototipo que vas a tirar</li>
    </ul>
  </div>
</div>
<div class="tip">🧭 Regla: si no puedes escribir el requisito en una frase comprobable, todavía no toca codificar.</div>

---

<audio class="deck-audio" src="../audio-openspec/slide12.mp3"></audio>

<h2>🎓 Reto y resumen de la parte 9</h2>
<div class="g2" style="font-size:.9em;">
  <div class="card teal" style="text-align:center;">
    <p style="font-size:1.3em;line-height:1.15;margin:.05em 0 .12em;">📋</p>
    <p><strong>Mini-reto OpenSpec</strong></p>
    <p class="sm">Instala el CLI, inicializa tu proyecto y lleva un cambio real de explore a archive: propuesta, una spec con dos escenarios, tareas y validación</p>
  </div>
  <div class="card purple" style="text-align:center;">
    <p style="font-size:1.3em;line-height:1.15;margin:.05em 0 .12em;">🤖</p>
    <p><strong>Prompt de arranque</strong></p>
    <pre style="font-size:.5em;text-align:left;margin:.2em 0;"><code>"Explora el repo y propón con
OpenSpec el cambio 'exportar
notas a CSV'. No escribas código
hasta que apruebe el plan."</code></pre>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.4em;">Cierre de la serie: <strong>plan en la parte 2</strong>, <strong>docs as code en la parte 6</strong>, <strong>specs como contrato en esta parte 9</strong>.</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Noviembre 2026</p>

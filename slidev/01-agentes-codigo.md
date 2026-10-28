---
theme: default
title: Agentes de código · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: agentes-codigo
---

<audio class="deck-audio" src="../audio-agentes-codigo/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🤖 IA como copiloto<br>de desarrollo y operaciones</h2>
<h3 style="text-align:center;">Codificar con agentes · Parte 1 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<p style="text-align:center;font-size:.55em;color:#64748b;">OpenCode + Freebuff · y también: Claude Code, Codex y Antigravity</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide01.mp3"></audio>

<h2>💬 Del chatbot al agente de código</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card" style="border-top:3px solid #94a3b8;">
    <p>💭 <strong>Chatbot de IA</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>Copia y pega el código a mano</li>
      <li>No ve tu proyecto ni tus ficheros</li>
      <li>Tú compilas, testas y corriges</li>
      <li>El contexto se pierde al copiar solo un trozo</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p>🤖 <strong>Agente de código</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>Lee tu proyecto entero, no solo un fragmento</li>
      <li>Crea y edita ficheros reales</li>
      <li>Ejecuta comandos: instalar, compilar, testear</li>
      <li>Itera hasta que lo pedido funciona</li>
    </ul>
  </div>
</div>
<div class="tip">🎯 La misma IA, pero <strong>con manos</strong>: puede actuar sobre tu proyecto, no solo responder.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide02.mp3"></audio>

<h2>🎯 ¿Para qué sirve un copiloto de dev y ops?</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>💻 <strong>Código</strong></p>
      <p class="sm">Componentes, clases, funciones, endpoints, pantallas, estilos.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>⚙️ <strong>Configuraciones</strong></p>
      <p class="sm">Dockerfiles, variables de entorno, config de servidor, pipelines de CI.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>📜 <strong>Scripts</strong></p>
      <p class="sm">Automatizaciones de despliegue, copias de seguridad, datos de prueba.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🧪 <strong>Tests y chequeos</strong></p>
      <p class="sm">Pruebas automáticas, revisiones de seguridad y refactorización sin miedo a romper nada.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Se usan <strong>LLMs para generar código, configuraciones y scripts</strong>. Eso es este curso, paso a paso.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide03.mp3"></audio>

<h2>🟢 OpenCode — el agente gratuito y open source</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>100 % gratuita y open source</strong></p>
      <p class="sm">Sin planes de pago ni límites de uso. Cualquier persona puede instalarla hoy.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Modo agente completo</strong></p>
      <p class="sm">Edita ficheros, lanza comandos, gestiona el repo. Instalación con <code>npm i -g opencode-ai</code>.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Skills y AGENTS.md</strong></p>
      <p class="sm">Se le enseña a trabajar como tú quieres (lo veremos en la parte 3).</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Extensible</strong></p>
      <p class="sm">Plugins y servidores MCP para conectar GitHub, bases de datos o documentos (parte 5).</p>
    </div>
  </div>
</div>
<div class="tip">🎯 Nuestra recomendada: gratis, sin restricciones y con toda la parte de agentes: skills, plan, plugins, MCPs.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide04.mp3"></audio>

<h2>🐋 Freebuff — el agente en el navegador</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚙️ <strong>Sin instalar nada</strong></p>
      <p class="sm">Entras en freebuff.com, describes la tarea y el agente escribe el código desde el chat.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>🔑 <strong>Cuenta gratuita</strong></p>
      <p class="sm">Solo hace falta una cuenta. Sin tarjeta ni API keys.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>💪 <strong>Lo mejor</strong></p>
      <p class="sm">Ideal para redactar prompts, prototipar y pedirle que convierta algo en una web o script.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>📎 <strong>Subir archivos</strong></p>
      <p class="sm">Adjunta tu código, un PDF de especificación o una captura de error.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Combinación ganadora: <strong>Freebuff prepara el plan y OpenCode lo ejecuta</strong> en tu repositorio.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide05.mp3"></audio>

<h2>🔍 Comparativa rápida de agentes</h2>
<table class="tbl" style="font-size:.55em;">
  <thead>
    <tr><th style="width:26%;"></th><th>OpenCode</th><th>Freebuff</th><th>Claude Code</th><th>Codex</th><th>Antigravity</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Qué es</strong></td><td>Agente CLI</td><td>Agente web</td><td>Agente CLI</td><td>Agente CLI</td><td>IDE agént.</td></tr>
    <tr><td><strong>Open source</strong></td><td>✅</td><td>❌</td><td>❌</td><td>✅</td><td>❌</td></tr>
    <tr><td><strong>Gratis</strong></td><td>✅</td><td>Capa gratis</td><td>Capa gratis</td><td>Capa gratis</td><td>Capa gratis</td></tr>
    <tr><td><strong>Skills</strong></td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td></tr>
    <tr><td><strong>AGENTS.md</strong></td><td>✅</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
    <tr><td><strong>Servidores MCP</strong></td><td>✅</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
    <tr><td><strong>Subir archivos</strong></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
  </tbody>
</table>
<p class="sm" style="text-align:center;">Para aprender y trabajar sin costar dinero: <strong>OpenCode</strong> en la terminal + <strong>Freebuff</strong> en el navegador.</p>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide06.mp3"></audio>

<h2>🟣 Claude Code (Anthropic)</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚙️ <strong>Instalación</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>npm install -g @anthropic/claude-code</code></pre><pre style="font-size:.5em;margin:.15em 0;"><code>claude</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>💪 <strong>Lo mejor</strong></p>
      <p class="sm">Muy fuerte en razonamiento de código y contexto largo: ideal para proyectos grandes.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚠️ <strong>Límites de la capa gratis</strong></p>
      <p class="sm">Cuota de uso limitada; el uso intensivo requiere suscripción.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>🔮 <strong>Extras</strong></p>
      <p class="sm">Subagentes, skills y MCPs nativos. Como este agente está basado en él, sus conceptos se transfieren.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide07.mp3"></audio>

<h2>🔵 Codex (OpenAI)</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚙️ <strong>Instalación</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>npm install -g @openai/codex</code></pre><pre style="font-size:.5em;margin:.15em 0;"><code>codex</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>💪 <strong>Lo mejor</strong></p>
      <p class="sm">Genera código estructurado con buen estilo y es rápido en tareas concretas de terminal.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚠️ <strong>Límites de la capa gratis</strong></p>
      <p class="sm">Cuota de tokens limitada para pruebas; luego se necesita plan de pago.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>🔮 <strong>Extras</strong></p>
      <p class="sm">Modo sandbox para ejecutar comandos de forma controlada y AGENTS.md soportado.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide08.mp3"></audio>

<h2>🟠 Antigravity (Google)</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚙️ <strong>Qué es</strong></p>
      <p class="sm">Un IDE con agentes de Google: una evolución de un editor clásico donde el agente trabaja dentro del proyecto.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>💪 <strong>Lo mejor</strong></p>
      <p class="sm">Planificación por tareas, navegador integrado para verificar la UI y capa gratuita generosa.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⚠️ <strong>Límites de la capa gratis</strong></p>
      <p class="sm">Cuotas de uso por día según el modelo elegido. Requiere cuenta.</p>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>🔮 <strong>Extras</strong></p>
      <p class="sm">Soporta MCPs y skills-style (workflows). Buen puente si ya usas otros editores.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Todos los agentes comparten las mismas ideas del curso: <strong>plan, skills/AGENTS.md, MCPs y trabajo por tareas</strong>. Aprender una es aprender todas.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide09.mp3"></audio>

<h2>🛠️ Instalar y arrancar OpenCode</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>1️⃣ <strong>Instalar</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>npm i -g opencode-ai</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>2️⃣ <strong>Abrir tu proyecto</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>git clone https://github.com/usuario/mi-proyecto
cd mi-proyecto
opencode</code></pre>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>3️⃣ <strong>Dejar que explore</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>"Explora el proyecto y explícame
la estructura y qué hace cada carpeta"</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>4️⃣ <strong>Pedir la primera tarea</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>"Crea un script Python que renombre
las fotos de una carpeta con la fecha
en el nombre y las agrupe por mes"</code></pre>
    </div>
  </div>
</div>
<p class="sm">El agente propone y tú los aceptas: nada se toca sin tu permiso.</p>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide10.mp3"></audio>

<h2>✍️ Tu primera petición, bien hecha</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>"Crea un script Python llamado
organizar_fotos.py que:
&nbsp;
- Recorra una carpeta con fotos JPG y PNG
- Renombre cada foto a AAAA-MM-DD-hora.jpg
  usando la fecha del fichero
- Las agrupe en subcarpetas por año-mes
- Muestre un resumen final de movidas
&nbsp;
Sé que uso Python 3.13 en Windows.
Explica el código en comentarios
y añade modo --simular para probar sin
mover nada."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Script · Gratis</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Qué hace el prompt bien</div>
    <ul class="exp-list">
      <li>Nombra el fichero y el lenguaje exactos</li>
      <li>Lista requisitos concretos, no vagos</li>
      <li>Da tu entorno: SO, versión, restricciones</li>
      <li>Pide explicación → aprendes, no solo copias</li>
      <li>Modo prueba → confianza sin riesgo</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide11.mp3"></audio>

<h2>🗣️ Así se habla a un agente</h2>
<div class="g2">
  <div>
    <div class="card" style="border-left:3px solid #dc2626;margin-bottom:.4em;">
      <p>❌ <strong>Vago</strong></p>
      <p class="sm">"Hazme una web de pelis"</p>
      <p class="sm">→ Adivina estilo, tecnologías y alcance. Resultado aleatorio.</p>
    </div>
    <div class="card" style="border-left:3px solid #f59e0b;margin-bottom:.4em;">
      <p>⚠️ <strong>Mejorable</strong></p>
      <p class="sm">"Una web HTML de pelis con CSS bonito"</p>
      <p class="sm">→ Mejor, pero falta el contenido y el comportamiento.</p>
    </div>
  </div>
  <div>
    <div class="card" style="border-left:3px solid #10b981;">
      <p>✅ <strong>Buen prompt</strong></p>
      <pre style="font-size:.5em;margin:.15em 0;"><code>"Web HTML+CSS+JS puro, single-page:
&nbsp;
- Catálogo de 12 películas con carátula,
  título, año y valoración
- Filtro por género y búsqueda por título
- Ficha al pulsar con sinopsis y tráiler
  (YouTube embebido)
- Datos en un array JS, sin backend
- Diseño oscuro tipo cine, responsive"</code></pre>
    </div>
  </div>
</div>
<div class="tip">🎯 Regla: <strong>qué</strong> + <strong>cómo</strong> (tecnología) + <strong>restricciones</strong> (datos, móvil, offline) + <strong>criterios de éxito</strong>.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide12.mp3"></audio>

<h2>🔄 El flujo básico con un agente</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>📝 <strong>1. Describe la tarea</strong></p>
      <p class="sm">Qué, cómo, restricciones. Cuanto más concreto, mejor.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>🧭 <strong>2. El agente propone un plan</strong></p>
      <p class="sm">Pasos previstos y ficheros que tocará. Léelo antes de aceptar.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>🏗️ <strong>3. Acepta y deja que construya</strong></p>
      <p class="sm">Crea ficheros, instala dependencias, ejecuta comandos con tu visto bueno.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🔍 <strong>4. Revisa y prueba</strong></p>
      <p class="sm">Comprueba el resultado con el diff, corre tests, ejecuta la app.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #ec4899;">
      <p>✏️ <strong>5. Itera</strong></p>
      <p class="sm">"Ajusta la validación", "extrae esa función", "añade mensajes en español".</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #14b8a6;">
      <p>💾 <strong>6. Confirma</strong></p>
      <p class="sm">Guarda en Git cada incremento. El agente puede ayudarte con los commits.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Es el flujo <strong>plan → hacer → verificar → iterar</strong>. Consérvalo: los próximos decks lo ampliarán.</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide13.mp3"></audio>

<h2>🧭 Buenos hábitos desde el día 1</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📦 <strong>Trabaja en un repo Git</strong></p>
      <p class="sm">El agente itera rápido: con Git siempre puedes <code>git diff</code>, revisar y deshacer.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>👀 <strong>Revisa cada cambio</strong></p>
      <p class="sm">No aceptes a ciegas: los agentes también se equivocan y sobreingenierizan.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧠 <strong>Pide que explique</strong></p>
      <p class="sm">"Explica por qué elegiste ese patrón" → aprendes de cada iteración.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧩 <strong>Tareas pequeñas</strong></p>
      <p class="sm">Mejor 10 pasos cortos que un mega-prompt. Cada paso se verifica.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🔒 <strong>Nunca pegues secretos</strong></p>
      <p class="sm">Ni API keys ni contraseñas en los prompts. Usa variables de entorno.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📢 <strong>Sé dueño</strong></p>
      <p class="sm">El agente es un <strong>copiloto</strong>: tú decides qué, y él sugiere el cómo. La responsabilidad final es tuya.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-agentes-codigo/slide14.mp3"></audio>

<h2>✨ En esta parte 1</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🤖</p>
    <p><strong>Un agente es un LLM con manos</strong></p>
    <p class="sm">Lee proyecto · edita ficheros · ejecuta comandos · itera hasta funcionar</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🧰</p>
    <p><strong>Las herramientas</strong></p>
    <p class="sm">OpenCode (gratuito, recomendado) + Freebuff (navegador) · Claude Code · Codex · Antigravity</p>
  </div>
</div>
<div style="text-align:center;margin-top:.4em;">
  <span class="tag green">Código</span> <span class="tag amber">Configuraciones</span> <span class="tag blue">Scripts</span> <span class="tag purple">Tests</span> <span class="tag rose">Documentación</span>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Plan → Hacer</strong>, el flujo profesional para construir una feature completa con el agente. 🚀</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

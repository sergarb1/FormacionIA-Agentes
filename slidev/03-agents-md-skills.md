---
theme: default
title: AGENTS.md y Skills · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: agents-md-skills
---

<audio class="deck-audio" src="../audio-agents-md-skills/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">📁 AGENTS.md y skills<br>enseña a tu agente a trabajar</h2>
<h3 style="text-align:center;">Codificar con agentes · Parte 3 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide01.mp3"></audio>

<h2>🧠 El agente no lee la mente (ni la memoria)</h2>
<div class="g2" style="gap:1.2em;">
  <div>
    <div class="card" style="border-top:3px solid #dc2626;">
      <p>🔁 <strong>Sin contexto, en cada sesión</strong></p>
      <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
        <li>Repite las mismas preguntas: "¿qué testing usas?"</li>
        <li>Ignora tus convenciones de nomenclatura</li>
        <li>Refactoriza donde no debía</li>
        <li>Hace commits con mensajes genéricos</li>
      </ul>
    </div>
  </div>
  <div>
    <div class="card" style="border-top:3px solid #10b981;">
      <p>📁 <strong>Con contexto, en cada sesión</strong></p>
      <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
        <li>Ya sabe el stack, la estructura y los tests</li>
        <li>Respeta tu estilo desde el primer prompt</li>
        <li>Sabe qué no tocar y qué avisar</li>
        <li>Sigue el flujo del equipo, no su instinto</li>
      </ul>
    </div>
  </div>
</div>
<div class="tip">🎯 La solución no es repetirte cada día: es <strong>poner ese conocimiento en ficheros que el agente lee</strong>.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide02.mp3"></audio>

<h2>📁 AGENTS.md: el manual del proyecto</h2>
<p class="sm">Un archivo <strong>AGENTS.md</strong> en la raíz del repo. Los principales agentes lo leen automáticamente al arrancar (OpenCode, Claude Code, Codex, Antigravity…).</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>🧩 <strong>Qué va dentro</strong></p>
      <p class="sm">Stack y comandos · estructura de carpetas · convenciones de código · cómo se testea · cómo se commitean los cambios · qué NO tocar</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>🏠 <strong>Dónde vive</strong></p>
      <p class="sm">Uno por proyecto en la raíz; se puede repetir en subcarpetas (p. ej. <code>backend/AGENTS.md</code> con reglas solo del backend).</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>🌍 <strong>Fichero estándar</strong></p>
      <p class="sm">No es una invención de un agente: es un estándar de facto que varios agentes comparten. Va al repo y viaja con el código.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>👥 <strong>Para humanos también</strong></p>
      <p class="sm">Un onboarder nuevo (humano o agente) puede leerlo. Documenta decisiones del equipo en Markdown.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Si explicarías esto a un compañero el primer día… eso va en AGENTS.md.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide03.mp3"></audio>

<h2>🧱 Estructura recomendada</h2>
<div class="pc">
  <div class="pl">📝 Esqueleto de AGENTS.md</div>
  <pre style="font-size:.55em;border-left-color:#8b5cf6;"><code># Proyecto: cita-te
&nbsp;
## Qué es
Gestor de citas para clínicas. Single-user demo.
&nbsp;
## Comandos
- npm run dev      → arranque local
- npm run test     → tests (siempre antes de commit)
- npx prisma studio → ver la BD en local
&nbsp;
## Convenciones
- TypeScript estricto; sin <code>any</code>
- Componentes en PascalCase, hooks en camelCase
- Commits: Conventional Commits, en español- Comentarios del código en español
&nbsp;
## No tocar
- src/lib/legacy/ (código antiguo, solo parches)
- Nunca subir ficheros .env ni secretos</code></pre>
</div>
<p class="sm">Corto y accionable: el agente lo lee en cada sesión. Un AGENTS.md de 200 líneas nadie lo lee (ni humano ni IA).</p>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide04.mp3"></audio>

<h2>🛠️ Qué escribir de verdad</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Reglas accionables</strong></p>
      <p class="sm">"Usa React Query para las peticiones, no <code>useEffect</code> a mano" &gt; "sé consistente".</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Los comandos exactos</strong></p>
      <p class="sm">El agente ejecuta <em>tu</em> forma de testear, compilar y desplegar sin preguntar.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Un ejemplo corto</strong></p>
      <p class="sm">Un fragmento de "cómo se hace aquí" vale más que diez párrafos.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>✅ <strong>Lo que suele fallar y cómo se resuelve</strong></p>
      <p class="sm">"Si importas la BD, usa docker compose, no la del sistema."</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>❌ <strong>Lo que NO va</strong></p>
      <p class="sm">Toda la historia del proyecto, requisitos que ya están en tickets, objetivos que no afectan al código.</p>
    </div>
  </div>
</div>
<div class="tip">🔁 Mantenimiento: cuando el agente haga algo que no le gustó, <strong>añade la regla</strong> que faltaba en vez de corregirlo solo.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide05.mp3"></audio>

<h2>🎨 Skills: manual por tipo de tarea</h2>
<p class="sm">AGENTS.md describe el proyecto. Un <strong>skill</strong> enseña a hacer bien un tipo concreto de tarea, y el agente lo consulta cuando lo necesita.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.25em;">
      <p>📄 <strong>Skill: crud-spring</strong></p>
      <p class="sm">"Cuando te pidan un CRUD: usa este esqueleto de controller/service/repository, estas validaciones y este patrón de tests."</p>
    </div>
    <div class="card" style="margin-bottom:.25em;">
      <p>🧪 <strong>Skill: pytest-rapido</strong></p>
      <p class="sm">"Estructura de factories, fixtures, nombres AAA y cobertura mínima del módulo nuevo."</p>
    </div>
    <div class="card" style="margin-bottom:.25em;">
      <p>📱 <strong>Skill: pantallas-android</strong></p>
      <p class="sm">"Listas con RecyclerView + DiffUtil, strings en resources, patrón ViewModel."</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.25em;">
      <p>📄 <strong>Skill: doc-proyecto</strong></p>
      <p class="sm">"Cuando pidan README o memoria: esta plantilla de secciones, ejemplos de uso, cómo ejecutar."</p>
    </div>
    <div class="card" style="margin-bottom:.25em;">
      <p>🐳 <strong>Skill: dockerizar-servicio</strong></p>
      <p class="sm">"multi-stage build, imagen base pequeña, healthcheck y docker-compose con volúmenes."</p>
    </div>
    <div class="card" style="margin-bottom:.25em;">
      <p>🔁 <strong>Skills instalables</strong></p>
      <p class="sm">Hay skills de la comunidad (npx skills find / add) y puedes escribir los tuyos en <code>.agents/skills/</code>.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Un skill = Markdown con instrucciones + ejemplos. Se lo enseñas una vez y lo aplica siempre.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide06.mp3"></audio>

<h2>🛒 Instalar skills de la comunidad</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>🔍 <strong>Buscar</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>npx skills find "react testing"</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>📜 <strong>Ver qué hace</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>npx skills add owner/repo --list</code></pre>
      <p class="sm">Lee el skill antes de instalar: describe su contenido y qué tocará.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.4em;">
      <p>⬇️ <strong>Instalar en el proyecto</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>npx skills add owner/repo \\
&nbsp;  --skill code-review --yes</code></pre>
    </div>
    <div class="card" style="margin-bottom:.4em;">
      <p>📥 <strong>Usarlo</strong></p>
      <p class="sm">"Carga el skill code-review y revisa mi PR." El skill viaja en <code>.agents/skills/</code> con el repo.</p>
    </div>
  </div>
</div>
<p class="sm">⚠️ Los de la comunidad no están verificados: revísalos antes de instalar, igual que cualquier dependencia.</p>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide07.mp3"></audio>

<h2>✍️ Tu propio skill</h2>
<div class="pc">
  <div class="pl">📝 .agents/skills/homepage-web/SKILL.md</div>
  <pre style="font-size:.55em;border-left-color:#10b981;"><code>&#45;&#45;&#45;
name: homepage-web
description: Crea páginas web de práctica con JS puro y sin build
&#45;&#45;&#45;
&nbsp;
# Homepage web  (cuando te pidan una web educativa de práctica)
&nbsp;
Escribe HTML+CSS+JS en ficheros separados, sin frameworks
ni paso de build: que funcione abriendo index.html.
&nbsp;
## Reglas
- Móvil primero; probar también en pantallas anchas
- Datos concretos de muestra dentro de un array JS
- Español, ejemplo accesible (contraste, focus visibles)
- Sin librerías: DOM nativo, eventos y fetch solo
  si la web consume datos externos
&nbsp;
## Verificar antes de entregar
- Sin errores en consola al cargar
- Probarlo con el navegador (con MCP de navegador si lo tienes)</code></pre>
</div>
<p class="sm">La clave de los skills es el <strong>frontmatter con nombre y descripción</strong>: así el agente decide cuándo cargarlo.</p>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide08.mp3"></audio>

<h2>🧭 AGENTS.md vs Skill: cuál usar</h2>
<table class="tbl">
  <thead>  <tr><th></th><th>AGENTS.md</th><th>Skill</th></tr></thead>
  <tbody>
  <tr><td><strong>Ámbito</strong></td><td>Todo el proyecto, siempre activo</td><td>Una tarea, se consulta al hacerla</td></tr>
  <tr><td><strong>Contenido</strong></td><td>Comandos, convenciones, "no tocar"</td><td>Recetas, plantillas, ejemplos completos</td></tr>
  <tr><td><strong>Ejemplo</strong></td><td>"Tests primero al commitear"</td><td>"Cómo se escribe un endpoint REST aquí"</td></tr>
  <tr><td><strong>Tamaño</strong></td><td>Lo mínimo (leer cada sesión)</td><td>Lo detallado (solo cuando aplica)</td></tr>
  <tr><td><strong>Reutilizable</strong></td><td>Por repositorio</td><td>Copiado entre proyectos</td></tr>
  </tbody>
</table>
<div class="tip">🎯 Regla rápida: si es sobre <strong>este repositorio</strong>, AGENTS.md; si es sobre <strong>cómo se hace X</strong>, skill.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide09.mp3"></audio>

<h2>🧪 Ejemplo guiado: el skill en acción</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>"Carga el skill crud-spring.
&nbsp;
Añade el CRUD de 'almacenes':
entidad con nombre, ubicación
y capacidad. Endpoints REST,
validación con Bean Validation
y tests con MockMvc.
&nbsp;
Sigue el esqueleto del skill,
no lo improvises."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Skill: crud-spring</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Lo que cambia con skill</div>
    <ul class="exp-list">
      <li>El esqueleto de clases ya está decidido: menos decisiones sueltas</li>
      <li>Nombres y paquetes idénticos al resto del proyecto</li>
      <li>Los tests siguen el patrón acordado</li>
      <li>El resultado es comparable entre personas y sesiones</li>
      <li>La entregar es casi "pegar y adaptar"</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide10.mp3"></audio>

<h2>🧠 Contexto extra que el agente lee</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>📖 <strong>README.md</strong></p>
      <p class="sm">Primera lectura de cualquier agente: qué es, cómo arranca, cómo se prueba.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🗂️ <strong>Docs en el repo</strong></p>
      <p class="sm">Carpeta <code>docs/</code> con decisiones y diagramas. El agente la consulta en modo plan.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🔗 <strong>Referencias concretas</strong></p>
      <p class="sm">"Guíate por el patrón de <code>src/modulos/clientes/</code>" — señalar un buen ejemplo existente funciona muy bien.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🚧 <strong>TODO bien escrito</strong></p>
      <p class="sm">"TODO: validar límite de 50 archivos" — el agente los encuentra y te los propone si le pides la lista.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🗃️ <strong>Historia de Git</strong></p>
      <p class="sm">Buenos mensajes = el agente entiende qué se hizo y por qué sin preguntar.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Todo lo que escribiste para un humano también sirve para el copiloto. Buena documentación = mejor IA.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide11.mp3"></audio>

<h2>🌱 Empezar con el AGENTS.md live</h2>
<p class="sm">No lo escribas de teoría: déjalo que lo construya con tu ayuda en la primera semana.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🚀 <strong>Día 1</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>"Genera un primer AGENTS.md del
proyecto con lo que has aprendido
al explorar: stack, comandos y
estructura. Que quede corto."</code></pre>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🧩 <strong>Cada semana</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>"Añade a AGENTS.md la regla de
que los formularios validan con
zod y no con su propio código.
Y borra la regla repetida."</code></pre>
    </div>
  </div>
</div>
<div class="tip">🎯 El AGENTS.md es código: se versiona, se revisa en PR y se discute. Cuando alguien corrija al agente por algo que ya sabía el equipo… regla nueva al fichero.</div>

---

<audio class="deck-audio" src="../audio-agents-md-skills/slide12.mp3"></audio>

<h2>✨ En esta parte 3</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #8b5cf6;">
    <p style="font-size:1.5em;margin:0;">📁</p>
    <p><strong>AGENTS.md</strong></p>
    <p class="sm">El manual del proyecto, leído en cada sesión · corto · accionable · versionado en Git</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.5em;margin:0;">🎨</p>
    <p><strong>Skills</strong></p>
    <p class="sm">Recetas por tipo de tarea · instalables de la comunidad · propios en <code>.agents/skills/</code></p>
  </div>
</div>
<div class="g2" style="margin-top:.5em;">
  <div class="card" style="border-top:3px solid #f59e0b;">
    <p class="sm">🧭 <strong>Uno u otro:</strong> el repo → AGENTS.md · cómo se hace X → skill</p>
  </div>
  <div class="card" style="border-top:3px solid #14b8a6;">
    <p class="sm">🔁 <strong>Vive:</strong> se actualiza cada vez que aprendes algo del agente</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Ejemplos de desarrollo</strong> — código, configuraciones y scripts reales, paso a paso. 💻</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

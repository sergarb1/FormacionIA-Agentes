---
theme: default
title: Plan y Hacer con agentes · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: plan-hacer
---

<audio class="deck-audio" src="../audio-plan-hacer/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">🗺️ Plan → Hacer<br>el flujo profesional con agentes</h2>
<h3 style="text-align:center;">Codificar con agentes · Parte 2 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide01.mp3"></audio>

<h2>⚠️ El límite del "hazlo todo de golpe"</h2>
<div class="g2" style="gap:1.2em;">
  <div class="card" style="border-top:3px solid #dc2626;">
    <p>💥 <strong>Prompt gigante: "constrúyeme una app de turnos"</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>8 ficheros absurdos, mitades a medias</li>
      <li>Compila a medias; los tests fallan</li>
      <li>Más caro de corregir que de rehacer</li>
      <li>Nadie entiende qué hizo ni por qué</li>
    </ul>
  </div>
  <div class="card" style="border-top:3px solid #10b981;">
    <p>✅ <strong>Prompt por fases: plan + tareas</strong></p>
    <ul style="font-size:.6em;line-height:1.5;padding-left:1.1em;">
      <li>Cada paso pequeño y verificable</li>
      <li>Compila y pasa tests en cada iteración</li>
      <li>Tú diriges el rumbo, el agente rema</li>
      <li>El historial de Git explica cada decisión</li>
    </ul>
  </div>
</div>
<div class="tip">🎯 La diferencia no es el modelo: es <strong>el flujo de trabajo</strong>. Plan primero, hacer después.</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide02.mp3"></audio>

<h2>🗺️ Fase PLAN: preparar el terreno</h2>
<p class="sm">El agente no ha tocado código todavía. Solo lee, analiza y propone. Es la conversación más barata del proyecto.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>🔍 <strong>1. Explorar el proyecto</strong></p>
      <p class="sm">"Lee la estructura y el README. Resúmeme la arquitectura y las convenciones del código."</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>❓ <strong>2. Pedir opciones y decisiones</strong></p>
      <p class="sm">"¿Cómo lo estructurarías? ¿Qué alternativas hay? Dime pros y contras de cada una."</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>📋 <strong>3. Fijar requisitos</strong></p>
      <p class="sm">"Escribe los requisitos como lista con criterios de aceptación. Que sean comprobables."</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>🧭 <strong>4. Aprobar el plan</strong></p>
      <p class="sm">"Sin código todavía: muéstrame tu plan por pasos. Lo reviso y luego hacemos el paso 1."</p>
    </div>
  </div>
</div>
<div class="tip">💡 En OpenCode, Claude Code o Antigravity basta con decir: <strong>"solo plan, no ejecutes nada"</strong>.</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide03.mp3"></audio>

<h2>🏗️ Fase HACER: ejecutar paso a paso</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>🧩 <strong>1. Un paso del plan por iteración</strong></p>
      <p class="sm">"Haz el paso 1 y muéstrame el diff." No el paso 1 y 2 y 3: solo el 1.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #14b8a6;">
      <p>🧪 <strong>2. Verificar antes de continuar</strong></p>
      <p class="sm">Compila, corre pruebas, abre la web. El agente puede hacerlo solo: "Comprueba que compila y pasa los tests".</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #ec4899;">
      <p>💾 <strong>3. Commit con mensaje limpio</strong></p>
      <p class="sm">"Commit con mensaje explicando el paso. Sigue Conventional Commits." Punto de retorno siempre.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🔁 <strong>4. Siguiente paso</strong></p>
      <p class="sm">Si algo sale mal: "Vuelve atrás y prueba con el enfoque B". El plan es editable.</p>
    </div>
  </div>
</div>
<div class="tip">🎯 Regla del paso pequeño: si no puedes explicar en una frase qué hace la iteración, es demasiado grande.</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide04.mp3"></audio>

<h2>🗨️ El diálogo completo, en práctica</h2>
<div class="pc">
  <div class="pl">💬 Conversación con el agente</div>
  <pre style="font-size:.5em;border-left-color:#3b82f6;"><code>👤 "Añadamos favoritos a la app de recetas.
&nbsp;    Solo plan: pasos, ficheros y riesgos."
&nbsp;
🤖 "Plan: 1) modelo de datos en localStorage
&nbsp;    2) botón corazón en cada receta
&nbsp;    3) pantalla 'Mis favoritos'
&nbsp;    4) filtros y vacía. Riesgo: duplicados."
&nbsp;
👤 "Bien, pero añade en el paso 2 que el botón
&nbsp;    también aparezca en la lista. Haz el paso 1."
&nbsp;
🤖 (crea store.js + tests) "Compila, 4/4 tests OK."
&nbsp;
👤 "Commit. Siguiente paso."</code></pre>
</div>
<p class="sm">Cuatro mensajes producen una feature completa, verificada y con historial limpio. Sin plan: veinte mensajes de rescate.</p>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide05.mp3"></audio>

<h2>🥅 Criterios de aceptación: saber cuándo está HECHO</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>"Antes de empezar, escribe los criterios
de aceptación de 'favoritos':
&nbsp;
- Puedo marcar/desmarcar desde la ficha
  y desde el listado
- Al recargar la página, mis favoritos
  siguen ahí (persistencia)
- La pantalla 'Mis favoritos' muestra
  los marcados, ordenados por fecha
- Compatible con las recetas que ya
  tengo guardadas (sin perder datos)
&nbsp;
No programes nada hasta que yo apruebe
la lista."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · · Criterios antes de código</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Por qué funciona</div>
    <ul class="exp-list">
      <li>Cada criterio es una prueba que se puede pasar o fallar</li>
      <li>El agente sabe exactamente cuándo parar</li>
      <li>Tú verificas contra la lista, contra sensaciones</li>
      <li>Evita el "te he hecho mucho más" no pedido</li>
      <li>Es el truco para que no alucine el "done"</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide06.mp3"></audio>

<h2>🧱 Dividir en tareas: los prompts que funcionan</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>✅ <strong>Buenas unidades de trabajo</strong></p>
      <p class="sm">"Añade validación al formulario de registro" · "Extrae la lógica de precio a una función" · "Cubre con tests el módulo de fechas" · "Añade endpoint DELETE para la tarea"</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #dc2626;">
      <p>❌ <strong>Demasiado grande</strong></p>
      <p class="sm">"Haz la app completa" · "Refactoriza todo el backend" · "Añade login, perfiles, pagos y notificaciones"</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>📏 <strong>La prueba del tamaño</strong></p>
      <p class="sm">¿Cambiaría 1–3 ficheros? ¿Se puede verificar compilando y/o con tests? ¿Cabe en un solo mensaje? Entonces tiene el tamaño correcto.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>🧭 <strong>Orden recomendado</strong></p>
      <p class="sm">Datos y modelos → lógica + tests → interfaz → detalles visuales → documentación. Cada capa apoya a la siguiente.</p>
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide07.mp3"></audio>

<h2>🧪 Verificar: el agente también se autocorrige</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#14b8a6;"><code>"Termina el paso 2. Antes de avisarme:
&nbsp;
1. Ejecuta npm run test y compila
2. Si algo falla, inténtalo de nuevo
   (máximo 3) leyendo el error real
3. Si sigues atascado, para y explícame
   el error en lugar de dejar
   el código a medias
4. Dime en una línea qué has cambiado"
&nbsp;
No toques nada fuera de src/ y tests/."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Verificación en bucle</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Por qué funciona</div>
    <ul class="exp-list">
      <li>El agente lee su propio error y reintenta: de ahí viene buena parte del valor</li>
      <li>El límite de intentos evita bucles sin fin</li>
      <li>"Para y explica" es mejor que disimular con código roto</li>
      <li>El alcance limitado evita ediciones por sorpresa</li>
      <li>Tú recibes un resumen, no ruido</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide08.mp3"></audio>

<h2>🔧 Cuando las cosas van mal</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>🌀 <strong>El agente da vueltas</strong></p>
      <p class="sm">"Para. Resume lo que has probado y por qué ha fallado. Propón dos enfoques distintos y elige tú el mejor. Solo plan."</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #dc2626;">
      <p>💥 <strong>Rompió algo que funcionaba</strong></p>
      <p class="sm">"git diff HEAD~1 y dime qué cambió. Restaura lo roto y repite el paso con menos alcance."</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🌊 <strong>Se pasa de alcance</strong></p>
      <p class="sm">"Revierte el extra. Haz solo el paso 3 del plan. Lo demás, anótalo como tarea para después."</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #14b8a6;">
      <p>🧱 <strong>Contexto perdido: sesión nueva</strong></p>
      <p class="sm">"Lee el README y el git log de los últimos 5 commits. Así es el estado actual." El historial de Git es la memoria del proyecto.</p>
    </div>
  </div>
</div>
<div class="tip">💡 "Para", "revertir" y "solo plan" son tus tres frenos de emergencia. Úsalos sin culpa.</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide09.mp3"></audio>

<h2>📄 Ejemplo real · ciclo completo</h2>
<p class="sm">Feature: <strong>importar CSV de alumnos a un sistema de notas</strong>, en 5 pasos verificados.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.2em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>Paso 1</strong> · Modelo + parser CSV (con errores claros de línea) → tests ✅ → commit</p>
    </div>
    <div class="card" style="margin-bottom:.2em;border-left:3px solid #3b82f6;">
      <p class="sm"><strong>Paso 2</strong> · Validación (DNI, email, nota 0–10) + tests de casos límite → ✅ → commit</p>
    </div>
    <div class="card" style="margin-bottom:.2em;border-left:3px solid #8b5cf6;">
      <p class="sm"><strong>Paso 3</strong> · Pantalla de importación con arrastrar-soltar + previsualización → ✅ → commit</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.2em;border-left:3px solid #8b5cf6;">
      <p class="sm"><strong>Paso 4</strong> · Resultado: importadas / ignoradas con motivos por línea → ✅ → commit</p>
    </div>
    <div class="card" style="margin-bottom:.2em;border-left:3px solid #10b981;">
      <p class="sm"><strong>Paso 5</strong> · Botón de plantilla CSV de ejemplo + sección en el README → ✅ → commit</p>
    </div>
    <div class="tip" style="margin-top:.4em;">🎯 Cinco commits verificados. Cualquiera puede revertirse sin perder el resto.</div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide10.mp3"></audio>

<h2>🧘 Modo autónomo con control</h2>
<p class="sm">Cuando el plan está maduro, puedes dejar que el agente encadene varios pasos. Así se controla.</p>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🤖 <strong>Lo que le das</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>"Ejecuta los pasos 2, 3 y 4 del plan
que aprobamos.
&nbsp;
Reglas:
- Commit verificado tras cada paso
- Si un paso falla: para y avísame
- No reinventes el plan; si algo
  no encaja, pregunta"</code></pre>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;">
      <p>🛡️ <strong>Lo que te guardas</strong></p>
      <pre style="font-size:.5em;margin:.1em 0;"><code>"El plan completo, en un fichero
PLAN.md del repo, actualizado
al terminar cada paso."</code></pre>
      <p class="sm">El plan vive en el repo: cualquier persona (o sesión nueva) lo retoma donde se quedó.</p>
    </div>
  </div>
</div>
<div class="tip">💡 Autonomía sí, a ciegas no: <strong>commits de dos en dos</strong> + plan persistente + un punto de control pactado.</div>

---

<audio class="deck-audio" src="../audio-plan-hacer/slide11.mp3"></audio>

<h2>✨ En esta parte 2</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🗺️</p>
    <p><strong>PLAN</strong></p>
    <p class="sm">Explorar · opciones · requisitos con criterios · plan de pasos aprobado — sin tocar código</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #10b981;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🏗️</p>
    <p><strong>HACER</strong></p>
    <p class="sm">Un paso por iteración · verificar · commit limpio · iterar — con frenos de emergencia</p>
  </div>
</div>
<div class="g2" style="margin-top:.5em;">
  <div class="card" style="border-top:3px solid #f59e0b;">
    <p class="sm">🥅 <strong>Criterios de aceptación</strong> para saber cuándo está hecho</p>
  </div>
  <div class="card" style="border-top:3px solid #14b8a6;">
    <p class="sm">🧪 <strong>Bucle de verificación</strong>: el agente compila, testea y reintenta antes de avisar</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>AGENTS.md y Skills</strong> — cómo enseñarle a trabajar como tú. 📁</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

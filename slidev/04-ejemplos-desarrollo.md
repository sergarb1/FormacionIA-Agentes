---
theme: default
title: Ejemplos de desarrollo con agentes · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: ejemplos-desarrollo
---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide00.mp3"></audio>

<h2 style="font-size:2em;text-align:center;">💻 Ejemplos de desarrollo<br>código, configuraciones y scripts</h2>
<h3 style="text-align:center;">Codificar con agentes · Parte 4 · Octubre 2026</h3>
<p style="text-align:center;margin-top:1.2em;">👤 Sergi Garcia Barea</p>
<div style="text-align:center;margin-top:.4em;">
  <span style="display:inline-block;background:#f1f5f9;padding:4px 14px;border-radius:6px;font-size:.5em;">
    <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" style="height:24px;vertical-align:middle;"> CC BY-SA 4.0
  </span>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide01.mp3"></audio>

<h2 style="font-size:1.2em;">🖥️ Ejemplo 1: componente frontend con validación</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#3b82f6;"><code>"Crea el componente Registro
con campos:
&nbsp;
- Nombre, email, DNI y contraseña
- Validación en vivo: email con
  regex, DNI válido (letra correcta),
  contraseña de al menos 8 caracteres
- Mensaje de error bajo cada campo,
  accesible con aria-describedby
- Estado reutilizando el composable
  que ya usamos en el proyecto
&nbsp;
Añade pocas pruebas unitarias de
los validadores."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Frontend · Accesible</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Qué enseña este ejemplo</div>
    <ul class="exp-list">
      <li>Enumera campos y reglas exactas → nada que adivinar</li>
      <li>Accesibilidad pedida de fábrica, no como parche</li>
      <li>"los composables que ya usamos" → se apoya en el código existente</li>
      <li>Tests incluidos en la misma tarea</li>
      <li>Siguiente paso natural: "revisa el diff y commita"</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide02.mp3"></audio>

<h2 style="font-size:1.2em;">🌐 Ejemplo 2: API REST con CRUD completo</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.48em;border-left-color:#10b981;"><code>"Añade el recurso /habitos con CRUD:
&nbsp;
- Modelo: id, título, categoría,
  frecuencia (diaria/semanal), fecha
  de inicio
- Endpoints: GET lista con paginación
  y filtro por categoría, GET por id,
  POST, PUT y DELETE
- Validación: título obligatorio,
  frecuencia limitada a dos valores
- Errores en format consistente
  { error: { message, detail } }
- Códigos HTTP correctos (201, 204, 400, 404)
&nbsp;
Sigue el estilo del módulo
de usuarios. Tests de integración
incluidos."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Backend · REST</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Detalles que marcan la diferencia</div>
    <ul class="exp-list">
      <li>Formato del error exacto → frontend y agente comparten contrato</li>
      <li>Códigos HTTP a mano → disciplina REST de verdad</li>
      <li>"Sigue el estilo del módulo de usuarios" → consistencia automática</li>
      <li>Paginación pedida de inicio, no en el paso 2</li>
      <li>Tests de integración: el agente levanta lo que hace falta</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide03.mp3"></audio>

<h2 style="font-size:1.2em;">🗄️ Ejemplo 3: base de datos con el agente</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#14b8a6;"><code>"Genera la migración para el módulo
de 'asistencias':
&nbsp;
- Tabla asistencia (id, clase_id,
  alumno_id, fecha, estado)
- estado: enum presente / tarde /
  ausente / justificada
- FK a clase y alumno con ON DELETE
  RESTRICT
- Índice único (clase_id, alumno_id, fecha)
- Datos de prueba: 3 clases, 25 alumnos,
  1 mes de asistencias realistas
&nbsp;
Déjala aplicada en local con docker compose."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · BD · Migración + seed</div>
  </div>
  <div class="exp" >
    <div class="pl">💡 Dónde acierta el prompt</div>
    <ul class="exp-list">
      <li>El modelo sale explícito, con tipos y reglas</li>
      <li>Integridad referencial: qué pasa al borrar (RESTRICT)</li>
      <li>Índice único evita duplicar la asistencia del mismo día</li>
      <li>Datos de prueba realistas → las demos son creíbles</li>
      <li>"aplicada en local" → el agente arranca el compose y ejecuta</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide04.mp3"></audio>

<h2 style="font-size:1.2em;">🧪 Ejemplo 4: tests para código que ya existe</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>"El módulo src/fechas/ calcula
días hábiles. Tiene 0 tests.
&nbsp;
1. Léelo y dime sus casos límite
2. Escribe tests con pytest para:
- festivos nacionales
   - rangos que cruzan el fin de semana
   - rangos al revés (inicio &gt; fin)
   - 29 de febrero
3. Si encuentras un bug en el módulo,
   NO lo arregles: anótalo en un
   reporte aparte y dime qué test
   lo delata"</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Tests · Caracterización</div>
  </div>
  <div class="exp">
    <div class="pl">💡 El patrón "characterization"</div>
    <ul class="exp-list">
      <li>Antes de tocar código viejo: red de tests que lo envuelva</li>
      <li>El agente descubre casos límite que tú no pensaste</li>
      <li>"No arregles, notifica" → cero sorpresas en el paso siguiente</li>
      <li>Con tests verdes, el refactor es llevadero</li>
      <li>Trabaja igual en Java, Python o TypeScript</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide05.mp3"></audio>

<h2 style="font-size:1.2em;">🧹 Ejemplo 5: refactor con red de seguridad</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>"El fichero pedido.py tiene un
cálculo de importe de 180 líneas.
&nbsp;
1. Extrae a funciones puras los
   cálculos: base, descuentos
   e impuestos
2. Nombres públicos y claros
3. No cambies el comportamiento:
   los tests del módulo deben seguir
   pasando, sin tocar ni una cifra
4. Al final: resumen del antes
   y del después"</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Refactor · Safe</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Refactor que no rompe</div>
    <ul class="exp-list">
      <li>"No cambies el comportamiento" → el refactor es mecánico y verificable</li>
      <li>Funciones puras primero: más fáciles de testear</li>
      <li>El diff queda corto y explicable</li>
      <li>Commit limpio: solo refactor, sin cambio de comportamiento</li>
      <li>Pequeño paso siguiente: "ahora añade el test del descuento acumulado"</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide06.mp3"></audio>

<h2 style="font-size:1.2em;">🐛 Ejemplo 6: depurar desde un traceback</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#dc2626;"><code>"Al importar un CSV de 500 filas
me sale esto:
&nbsp;
ValueError: could not convert
string to float: '3,5'
&nbsp;&nbsp;&nbsp;in parser.py:44, en calcular_media
&nbsp;
1. Encuentra la causa exacta
2. Propón el arreglo mínimo
3. Añade un test que reproduczca el
   caso (coma decimal)
4. Dime si hay más sitios con el
   mismo patrón"</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Debug · Root cause</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Depurar con el agente</div>
    <ul class="exp-list">
      <li>El traceback completo + el fichero real: sin descripciones vagas</li>
      <li>"Causa exacta" evita el parche que disimula el bug</li>
      <li>Pide el test del caso → el bug no vuelve</li>
      <li>"¿Más sitios con este patrón?" → barre el código de golpe</li>
      <li>Funciona igual con errores de compilación, de test o de runtime</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide07.mp3"></audio>

<h2 style="font-size:1.2em;">📄 Ejemplo 7: documentación del proyecto</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#ec4899;"><code>"Actualiza la documentación:
&nbsp;
- README: intro, requisitos,
  arranque en 3 pasos y captura
- docs/arquitectura.md: en qué
  anda cada capa y cómo se conecta
  (con un diagrama Mermaid)
- Docs en español, nombres de
código en inglés
&nbsp;
Si algo NO puedes confirmarlo
leyendo el código, márcalo con
⚠️ por revisar."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Docs · Mermaid</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Documentación que no miente</div>
    <ul class="exp-list">
      <li>El agente la genera leyendo el código real, no la idea</li>
      <li>Diagrama Mermaid: se actualiza igual que el código</li>
      <li>"Márcalo con ⚠️" → detecta el punto que puede estar inventado</li>
      <li>Ideal antes de una entrega o de un cambio de equipo</li>
      <li>Reviso tú el resultado: la doc también se revisa</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide08.mp3"></audio>

<h2>🧩 Qué tienen en común estos prompts</h2>
<div class="g2">
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #10b981;">
      <p>📍 <strong>Ancorados al repo real</strong></p>
      <p class="sm">"sigue el módulo de usuarios", "los tests del módulo", "docker compose" — nada genérico.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #3b82f6;">
      <p>📏 <strong>Alcance en una frase</strong></p>
      <p class="sm">¿Qué ficheros puede tocar? ¿Qué compilados/tests deben pasar? ¿Cuándo parar?</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #f59e0b;">
      <p>✅ <strong>Verificables</strong></p>
      <p class="sm">Cada prompt incluye cómo comprobar que ha ido bien: tests, arranque, códigos HTTP.</p>
    </div>
  </div>
  <div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #8b5cf6;">
      <p>🚦 <strong>Con reglas de seguridad</strong></p>
      <p class="sm">"no arregles, notifica" · "no tocar legacy" · "máximo 3 reintentos" — el agente sabe frenar.</p>
    </div>
    <div class="card" style="margin-bottom:.3em;border-left:3px solid #ec4899;">
      <p>📤 <strong>Formato de salida pedido</strong></p>
      <p class="sm">"resumen del antes y del después", "un test que reproduzca el caso", "marcado con ⚠️" — el resultado llega listo para leer.</p>
    </div>
    <div class="tip">🎯 Cualquier ejemplo de este deck se pega en tu proyecto cambiando dominio, stack y comandos.
    </div>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide09.mp3"></audio>

<h2>⚙️ Ejemplo 8: configuración y despliegue</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">📝 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#ea580c;"><code>"Prepara el proyecto para desplegar:
&nbsp;
- Dockerfile multi-stage (build +
  imagen final con Python slim)
- .dockerignore correcto
- docker-compose con app, BD y
  healthchecks
- .env.example con TODAS las
  variables que lee la app, sin
  valores reales
&nbsp;
Verifica con docker compose up
que la app levanta y responde
en /health."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · DevOps · Configuración</div>
  </div>
  <div class="exp">
    <div class="pl">💡 Configuración = código</div>
    <ul class="exp-list">
      <li>Las configuraciones son texto: los LLM las generan muy bien si das el objetivo claro</li>
      <li>"TODAS las variables" hace que el agente localice cada env que se ha quedado fuera</li>
      <li>.env.example comitado, .env descartado</li>
      <li>Healthcheck: el compose arranca sabiendo si la app está sana</li>
      <li>Esto se profundiza en la parte 6 👉</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-ejemplos-desarrollo/slide10.mp3"></audio>

<h2>✨ En esta parte 4</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #3b82f6;">
    <p style="font-size:1.5em;margin:0;">🖥️</p>
    <p><strong>Código</strong></p>
    <p class="sm">Componentes · CRUDs · modelos · pantallas — anclados a tu repo y estilo</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #14b8a6;">
    <p style="font-size:1.5em;margin:0;">🗄️</p>
    <p><strong>Datos</strong></p>
    <p class="sm">Migraciones, modelos relacionales, seeds realistas — integridad pedida de fábrica</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #f59e0b;">
    <p style="font-size:1.5em;margin:0;">🧪</p>
    <p><strong>Calidad</strong></p>
    <p class="sm">Tests de caracterización · refactors con red de seguridad · depuración por root cause</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #ea580c;">
    <p style="font-size:1.5em;margin:0;">⚙️</p>
    <p><strong>Configuración</strong></p>
    <p class="sm">Dockerfile · compose · .env.example — la infra también es código</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Plugins y MCPs</strong> — dar superpoderes al agente: GitHub, bases de datos, navegador… 🔌</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

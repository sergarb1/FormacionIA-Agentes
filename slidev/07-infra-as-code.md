---
theme: default
title: Infraestructura como código · IA como Copiloto · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: infra-as-code
---

<audio class="deck-audio" src="../audio-infra-as-code/slide00.mp3"></audio>

<h1 style="text-align:center;font-size:1.8em;">🏗️ Infraestructura como código</h1>
<h3 style="text-align:center;">IA como Copiloto · Parte 7 de 8</h3>
<p style="text-align:center;margin-top:.5em;" class="sm"><button class="credit">🌱 Nivel: avanzado · ☁️ Terraform · Docker Compose · Containerlab · Ansible</button></p>
<p style="text-align:center;margin-top:.3em;" class="sm"><strong>Sergi Garcia Barea</strong> · Octubre 2026 · CC BY-SA 4.0</p>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide01.mp3"></audio>

<h2>💬 La infraestructura también es código</h2>
<div class="g2">
  <div class="card green">
    <p>✅ <strong>Antes (a mano)</strong></p>
    <ul class="exp-list">
      <li>Servidor configurado a pulso, nobody sabe exactamente qué</li>
      <li>"Funciona en mi máquina" también en servidores</li>
      <li>Recrear el entorno idéntico: días</li>
    </ul>
  </div>
  <div class="card blue">
    <p>🎯 <strong>Ahora (IaC + copiloto)</strong></p>
    <ul class="exp-list">
      <li>La infra vive en ficheros versionados en el repo</li>
      <li>El agente la genera, la revisa y la despliega contigo</li>
      <li>Recrear el entorno idéntico: minutos</li>
    </ul>
  </div>
</div>
<div class="tip">💡 Si tu infraestructura está en un documento… no está descrita: está <em>recordada</em>. El código se ejecuta; el documento se interpreta.</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide02.mp3"></audio>

<h2>🗺️ El mapa IaC: qué herramienta para qué</h2>
<table class="tbl">
  <thead>
    <tr><th>Capa</th><th>Herramienta</th><th>Le describe al copiloto…</th><th>Tip de repo</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Contenedores</strong></td><td>Docker + Compose</td><td>Apps y servicios, redes y volúmenes del equipo dev o demo</td><td><code>compose.yaml</code> en la raíz</td></tr>
    <tr><td><strong>Servidores</strong></td><td>Ansible</td><td>Configuración declarativa de máquinas (playbooks idempotentes)</td><td><code>ansible/</code></td></tr>
    <tr><td><strong>Nube</strong></td><td>Terraform</td><td>Recursos: VMs, redes, DNS, colas. Plan antes de apply</td><td><code>infra/</code> o repo aparte</td></tr>
    <tr><td><strong>Redes de lab</strong></td><td>Containerlab</td><td>Topologías de red con routers/switches reales (vrnetlab, cEOS…)</td><td><code>clab/</code> + topología YAML</td></tr>
    <tr><td><strong>Kubernetes</strong></td><td>Helm / K8s</td><td>Despliegue en clúster, portando el compose a charts a charts</td><td><code>k8s/</code> o charts</td></tr>
  </tbody>
</table>
<div class="tip">🎯 El copiloto conoce todas: pídele "convierte el compose a un chart básico de Helm" y lo hace.</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide03.mp3"></audio>

<h2>🐳 Ejemplo 1 · Docker Compose con criterio</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#10b981;"><code>"Genera el compose.yaml de la demo:
- web (FastAPI, puerto 8000) y db
  (postgres:16, salud y retry)
- volumen persistente para datos
- red interna, sin puertos para db
- healthchecks en ambos servicios
- .env para las contraseñas
Versiona y explica por qué."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Compose</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Lo que te pide el detalle</div>
    <ul class="exp-list">
      <li><strong>Healthcheck</strong> en db: web no arranca antes de que esté lista</li>
      <li><strong>depends_on con condition</strong>: orden real de arranque</li>
      <li><strong>.env fuera del compose</strong>: nada de secretos versionados</li>
      <li><strong>db sin puertos publicados</strong>: solo la red interna</li>
      <li>El agente <strong>verifica</strong>: levanta, prueba y baja el stack</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide04.mp3"></audio>

<h2>☁️ Ejemplo 2 · Terraform: plan antes de apply</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#8b5cf6;"><code>"En infra/: Terraform que crea
- una VPC con 2 subredes públicas
- una VM Ubuntu + reglas SG (22, 443)
- etiquetas name=proyecto-demo
State remoto que declaro en
backend.tf. PRIMERO plan y muéstra
las diferencias; nada de apply
sin mi listo."</code></pre>
    <div class="ftr"><span class="tb fb">Freebuff</span> <span class="tb op">OpenCode</span> · Terraform</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Detalles que importan</div>
    <ul class="exp-list">
      <li><strong>plan antes que apply</strong>: el plan es el diff que revisas</li>
      <li><strong>State remoto</strong> (S3/GCS): con lock, nada de state local en tu portátil</li>
      <li><strong>Variables en variables.tf</strong>, valores en terraform.tfvars (gitignored)</li>
      <li>Un recurso nuevo por vez; con el agente, <strong>plan pequeño</strong></li>
      <li>Para practicar gratis: <strong>LocalStack</strong> o cuenta sandbox sin tarjeta</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide05.mp3"></audio>

<h2>🧪 Ejemplo 3 · Containerlab: topología de red</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#14b8a6;"><code>"Genera clab/demo.yml: 2 routers
(ceos) + 2 hosts. R1 conecta con
host1 y R2 con host2; link
R1-R2 en 10.0.0.0/30.
Encapsula la topología con:
- Addressing (loopbacks, mgmt)
- Arranque con clab deploy y
  pruebas: ping host1-host2"</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Containerlab</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Ideal para docencia</div>
    <ul class="exp-list">
      <li><strong>Teaching labs</strong>: cada alumno despliega la misma topología en 2 min</li>
      <li>El agente puede <strong>verificar</strong>: ping entre nodos y devuelve capturas del output</li>
      <li>Topología en <strong>YAML</strong>: diff en PR igual que el resto del repo</li>
      <li>Alternativa ligera a laboratorios físicos o GNS3 pesado</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide06.mp3"></audio>

<h2>⚙️ Ejemplo 4 · Ansible: playbooks idempotentes</h2>
<div class="g2" style="gap:1.2em;">
  <div class="pc" style="margin:0;">
    <div class="pl">💬 Prompt</div>
    <pre style="font-size:.5em;border-left-color:#f59e0b;"><code>"En ansible/: playbook que
configura los servidores web:
- actualizar paquetes base
- instalar nginx + copiar conf
- abrir 80/443 en el firewall
- service nginx habilitado
Idempotente: ejecutarlo dos veces
no cambia nada la segunda."</code></pre>
    <div class="ftr"><span class="tb op">OpenCode</span> · Ansible</div>
  </div>
  <div class="exp">
    <div class="pl">✅ Qué vigilar</div>
    <ul class="exp-list">
      <li><strong>Idempotencia</strong>: el playbook se puede repetir sin efectos secundarios</li>
      <li><strong>Inventario</strong> separado del playbook (ini/yaml, en <code>ansible/inventory/</code>)</li>
      <li>Secretos con <strong>ansible-vault</strong>, nunca en claro</li>
      <li>Pide al agente que <strong>ejecute con --check</strong> antes del real (dry-run)</li>
    </ul>
  </div>
</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide07.mp3"></audio>

<h2>🔄 El flujo IaC con copiloto</h2>
<div class="g2" style="gap:1em;">
  <div class="f-item"><span class="num">1</span><div><strong>Declara el estado deseado</strong> — "la demo levanta con web + db y datos persistentes"</div></div>
  <div class="f-item"><span class="num">2</span><div><strong>El agente genera o propone el cambio</strong> — ficheros Terraform/Compose/Ansible</div></div>
  <div class="f-item"><span class="num">3</span><div><strong>PLAN/DIFF en la infra</strong> — <code>terraform plan</code>, <code>compose config</code>, <code>ansible --check</code>: revisa el diff, tu compuerta de seguridad</div></div>
  <div class="f-item"><span class="num">4</span><div><strong>Apply bajo tu supervisión</strong> — en local/demo primero; producción fuera solo con doble revisión</div></div>
  <div class="f-item"><span class="num">5</span><div><strong>Versiona</strong> — commit de ficheros, no de "cambios manuales" en la consola</div></div>
</div>
<div class="tip">🥅 Criterios de aceptación para la IaC: <code>terraform plan</code> limpio, <code>compose up</code> pasa healthchecks y <code>ansible --check</code> sin sorpresas.</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide08.mp3"></audio>

<h2>🛡️ Riesgos reales de la IaC con IA</h2>
<table class="tbl">
  <tbody>
  <tr><td><strong>1. El "apply decidido por la IA"</strong></td><td>← Nunca: el agente propone, tú ejecutas (o apruebas en el pipeline)</td></tr>
  <tr><td><strong>2. Secretos en ficheros</strong></td><td>← .env, tfvars, vault. y SIEMPRE gitignore + escaneo en CI</td></tr>
  <tr><td><strong>3. Drift: la consola manda</strong></td><td>← Si alguien toca a mano fuera del código, IaC miente. Prohibido o detectado (tfsec/drift detection)</td></tr>
  <tr><td><strong>4. Alucinaciones de API</strong></td><td>← El agente puede inventar atributos: verifica contra la docs (MCP) y valida con <code>terraform validate</code></td></tr>
  <tr><td><strong>5. Costes por accidente</strong></td><td>← Plan grande = factura grande. Pide sandbox/cuenta demo y alertas de coste</td></tr>
  </tbody>
</table>
<div class="tip">🎯 Regla del proyecto: <strong>nada que cueste dinero se ejecuta sin diff + humano</strong>. La IA escribe infra; tu equipo la aprueba.</div>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide09.mp3"></audio>

<h2>🎓 Reto del curso</h2>
<div class="g2" style="font-size:.9em;">
  <div class="card blue" style="text-align:center;">
    <p style="font-size:1.3em;margin:0;">🧪</p>
    <p><strong>Mini-reto IaC</strong></p>
    <p class="sm">Diseña con el copiloto un lab: compose con app + BD para tu asignatura, y Containerlab con una topología de 2 routers</p>
  </div>
  <div class="card amber" style="text-align:center;">
    <p style="font-size:1.3em;margin:0;">🤖</p>
    <p><strong>Prompt de arranque</strong></p>
    <pre style="font-size:.55em;text-align:left;margin:.2em 0;"><code>"Convierte la descripción de mi
demo en infra-as-code: compose +
healthchecks + .env de ejemplo.
Primero propón el plan, no
escribas ficheros aún."</code></pre>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.4em;">Material CC BY-SA · Más ejemplos y prompts completos en el repo</p>

---

<audio class="deck-audio" src="../audio-infra-as-code/slide10.mp3"></audio>

<h2>✨ En esta parte 7</h2>
<div class="g2" style="font-size:.8em;">
  <div class="card" style="text-align:center;border-top:4px solid #14b8a6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🏗️</p>
    <p><strong>IaC = infra versionada</strong></p>
    <p class="sm">Compose · Ansible · Terraform · Containerlab: describir el estado deseado y revisar el diff</p>
  </div>
  <div class="card" style="text-align:center;border-top:4px solid #8b5cf6;">
    <p style="font-size:1.5em;line-height:1.15;margin:.05em 0 .12em;">🛡️</p>
    <p><strong>El copiloto propone</strong></p>
    <p class="sm">La IA genera y verifica, pero el apply lo aprueba un humano; secretos y costes siempre bajo control</p>
  </div>
</div>
<p class="sm" style="text-align:center;margin-top:.5em;">Siguiente: <strong>Desarrollo y Operaciones con agentes</strong> — el ciclo completo, de dev a ops. 🚀</p>
<p style="text-align:center;font-size:.45em;color:#94a3b8;margin-top:.4em;">CC BY-SA 4.0 · Sergi Garcia Barea · Octubre 2026</p>

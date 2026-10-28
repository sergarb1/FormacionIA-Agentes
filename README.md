# 🤖 IA como Copiloto · Codificar con agentes

**Serie de presentaciones interactivas** para aprender, paso a paso, a usar **agentes de código con IA** en el desarrollo y en las operaciones — con herramientas **100 % gratuitas** (OpenCode + Freebuff), audio narrado y PDF descargable.

🎯 8 presentaciones · 📊 97 diapositivas · 🎙️ Audio narrado · 📄 PDF imprimible · 🌱 De básico a avanzado

> ✨ Hecho con **Freebuff (freebuff.com) + OpenCode (opencode.ai) + Slidev (sli.dev)**. Los decks citan también Claude Code, Codex y Antigravity como agentes alternativos con capa gratuita.

---

## 📋 Presentaciones

| # | Presentación | Nivel | Slides | ¿Qué aprenderás? |
|---|-------------|-------|--------|------------------|
| 1 | [👉 Agentes de código: tu copiloto 👈](https://sergarb1.github.io/FormacionIA-Agentes/01-agentes-codigo/) | 🌱 Básico | 15 | Qué es un agente (LLM con manos), para qué sirve (código, configuraciones y scripts) y el panorama: OpenCode, Freebuff, Claude Code, Codex y Antigravity. Primeras peticiones bien hechas |
| 2 | [👉 Plan → Hacer: el flujo profesional 👈](https://sergarb1.github.io/FormacionIA-Agentes/02-plan-hacer/) | 🌿 Intermedio | 12 | Fase PLAN sin tocar código, fase HACER con pasos verificados, criterios de aceptación, frenos de emergencia (para / revertir / solo plan) y modo autónomo con control |
| 3 | [👉 AGENTS.md y skills 👈](https://sergarb1.github.io/FormacionIA-Agentes/03-agents-md-skills/) | 🌿 Intermedio | 14 | El manual del proyecto (`AGENTS.md`), skills propios y de la comunidad (`npx skills`), qué es el *handoff* a subagentes y el contexto extra que el agente lee |
| 4 | [👉 Ejemplos de desarrollo 👈](https://sergarb1.github.io/FormacionIA-Agentes/04-ejemplos-desarrollo/) | 🌳 Avanzado | 11 | 8 ejemplos con prompt completo: frontend con validación, API REST, migraciones de BD, tests de caracterización, refactor seguro, depuración, docs y Docker |
| 5 | [👉 Plugins y MCPs 👈](https://sergarb1.github.io/FormacionIA-Agentes/05-plugins-mcp/) | 🌳 Avanzado | 12 | El estándar MCP, servidores de GitHub, base de datos (readonly) y navegador, plugins como paquetes de capacidades y seguridad con mínimo privilegio |
| 6 | [👉 Documentación como código 👈](https://sergarb1.github.io/FormacionIA-Agentes/08-documentacion-as-code/) | 🌳 Avanzado | 11 | Docs vivas: Markdown en el repo, diagramas Mermaid y Excalidraw, ADRs por decisión, doc de API generada desde el código y la doc en el pipeline |
| 7 | [👉 Infraestructura como código 👈](https://sergarb1.github.io/FormacionIA-Agentes/07-infra-as-code/) | 🌳 Avanzado | 11 | Infra versionada: Docker Compose con healthchecks, Terraform con plan antes de apply, Containerlab para topologías de laboratorio, Ansible idempotente y riesgos reales | 
| 8 | [👉 Desarrollo y Operaciones con agentes 👈](https://sergarb1.github.io/FormacionIA-Agentes/06-devops-agentes/) | 🌳 Avanzado | 11 | Docker y compose con criterio, CI/CD con GitHub Actions, scripts de despliegue, observabilidad, auditoría de seguridad y uso responsable |

---

## 🎬 Cómo usar cada presentación

1. **Abrir** — Pulsa el enlace 👆 para ver los slides interactivos en el navegador
2. **Escuchar** — El audio se activa al primer clic o tecla; silencia con el botón 🔊 (abajo a la izquierda)
3. **Navegar** — Flechas ← →, ESPACIO, clic. ESC para vista general
4. **PDF** — Pulsa el botón "PDF" de cada tarjeta o el PDF de la raíz del repo

> La narración usa la voz natural `es-ES-AlvaroNeural` (Microsoft Edge TTS).

---

## 🗂️ Estructura del proyecto

```
📁 FormacionIA-Agentes/
├── 📄 index.html                    # Portada del proyecto
├── 📁 01-…08-…/                     # Presentaciones publicadas (dist de Slidev)
├── 📄 01-…08-…pdf                   # PDFs por presentación
│
├── 📁 slidev/                       # ⭐ Proyecto fuente (Markdown + npm)
│   ├── package.json                 # Scripts: build / pdf
│   ├── build-todos.mjs              # Compila y exporta los 8 decks
│   ├── styles/index.css             # Estilos compartidos
│   ├── global-bottom.vue            # Botón + reproductor de audio narrado
│   └── 0N-<tema>.md                 # Fuente editable de cada deck
│
├── 📁 audio-<tema>/                 # MP3 por diapositiva (slideNN.mp3)
├── 📄 narracion-<tema>.json         # Textos para edge-tts
├── 📄 generar-audio-<tema>.ps1      # Script PowerShell para regenerar MP3s
└── 📄 README.md                     # Este archivo
```

---

## 🛠️ Stack

| Tecnología | Uso |
|-----------|-----|
| **[Slidev (sli.dev)](https://sli.dev)** | Presentaciones en Markdown + Vue, exportables a HTML/PDF |
| **🐋 [Freebuff](https://freebuff.com)** | Agente conversacional gratuito (navegador): prompts y prototipos |
| **⚙️ [OpenCode](https://opencode.ai)** | Agente de código open source, gratuito, en la terminal |
| **[edge-tts](https://github.com/rany2/edge-tts)** | Voz natural gratuita `es-ES-AlvaroNeural` para el audio narrado |
| **Claude Code · Codex · Antigravity** | Agentes alternativos citados en el deck 1 (capa gratuita) |
| **GitHub Pages** | Alojamiento gratuito, despliegue desde `main` |

---

## 🚀 Regenerar las presentaciones

Requisitos: Node.js 18+.

```bash
cd slidev
npm install

# Compilar y exportar TODO (HTML + PDF + carpetas en la raíz)
node build-todos.mjs build pdf

# Copiar los HTML de dist/ a la raíz para GitHub Pages
for d in dist/0*; do rm -rf "../$(basename $d)" && cp -r "$d" "../$(basename $d)"; done
```

> ⚠️ El build usa una base **absoluta** de Pages (`/FormacionIA-Agentes/<deck>/`); con `--base ./` el router interno de Slidev muestra su 404.

## 🎙️ Audio narrado

MP3s ya generados en `audio-<tema>/`. Para regenerarlos:

```bash
pip install edge-tts
# Linux/macOS:
for f in narracion-*.json; do python3 - <<'PY'
import json, subprocess, pathlib
t = pathlib.Path("$f").stem.replace("narracion-","")
data = json.load(open("$f", encoding="utf-8"))
outdir = pathlib.Path(f"audio-{t}"); outdir.mkdir(exist_ok=True)
for s in data["slides"]:
    subprocess.run(["edge-tts", "--voice", "es-ES-AlvaroNeural",
                    "--text", s["text"], "--write-media", str(outdir/f"slide{s['id']:02d}.mp3")])
PY
done
```

```powershell
# Windows:
.\generar-audio-<tema>.ps1
```

---

## 📝 Licencia

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Sergi Garcia Barea

Comparte y adapta el material para cualquier fin, siempre con atribución y bajo la misma licencia.

---

Hecho con ❤️ — *tú pilotas, la IA acelera.*

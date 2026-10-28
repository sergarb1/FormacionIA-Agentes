# AGENTS.md — Plan paso a paso para crear presentaciones del curso "Codificar con agentes"

Este archivo define el flujo de trabajo (step-by-step) para generar y
mantener las presentaciones de este repo con **OpenCode + Freebuff**
(gratuitos) y **Slidev** (sli.dev).

---

## Stack

| Pieza | Herramienta | Rol |
|-------|-------------|-----|
| Framework de diapositivas | **Slidev** (sli.dev v53) | Presentaciones HTML exportables a PDF |
| Redacción de contenido | **Freebuff** (freebuff.com) | Prompts, narraciones y textos de slides |
| Generación de código / build | **OpenCode** (opencode.ai) | Scaffolding, iteraciones, build y export |
| Voz del audio | **edge-tts** (`es-ES-AlvaroNeural`) | Narración diapositiva a diapositiva |
| Hosting | **GitHub Pages** | Publicación desde `main` (base `/FormacionIA-Agentes/`) |

---

## Estructura de carpetas

```
FormacionIA-Agentes/
├── slidev/                     # Proyecto Slidev (npm)
│   ├── package.json            # Scripts: build, build:pdf, pdf
│   ├── build-todos.mjs         # Compila/exporta los 8 decks (base abs. de Pages)
│   ├── styles/index.css        # Estilos compartidos (todos los decks)
│   ├── global-bottom.vue       # Botón 🔊 audio narrado + reproductor
│   ├── 0N-<tema>.md            # Un archivo Markdown por deck
│   └── dist/                   # Salida del build (HTML)
├── 0N-<tema>/                  # Copia de dist/ publicada en Pages
├── 0N-<tema>.pdf               # PDFs por deck
├── audio-<tema>/               # MP3 por diapositiva (slideNN.mp3)
├── narracion-<tema>.json       # Textos para edge-tts
├── generar-audio-<tema>.ps1    # Script PowerShell para regenerar MP3s
├── index.html                  # Portada del proyecto
└── README.md                   # Tabla de presentaciones
```

---

## §1 · Crear un deck nuevo (paso a paso)

### Paso 1 — Crear el archivo Markdown

`slidev/0N-<tema>.md` con headmatter:

```yaml
---
theme: default
title: <Título> · Sergi Garcia Barea
author: Sergi Garcia Barea
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
htmlAttrs:
  lang: es
exportFilename: <slug-del-pdf>
---
```

### Paso 2 — Escribir las diapositivas

- Cada diapositiva se separa con una línea `---` entre líneas en blanco
- Al inicio de cada diapositiva (tras el separador) su audio:

```html
<audio class="deck-audio" src="../audio-<tema>/slideNN.mp3"></audio>
```

- `NN` empieza en **00** para la portada y es consecutivo por deck
- Contenido en HTML plano con las clases de `slidev/styles/index.css`:
  `.g2`, `.g3`, `.card`, `.pc`, `.pl`, `.exp`, `.exp-list`, `.tip`,
  `.tag <color>`, `.tb <fb|op|both>`, `.tbl`, `.ftr`, `.sm`,
  `.cmp-grid`, `.hdr`

### Paso 3 — ⚠️ Reglas que evitan errores de compilación

- **Nada de líneas en blanco dentro de `<pre>…</pre>`**: sustitúyelas
  por `&nbsp;`. Si se cuelan, el build falla con
  `Element is missing end tag.`
- **Ninguna línea que empiece por `---` dentro de un `<pre>`** (Slidev
  la interpreta como separador de diapositiva). Si representas un
  frontmatter, escríbelo con entidades: `&#45;&#45;&#45;`
- Cierra siempre las etiquetas que abres y envuelve los `<tr>` de
  `<table>` en `<tbody>`evita avisos de hidratación
- Los prompts de ejemplo van dentro de `<pre><code>` con
  `font-size:.5em` aprox; sin líneas en blanco

### Paso 4 — Compilar y exportar

```bash
cd slidev
node build-todos.mjs build          # HTML de los 8 decks (base absoluta de Pages)
node build-todos.mjs pdf            # solo PDFs (usa Chrome del sistema si existe)
node build-todos.mjs build pdf      # los dos pasos
```

El script ya usa la base absoluta correcta `/FormacionIA-Agentes/<slug>/`
(no uses `--base ./` ni el default `/`: el router de Slidev saca su 404).

### Paso 5 — Publicar HTML en la raíz

```bash
for d in dist/0*; do rm -rf "../$(basename $d)" && cp -r "$d" "../$(basename $d)"; done
```

### Paso 6 — Insertar la diapositiva nueva en `index.html`

Copia una tarjeta existente, cambia `num-N`, título, descripción, tags
y enlaces (`<tema>/index.html` y `<tema>.pdf`). Actualiza el contador
de diapositivas de la cabecera y de `README.md`.

---

## §2 · Audio narrado (paso a paso)

1. Añade `<audio class="deck-audio" src="../audio-<tema>/slideNN.mp3">`
   en cada diapositiva (el control 🔊/🔇 vive en `global-bottom.vue`)
2. Crea `narracion-<tema>.json`:

```json
{
  "_voice": "es-ES-AlvaroNeural",
  "_note": "Narración de '<tema>'",
  "slides": [
    { "id": 0, "title": "Portada", "text": "…" }
  ]
}
```

3. Genera los MP3 (Linux/macOS):

```bash
pip install edge-tts
for s in $(python3 -c "import json;print(' '.join(str(s['id']) for s in json.load(open('narracion-<tema>.json'))['slides']))"); do
  python3 -c "import json;s=[x for x in json.load(open('narracion-<tema>.json'))['slides'] if x['id']==$s][0]" && \
  edge-tts --voice es-ES-AlvaroNeural --text "$(python3 -c "import json;print([x for x in json.load(open('narracion-<tema>.json'))['slides'] if x['id']==$s][0]['text'])")" \
    --write-media "audio-<tema>/slide$(printf %02d $s).mp3"
done
```

   O simplemente, en Windows: `.\generar-audio-<tema>.ps1`
4. Reconstruye el deck (§1 pasos 4-5). El HTML enlaza `../audio-<tema>/…`
   con rutas relativas: los MP3 no se duplican en `dist/`

---

## §3 · Flujo recomendado con Freebuff + OpenCode

### Con Freebuff (rápido)

1. Entra en **freebuff.com** y describe la presentación: audiencia,
   nivel y formato
2. Pide borradores de prompts, ejemplos y textos de slides en el chat
3. Pide "conviértelo en una presentación" si necesitas visualizarlo

### Con OpenCode (mantenimiento y builds)

1. `cd FormacionIA-Agentes && opencode`
2. "Añade una diapositiva sobre X al deck `slidev/0N-<tema>.md`
    siguiendo AGENTS.md §1"
3. "Compila, exporta a PDF y actualiza index.html y README" (§1)

### Regenerar todo (build + PDFs + copia a la raíz)

```bash
cd slidev
node build-todos.mjs build pdf
for d in dist/0*; do rm -rf "../$(basename $d)" && cp -r "$d" "../$(basename $d)"; done
```

---

## §4 · Convenciones de nombres

| Elemento | Patrón | Ejemplo |
|----------|--------|---------|
| Deck Markdown | `0N-<tema>.md` (en `slidev/`) | `01-agentes-codigo.md` |
| Carpeta HTML publicada | `0N-<tema>/` (raíz) | `01-agentes-codigo/` |
| PDF | `0N-<tema>.pdf` (raíz) | `01-agentes-codigo.pdf` |
| Audio | `audio-<tema>/slideNN.mp3` | `audio-agentes-codigo/slide00.mp3` |
| Narración | `narracion-<tema>.json` | `narracion-agentes-codigo.json` |
| Script audio | `generar-audio-<tema>.ps1` | `generar-audio-agentes-codigo.ps1` |

---

## §5 · Colores de tags (misma familia que el proyecto base)

| Uso | Clase | Colores |
|-----|-------|---------|
| Básico/verde | `tag green` / `tag g`    | `#dcfce7` / `#166534` |
| Azul         | `tag blue` / `tag b`      | `#dbeafe` / `#1e40af` |
| Violeta      | `tag purple` / `tag p`    | `#f3e8ff` / `#6b21a8` |
| Ámbar        | `tag amber`               | `#fef3c7` / `#92400e` |
| Teal         | `tag teal` / `tag t`      | `#ccfbf1` / `#115e59` |
| Rosa         | `tag rose` / `tag pk`     | `#fce7f3` / `#9d174d` |
| Rojo         | `tag red` / `tag r`       | `#fee2e2` / `#991b1b` |
| Naranja      | `tag orange` / `tag o`    | `#ffedd5` / `#9a3412` |
| Amarillo     | `tag y`                   | `#fef9c3` / `#854d0e` |
| Gris         | `tag gy`                  | `#f1f5f9` / `#475569` |

Badges de herramientas (`.tb`):

```css
.tb.fb    { background:#ede9fe; color:#5b21b6; }  /* 🐋 Freebuff */
.tb.op    { background:#d1fae5; color:#065f46; }  /* ⚙️ OpenCode */
.tb.both  { background:#e0e7ff; color:#3730a3; }  /* Freebuff + OpenCode */
```

---

## §6 · QA con herramientas Playwright (`slidev/herramientas/`)

Las diapositivas se revisan por métrica con los scripts copiados del
proyecto base (Playwright + `playwright-chromium`, ya en `slidev/`).

**Nota importante**: los decks compilados usan la base absoluta de Pages
(`/FormacionIA-Agentes/…`) y rutas de historial (`/1`, `/2`…), por lo que
necesitan un servidor estático con fallback SPA. Se incluye uno:

```bash
cd slidev/herramientas
python3 server.py 8123            # sirve la RAÍZ del repo como GitHub Pages
#   http://localhost:8123/FormacionIA-Agentes/<slug>/N → slide N
```

El servidor resuelve tres trampas al servir builds de Slidev con python:
directory real (no `os.getcwd()`), rutas de historial inexistentes →
`index.html` del deck (fallback SPA) y no tragar los assets como HTML.

Scripts (todos desde `slidev/`, contra `http://localhost:8123/FormacionIA-Agentes/<slug>/`):

| Script | Qué mide | Notas |
|--------|----------|-------|
| `measure.mjs <url>` | px de desborde por slide | recorre `/1…/N` automáticamente |
| `debug-overflow.mjs <url> <N>` | detalle de los elementos que desbordan | top-12 culpables |
| `check-empty.mjs <url> <N-slides>` | slides vacías/sosas | <40 chars (salta cover/closing) |
| `check-contrast.mjs <url>` | contraste WCAG de bloques `<pre>` (AA ≥ 4.5) | usa la vista `?print` del build |
| `screenshot.mjs <url> <N> [out.png]` | captura de una slide | para revisión visual |
| `measure-export.mjs <url>` | desborde en vista export/PDF | adaptada a `?print` (queda por terminar) |

⚠️ Detalles conocidos: con la barra final sin recortar la app no monta
(`check-empty` lo corrige recortando `/+$/`); en la vista `?print` solo
la slide 1 tiene altura, así que `measure-export` devuelve `de 1` — usar
`measure.mjs` como referencia de desbordes por slide.

## §7 · Checklist de QA antes de publicar

- [ ] `node build-todos.mjs build` sin errores ni avisos de hidratación
- [ ] PDFs regenerados y presentes en la raíz (8 decks)
- [ ] Carpetas `0N-<tema>/` actualizadas en la raíz (8 decks)
- [ ] Rutas de audio relativas (`../audio-…/`) intactas tras el build
- [ ] Número de audios por deck = número de diapositivas (NN consecutivos desde 00)
- [ ] `index.html` sin enlaces rotos (`grep -o 'href="[^"]*"' index.html`)
- [ ] `README.md` con la tabla de presentaciones y contadores actualizados
- [ ] QA por métrica (§6): `measure` y `check-empty` en los 8 decks sin salidas
- [ ] `check-contrast` AA ≥ 4.5 en los 8 decks
- [ ] Commit con los decks + PDFs + audio + carpetas publicadas
- [ ] `git push` y verificación online (cada tarjeta del `index.html` responde 200)

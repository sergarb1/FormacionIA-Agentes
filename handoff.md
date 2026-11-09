# handoff.md — Estado y trabajo pendiente

_Última actualización: 2026-11-09. Serie ampliada a **9 decks / 110 diapositivas**: OpenSpec es la **parte 9 de 9**; `server.py` corregido y QA por métrica repetida en los 9._

---

## Estado actual (lo que YA está hecho)

- **Serie publicada** (orden lógico de la portada):
  1. Agentes de código · 2. Plan → Hacer · 3. AGENTS.md y skills · 4. Ejemplos de desarrollo · 5. Plugins y MCPs · **6 · Documentación como código** · **7 · Infraestructura como código** · **8 · Dev + Ops** · **9 · OpenSpec, cierre de la serie** (`09-openspec.md`, «Parte 9 de 9»)
- **Deck 09 · OpenSpec** (`slidev/09-openspec.md`, 13 diapositivas): qué es y qué no es, anatomía de `openspec/`, instalación e `init`, ciclo explore → propose → review → apply → archive, formato de spec delta (ADDED/MODIFIED/REMOVED/RENAMED, requisitos y escenarios), CLI/comandos por herramienta, cuándo sí/no y reto. Integrado en `build-todos.mjs`, `index.html`, `README.md`, `AGENTS.md` y esta checklist.
- **Audio del deck 09**: `narracion-openspec.json` + `generar-audio-openspec.ps1` + **13 MP3** en `audio-openspec/` (voice `es-ES-AlvaroNeural`).
- **PDFs y carpetas regeneradas** de los decks 06–09 (HTML + PDF + carpeta publicada, con las portadas «Parte N de 9» y el cierre con OpenSpec), y **PDFs 01–07 reexportados** el 2026-11-09 para homogeneizar fechas.

### Correcciones de esta revisión

1. **`slidev/herramientas/server.py`** — servía `slidev/herramientas/` y no descontaba el prefijo `/FormacionIA-Agentes/`, así que **todas las rutas daban 404 y las herramientas de QA medían 0 diapositivas**. Ahora sirve la raíz del repo y descuenta el prefijo: `http://localhost:8123/FormacionIA-Agentes/<slug>/N` funciona como en Pages.
2. **Deck 08** — la línea «Serie completa» omitía el deck de Dev + Ops; añadido. HTML y PDF regenerados.
3. **Narraciones** — `narracion-documentacion-as-code.json` decía «Parte 8» (es la 6) y `narracion-devops-agentes.json` decía «Parte 6» (es la 8). Corregidas las notas; los MP3 no cambian.
4. **Contadores** — `README.md`, `index.html` y `AGENTS.md` pasan de 8/97 a **9/110**.

### QA ejecutada (2026-11-09)

- `measure.mjs`: **0 desbordes en las 110 diapositivas de los 9 decks**.
- `check-empty.mjs`: sin slides vacías/sosas en el deck 09 (13) ni en el 08 (11).
- `check-contrast.mjs`: deck 09 **21.00:1** (AA ≥ 4.5) en 6 bloques `<pre>`.
- PDFs: número de páginas = número de diapositivas en los 9 decks (15/12/14/11/12/11/11/11/13) y **los 9 regenerados el 2026-11-09**.
- Audio: MP3 por deck = diapositivas (15/12/14/11/12/11/11/11/13 = 110).

---

## Lo que queda por hacer

### Tareas directas (siguiente sesión)

1. **Verificar el despliegue de Pages** tras el push: 200 en las 9 presentaciones, 9 PDFs y `index.html` con la tarjeta 9.
2. **Terminar `measure-export.mjs`** — adaptado a la vista `?print`, pero en esa vista solo la slide 1 tiene altura, así que devuelve «de 1». Alternativas: `page.emulateMedia({media:'print'})` con ruta `/export/N` en un dev server, o medir sobre el PDF exportado. Mientras tanto, `measure.mjs` es la referencia.

### Mejoras candidatas (no urgentes)

- `qa-todos.mjs`: wrapper que encadene `measure` + `check-empty` + `check-contrast` para los 9 decks con un solo comando.
- Arrancar/cerrar `server.py` automáticamente desde los `.mjs` de QA.
- Contadores de decks literales (la lista está en `build-todos.mjs` y en `index.html`): al añadir un deck 10 hay que tocar `DECKS`, la portada, el README y `AGENTS.md`.

### Aviso para quien tome el relevo

- Los MP3 van `audio-<tema>/slideNN.mp3` **desde 00** y consecutivos por deck; la narración vive en `narracion-<tema>.json` con los mismos ids.
- Si cambias textos de una slide, actualiza la narración JSON ANTES de recompilar y pasa `measure.mjs` después.
- La serie es de **9 partes**: los decks 06–08 dicen «Parte N de 9» y el 09 cierra con «Parte 9 de 9». Si añades una parte 10, hay que tocar esas cuatro portadas, sus narraciones y los contadores de portada/README.
- Para matar el servidor de QA: `pkill -f "[s]erver.py 8123"` (con el corchete; sin él, `pkill` mata su propio shell).

---

## Comandos rápidos de QA (copiar/pegar)

```bash
cd slidev/herramientas && python3 server.py 8123 &   # servidor (o en otro terminal)
cd slidev

for d in 01-agentes-codigo:15 02-plan-hacer:12 03-agents-md-skills:14 \
         04-ejemplos-desarrollo:11 05-plugins-mcp:12 06-devops-agentes:11 \
         07-infra-as-code:11 08-documentacion-as-code:11 09-openspec:13; do
  slug="${d%%:*}"; n="${d##*:}"
  echo "== $slug =="
  node herramientas/measure.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
  node herramientas/check-empty.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/" "$n"
  node herramientas/check-contrast.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
done
```

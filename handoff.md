# handoff.md — Estado y trabajo pendiente

_Última actualización: 2026-11-09. Serie cerrada con **10 decks / 123 diapositivas**: OpenSpec es la parte 9 y **Seguridad y confianza** la parte 10; QA por métrica en los 10._

---

## Estado actual (lo que YA está hecho)

- **Serie publicada** (orden lógico de la portada):
  1. Agentes de código · 2. Plan → Hacer · 3. AGENTS.md y skills · 4. Ejemplos de desarrollo · 5. Plugins y MCPs · **6 · Documentación como código** · **7 · Infraestructura como código** · **8 · Dev + Ops** · **9 · OpenSpec** · **10 · Seguridad y confianza** (`10-seguridad-agentes.md`, cierre de la serie)
- **Deck 10 · Seguridad y confianza** (13 diapositivas): por qué cambia la seguridad con un agente, modelo de amenazas, prompt injection, mínimo privilegio y sandbox, secretos, cadena de suministro de skills y MCPs, revisión humana del diff, datos/licencias/atribución, auditoría, respuesta a incidentes, checklist y reto final. Integrado en `build-todos.mjs`, `index.html`, `README.md` y `AGENTS.md`.
- **Audio del deck 10**: `narracion-seguridad-agentes.json` + `generar-audio-seguridad-agentes.ps1` + **13 MP3** en `audio-seguridad-agentes/`.
- **Portadas renumeradas**: decks 06–09 dicen «Parte N de 10», el 09 apunta a la parte 10 y el resumen del deck 06 incluye las diez partes.
- **PDFs y carpetas regeneradas** de los decks 06–10 (HTML + PDF + carpeta publicada). PDFs 01–07 reexportados el 2026-11-09.

### Correcciones de esta revisión

1. **`slidev/herramientas/server.py`** — servía `slidev/herramientas/` y no descontaba el prefijo `/FormacionIA-Agentes/`, así que todas las rutas daban 404 y el QA medía 0 diapositivas. Ahora sirve la raíz del repo y descuenta el prefijo: `http://localhost:8123/FormacionIA-Agentes/<slug>/N` funciona como en Pages.
2. **Tabla del README** — las filas 7 y 8 estaban pegadas en una sola línea (`|| 8 |`), lo que rompía la tabla; separadas.
3. **Narraciones** — corregidas las notas de «parte» de documentación (6) y devops (8), y actualizados los audios de cierre de devops y OpenSpec para nombrar la parte 10.
4. **Contadores** — `README.md`, `index.html` y `AGENTS.md` pasan a **10 presentaciones / 123 diapositivas**.

### QA ejecutada (2026-11-09)

- `measure.mjs`: **0 desbordes en las 123 diapositivas de los 10 decks**.
- `check-empty.mjs`: sin slides vacías ni sosas en los decks 06 y 10.
- `check-contrast.mjs`: deck 06 **21.00:1** y deck 10 **21.00:1** (AA ≥ 4.5).
- PDFs: número de páginas = número de diapositivas (15/12/14/11/12/11/11/11/13/13).
- Audio: MP3 por deck = diapositivas (15/12/14/11/12/11/11/11/13/13 = 123).
- **Pages verificado online**: 200 en las 10 presentaciones, los 10 PDFs, `index.html`, los MP3 y las portadas «Parte N de 10».

---

## Lo que queda por hacer

### Tareas directas (siguiente sesión)

1. **Terminar `measure-export.mjs`** — adaptado a la vista `?print`, pero en esa vista solo la slide 1 tiene altura, así que devuelve «de 1». Alternativas: `page.emulateMedia({media:'print'})` con ruta `/export/N` en un dev server, o medir sobre el PDF exportado. Mientras tanto, `measure.mjs` es la referencia.

### Mejoras candidatas (no urgentes)

- `qa-todos.mjs`: wrapper que encadene `measure` + `check-empty` + `check-contrast` para los 10 decks con un solo comando.
- Arrancar/cerrar `server.py` automáticamente desde los `.mjs` de QA.
- Contadores de decks literales (la lista está en `build-todos.mjs` y en `index.html`): al añadir un deck 11 hay que tocar `DECKS`, la portada, el README y `AGENTS.md`.

### Aviso para quien tome el relevo

- Los MP3 van `audio-<tema>/slideNN.mp3` **desde 00** y consecutivos por deck; la narración vive en `narracion-<tema>.json` con los mismos ids.
- Si cambias textos de una slide, actualiza la narración JSON ANTES de recompilar y pasa `measure.mjs` después.
- La serie es de **10 partes**: los decks 06–09 dicen «Parte N de 10» y el 10 cierra la serie. Si añades una parte 11, hay que tocar esas cuatro portadas, sus narraciones y los contadores de portada/README.
- Los ficheros no siguen el orden de la serie (06=devops es la parte 8, 07=infra la 7, 08=docs la 6). No renombrar: rompe URLs publicadas, audios y PDFs; el orden lógico está en el README.
- Para matar el servidor de QA: `pkill -f "[s]erver.py 8123"` (con el corchete; sin él, `pkill` mata su propio shell).

---

## Comandos rápidos de QA (copiar/pegar)

```bash
cd slidev/herramientas && python3 server.py 8123 &   # servidor (o en otro terminal)
cd slidev

for d in 01-agentes-codigo:15 02-plan-hacer:12 03-agents-md-skills:14 \
         04-ejemplos-desarrollo:11 05-plugins-mcp:12 06-devops-agentes:11 \
         07-infra-as-code:11 08-documentacion-as-code:11 09-openspec:13 \
         10-seguridad-agentes:13; do
  slug="${d%%:*}"; n="${d##*:}"
  echo "== $slug =="
  node herramientas/measure.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
  node herramientas/check-empty.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/" "$n"
  node herramientas/check-contrast.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
done
```

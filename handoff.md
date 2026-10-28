# handoff.md — Estado y trabajo pendiente

_Ultima actualización: 2026-10-28, tras commit `3dd6133` (QA con herramientas Playwright), pusheado a `main`. Pages despliega ese commit automáticamente._

---

## Estado actual (lo que YA está hecho)

- **Serie completa de 8 decks** publicada con el orden lógico:
  1. Agentes de código · 2. Plan → Hacer · 3. AGENTS.md y skills · 4. Ejemplos de desarrollo · 5. Plugins y MCPs · **6 · Documentación como código** (anuncia infra; ya no cierra) · **7 · Infraestructura como código** · **8 · Dev + Ops** (cierre, "Parte 8 de 8", resumen de la serie de 8 partes)
- **QA visual manual** (capturas Chrome, decks 6/7/8, commit `ada82bb`): iconos de retos sin solape, texto "de esta parte" actualizado, PDFs y carpetas regeneradas.
- **QA por métrica con herramientas Playwright** (commit `3dd6133`):
  - `slidev/herramientas/` copiado y adaptado del proyecto base
    (`measure`, `debug-overflow`, `check-empty`, `check-contrast`,
    `screenshot`, `measure-export` + `server.py`)
  - `measure.mjs`: **0 desbordes en las 97 diapositivas de los 8 decks**
    (en la primera pasada solo el deck 3 señalaba 2 desbordes)
  - `check-empty.mjs`: sin slides vacías/sosas en los 8 decks
  - `check-contrast.mjs`: AA ≥ 4.5 en todos los bloques `<pre>` de los 8 decks
- **Correcciones en deck 3** (`03-agents-md-skills.md`): los pies `.sm` de
  las slides 4 y 8 desbordaban 9 px y 32 px — recortado `font-size` de los
  `<pre>` (.55em → .52em) y rebuild/copia/publicación de `03-agents-md-skills/`.

---

## Lo que queda por hacer

### Tareas directas (siguiente sesión)

1. **Regenerar el PDF del deck 3** — el HTML de `03-agents-md-skills/` está
   al día con el fix de desborde, pero `03-agents-md-skills.pdf` es del
   build anterior:
   ```bash
   cd slidev
   npx slidev export 03-agents-md-skills.md --output ../03-agents-md-skills.pdf --wait 2000
   ```
2. **Verificar el despliegue de Pages tras este push** — deploy automático
   desde `main`; comprobar 200 en las 8 presentaciones y 8 PDFs enlazados
   desde `index.html`.
3. **Terminar `measure-export.mjs`** — adaptado a la vista `?print` del
   build, pero en esa vista solo la slide 1 tiene altura, así que devuelve
   "desbordan de 1". Alternativas: medir con `page.emulateMedia({media:'print'})`
   y ruta `/export/N` en un dev server, o exportar el PDF y medir ahí.
   Mientras tanto, `measure.mjs` es la referencia de desbordes por slide.
4. **(opcional) Re-captura visual de las slides 4 y 8 del deck 3** — el fix
   quedó verificado por métrica; confirmarlo también a ojo:
   ```bash
   node herramientas/screenshot.mjs http://localhost:8123/FormacionIA-Agentes/03-agents-md-skills/ 4 /tmp/d3-ok-4.png
   node herramientas/screenshot.mjs http://localhost:8123/FormacionIA-Agentes/03-agents-md-skills/ 8 /tmp/d3-ok-8.png
   ```

### Mejoras candidatas (no urgentes)

- `qa-todos.mjs`: wrapper que encadene `measure` + `check-empty` +
  `check-contrast` para los 8 decks con un solo comando.
- `server.py` arrancado/cerrado automáticamente desde los `.mjs` de QA.
- Contadores de decks literales (la lista está en `build-todos.mjs`) — si
  se añade un deck 9, solo añadirlo a `DECKS` de ese script y regenerar.

### Aviso para quien tome el relevo

- Los MP3 van `audio-<tema>/slideNN.mp3` **desde 00** y consecutivos por
  deck; la narración vive en `narracion-<tema>.json` con los mismos ids.
- Si cambias textos de una slide, actualiza la narración JSON ANTES de
  recompilar, y pasa `measure.mjs` después: el desborde era el fallo tipo
  que la revisión visual detecta tarde.
- AGENTS.md §6 documenta las herramientas y sus trampas (base absoluta de
  Pages, fallback SPA del `server.py`, doble barra que impide montar la app).

---

## Comandos rápidos de QA (copiar/pegar)

```bash
cd slidev/herramientas && python3 server.py 8123 &   # servidor (o en otro terminal)

cd slidev
for d in 01-agentes-codigo:15 02-plan-hacer:12 03-agents-md-skills:14 \
         04-ejemplos-desarrollo:11 05-plugins-mcp:12 06-devops-agentes:11 \
         07-infra-as-code:11 08-documentacion-as-code:11; do
  slug="${d%%:*}"; n="${d##*:}"
  echo "== $slug =="
  node herramientas/measure.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
  node herramientas/check-empty.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/" "$n"
  node herramientas/check-contrast.mjs "http://localhost:8123/FormacionIA-Agentes/$slug/"
done
```

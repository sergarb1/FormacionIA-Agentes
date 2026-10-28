// Compila y exporta todos los decks de Slidev del proyecto.
//   node build-todos.mjs           → build SPA (dist/<slug>/)
//   node build-todos.mjs build pdf → build + export de PDF
//   node build-todos.mjs pdf       → solo export de PDF
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE = '/FormacionIA-Agentes/'
const mode = process.argv[2] || 'build'
const alsoPdf = process.argv[3] === 'pdf' || mode === 'pdf'

// slug exportPdf: nombre del PDF en la raíz del proyecto
const DECKS = [
  { entry: '01-agentes-codigo.md',       slug: '01-agentes-codigo',       pdf: '01-agentes-codigo.pdf' },
  { entry: '02-plan-hacer.md',           slug: '02-plan-hacer',           pdf: '02-plan-hacer.pdf' },
  { entry: '03-agents-md-skills.md',     slug: '03-agents-md-skills',     pdf: '03-agents-md-skills.pdf' },
  { entry: '04-ejemplos-desarrollo.md',  slug: '04-ejemplos-desarrollo',  pdf: '04-ejemplos-desarrollo.pdf' },
  { entry: '05-plugins-mcp.md',          slug: '05-plugins-mcp',          pdf: '05-plugins-mcp.pdf' },
  { entry: '06-devops-agentes.md',       slug: '06-devops-agentes',       pdf: '06-devops-agentes.pdf' },
  { entry: '07-infra-as-code.md',          slug: '07-infra-as-code',          pdf: '07-infra-as-code.pdf' },
  { entry: '08-documentacion-as-code.md', slug: '08-documentacion-as-code', pdf: '08-documentacion-as-code.pdf' },
]

function run(args) {
  const res = spawnSync('npx', ['slidev', ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    cwd: import.meta.dirname,
  })
  if (res.status !== 0) {
    console.error(`\n❌ Falló: slidev ${args.join(' ')}\n`)
    process.exit(res.status ?? 1)
  }
}

function chromePath() {
  for (const p of [
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ]) if (existsSync(p)) return p
  return undefined
}

mkdirSync('dist', { recursive: true })

for (const deck of DECKS) {
  if (mode !== 'pdf') {
    const out = join('dist', deck.slug)
    console.log(`\n🔨 ${deck.entry} → ${out}`)
    const args = ['build', deck.entry, '--out', out, '--base', BASE + deck.slug + '/']
    run(args)
  }
  if (alsoPdf) {
    console.log(`\n📄 Exportando PDF de ${deck.entry}`)
    const args = ['export', deck.entry, '--output', join('..', deck.pdf), '--wait', '2000']
    const chrome = chromePath()
    if (chrome) args.push('--executable-path', chrome)
    run(args)
  }
}

console.log('\n✅ Todos los decks procesados.')

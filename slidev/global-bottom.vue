<!--
  Capa global: audio narrado por diapositiva + botón de silencio.
  Cada diapositiva contiene <audio class="deck-audio" src="..."/>;
  aquí se controla que solo suene la de la diapositiva activa,
  tras la primera interacción del usuario (los navegadores exigen
  un gesto para reproducir audio).
-->
<template>
  <button
    class="audio-ctrl"
    :title="muted ? 'Activar narración' : 'Silenciar narración'"
    @click.stop="toggleMute"
  >{{ muted ? '🔇' : '🔊' }}</button>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useNav } from '@slidev/client'

const nav = useNav()
const muted = ref(false)
const started = ref(false)

function pageAudio() {
  return document.querySelector(`[data-slidev-no="${nav.currentPage.value}"] audio.deck-audio`)
}

function pauseAll() {
  document.querySelectorAll('audio.deck-audio').forEach((el) => {
    el.pause()
    el.currentTime = 0
  })
}

function playCurrent() {
  if (!started.value || muted.value) return
  pauseAll()
  const el = pageAudio()
  if (el) el.play().catch(() => {})
}

function firstInteraction() {
  if (started.value) return
  started.value = true
  document.removeEventListener('click', firstInteraction, true)
  document.removeEventListener('keydown', firstInteraction, true)
  playCurrent()
}

function toggleMute() {
  muted.value = !muted.value
  if (muted.value) pauseAll()
  else playCurrent()
}

watch(() => nav.currentPage.value, playCurrent)

document.addEventListener('click', firstInteraction, true)
document.addEventListener('keydown', firstInteraction, true)
</script>

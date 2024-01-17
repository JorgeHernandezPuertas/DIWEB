// Creo el audio
const audio = new Audio('audios/hotel-california.m4a')

// Establezco el preload del audio en metadata para solo cargarlo entero cuando se requiere
audio.preload = 'metadata'

// Recupero el boton play/pause y le añado su funcionalidad
const botonPlayPause = document.getElementById('play/pause')
botonPlayPause.addEventListener('click', () => {
  botonPlayPause.className = botonPlayPause.className === 'play' ? 'pause' : 'play'
  if (!audio.paused) {
    audio.pause()
    console.log('Pausado') // Para saberlo en clase, que no se escucha
  } else {
    audio.play()
    console.log('Reproduciendose') // Para saberlo en clase, que no se escucha
  }
})

// Recupero el volumen y le añado su funcionalidad
const volumen = document.getElementById('volume')
volumen.addEventListener('change', () => {
  const nuevoVolumen = volumen.value / 100
  console.log(`El volumen ahora es: ${nuevoVolumen}`)
  audio.volume = nuevoVolumen
})

// Recupero el tiempo actual y lo establezco
const tiempoActual = document.getElementById('tiempo-actual')
tiempoActual.innerHTML = audio.currentTime
audio.currentTime.addEventListener('change', () => {
  tiempoActual.innerHTML = audio.currentTime
})
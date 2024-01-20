// Recupero el audio
const audio = document.getElementById('audio')

// Pongo el volumen inicial del audio en la mitad
audio.volume = 0.5

// Recupero del dom todos los elementos que necesito
const tiempoActual = document.getElementById('tiempo-actual')
const tiempoMaximo = document.getElementById('tiempo-maximo')
const botonPlayPause = document.getElementById('play/pause')
const botonVolumen = document.getElementById('boton-volumen')
const barraVolumen = document.getElementById('barra-volumen')
const barraDuracion = document.getElementById('barra-duracion')

// Establezco el preload del audio en metadata para solo cargarlo entero cuando se requiere
audio.preload = 'metadata'

// Le añado su funcionalidad al boton play/pause
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

// Le doy la funcionalidad al tiempo actual
tiempoActual.innerHTML = '00:00'
audio.addEventListener('timeupdate', () => {
  const tiempo = Number.parseInt(audio.currentTime)
  tiempoActual.innerHTML = formatTime(tiempo)
  barraDuracion.setAttribute('value', Number.parseInt(100 / audio.duration * tiempo))
})

// Función que formatea el tiempo del audio al formato que quiero mostrar
function formatTime (time) {
  let seconds = Number.parseInt(time % 60)
  seconds = time % 60 >= 10 ? `${seconds}` : `0${seconds}`
  let minutes = Number.parseInt(time / 60)
  minutes = Number.parseInt(time / 60) >= 10 ? `${minutes}` : `0${minutes}`
  const formatted = `${minutes}:${seconds}`
  return formatted
}

// Pongo el tiempo máximo de la canción y controlo sincronizar el cambio de duración
tiempoMaximo.innerHTML = formatTime(audio.duration)
audio.addEventListener('durationchange', (e) => {
  tiempoMaximo.innerHTML = formatTime(e.target.duration)
})

// Controlo el cambio manual de la barra de duración
barraDuracion.addEventListener('change', () => {
  // Calculo el tiempo correspondiente al valor de la barra
  audio.currentTime = (Number.parseInt(barraDuracion.value * audio.duration / 100))
})

// Doy funcionalidad a la barra de volumen
barraVolumen.addEventListener('change', () => {
  // Si está muteado lo desmuteo
  if (audio.muted) {
    audio.muted = false
    botonVolumen.className = 'unmuted'
  }

  const nuevoVolumen = barraVolumen.value / 100
  console.log(`El volumen ahora es: ${nuevoVolumen}`)
  audio.volume = nuevoVolumen
})

// Doy funcionalidad al boton del volumen (mute/unmuted)
var volumenAnterior
botonVolumen.addEventListener('click', () => {
  if (botonVolumen.className === 'muted') {
    botonVolumen.className = 'unmuted'
    audio.muted = false
    audio.volume = volumenAnterior
  } else {
    botonVolumen.className = 'muted'
    audio.muted = true
    volumenAnterior = audio.volume
    audio.volume = 0
  }
})

// Controlo que cada vez que se cambie el volumen por cualquier lado, se sincronice la barra
audio.addEventListener('volumechange', () => {
  barraVolumen.setAttribute("value", audio.volume * 100)
})

// Cuando acaba la canción reseteo el botón de play
audio.addEventListener("ended", () => {
  botonPlayPause.className = 'play';
})
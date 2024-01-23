// Recupero el video
const video = document.getElementById('video')

// Pongo el volumen inicial del video en la mitad
video.volume = 0.5

// Recupero del dom todos los elementos que necesito
const tiempoActual = document.getElementById('tiempo-actual')
const tiempoMaximo = document.getElementById('tiempo-maximo')
const botonPlayPause = document.getElementById('play/pause')
const botonVolumen = document.getElementById('boton-volumen')
const barraVolumen = document.getElementById('barra-volumen')
const barraDuracion = document.getElementById('barra-duracion')
const botonStop = document.getElementById('boton-stop')
const botonRestart = document.getElementById('boton-reiniciar')
const botonRepeat = document.getElementById('boton-repeat')
const botonAcelerar = document.getElementById('boton-acelerar')

// Establezco el preload del video en metadata para solo cargarlo entero cuando se requiere
video.preload = 'metadata'

// Le añado su funcionalidad al boton reinicio
botonRestart.addEventListener('click', () => {
  video.currentTime = 0
})

// Le añado su funcionadad al boton stop
botonStop.addEventListener("click", () => {
  video.pause()
  botonPlayPause.className = "play"
  video.currentTime = 0
})

// Le añado su funcionalidad al boton play/pause
botonPlayPause.addEventListener('click', () => {
  botonPlayPause.className = botonPlayPause.className === 'play' ? 'pause' : 'play'
  if (!video.paused) {
    video.pause()
    console.log('Pausado') // Para saberlo en clase, que no se escucha
  } else {
    video.play()
    console.log('Reproduciendose') // Para saberlo en clase, que no se escucha
  }
})

// Le doy la funcionalidad al tiempo actual
tiempoActual.innerHTML = '00:00'
video.addEventListener('timeupdate', () => {
  const tiempo = Number.parseInt(video.currentTime)
  const tiempoFormateado = formatTime(tiempo)
  if (tiempoFormateado != tiempoActual.innerHTML) {
    tiempoActual.innerHTML = tiempoFormateado
    barraDuracion.value = Number.parseInt(100 * tiempo / video.duration)
    // Establezco el valor para el css y poder poner el color de la barra personalizado
    barraDuracion.style.setProperty("--value", barraDuracion.value)
  }
})

// Función que formatea el tiempo del video al formato que quiero mostrar
function formatTime (time) {
  let seconds = Number.parseInt(time % 60)
  seconds = time % 60 >= 10 ? `${seconds}` : `0${seconds}`
  let minutes = Number.parseInt(time / 60)
  minutes = Number.parseInt(time / 60) >= 10 ? `${minutes}` : `0${minutes}`
  const formatted = `${minutes}:${seconds}`
  return formatted
}

// Pongo el tiempo máximo de la canción y controlo sincronizar el cambio de duración
tiempoMaximo.innerHTML = formatTime(video.duration)
video.addEventListener('durationchange', (e) => {
  tiempoMaximo.innerHTML = formatTime(e.target.duration)
})

// Controlo el cambio manual de la barra de duración
barraDuracion.addEventListener("change", (e) => {
  // Calculo el tiempo correspondiente al valor de la barra
  video.currentTime = (Number.parseInt(e.target.value * video.duration / 100))
})

// Seteo el value de la duracion para antes de que empiece la cancion
barraDuracion.style.setProperty("--value", barraDuracion.value)

// Doy funcionalidad a la barra de volumen
barraVolumen.addEventListener('change', () => {
  // Si está muteado lo desmuteo
  if (video.muted) {
    video.muted = false
    botonVolumen.className = 'unmuted'
  }

  const nuevoVolumen = barraVolumen.value / 100
  video.volume = nuevoVolumen
})

// Doy funcionalidad al boton del volumen (mute/unmuted)
var volumenAnterior
botonVolumen.addEventListener('click', () => {
  if (botonVolumen.className === 'muted') {
    botonVolumen.className = 'unmuted'
    video.muted = false
    video.volume = volumenAnterior
  } else {
    botonVolumen.className = 'muted'
    video.muted = true
    volumenAnterior = video.volume
    video.volume = 0
  }
})

// Controlo que cada vez que se cambie el volumen por cualquier lado, se sincronice la barra
video.addEventListener('volumechange', () => {
  barraVolumen.value = video.volume * 100
  // Establezco el valor para el css y poder poner el color de la barra personalizado
  barraVolumen.style.setProperty("--value", barraVolumen.value)
})

// Cuando acaba la canción reseteo el botón de play
video.addEventListener("ended", () => {
  if (!video.loop) {
    botonPlayPause.className = 'play';
  }
})

// Añado la funcionalidad del boton repeat
botonRepeat.addEventListener("click", () => {
  if (botonRepeat.className === "loop") {
    video.loop = false
    botonRepeat.className = ""
  } else {
    video.loop = true
    botonRepeat.className = "loop"
  }
})

// Añado la funcionalidad del boton acelerar
botonAcelerar.addEventListener("click", () => {
  if (botonAcelerar.className === "acelerado") {
    video.playbackRate = 1
    botonAcelerar.className = ""
    console.log()
  } else {
    video.playbackRate = 2
    botonAcelerar.className = "acelerado"
  }
})

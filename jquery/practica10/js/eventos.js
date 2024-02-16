$(function () {
  // Lo pongo todo oculto
  $(".texto").css("display", "none")

  // Hago el onclick
  $("main article div section div").on({
    click: function () {
      // Cierro el que esté abierto y pongo el '+'
      $(".texto").fadeOut()
      $("section div div").children("svg:last-child").fadeIn()

      if ($(this).siblings(".texto").css("display") === "none") {
        // Muestro el texto
        $(this).siblings(".texto").fadeIn()
        // Cambio el icono
        $(this).children("div").children("svg:last-child").fadeOut()
      } else {
        // Quito el texto
        $(this).siblings(".texto").fadeOut()
        // Cambio el icono
        $(this).children("div").children("svg:last-child").fadeIn()
      }
    }
  })
})
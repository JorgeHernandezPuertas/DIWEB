$(function () {
  // Hago el hover (animado)
  $("#menu-principal").children("label").on({
    mouseenter: function () {
      $(this).stop()
      $(this).animate({
        "color": "orange"
      }, 500)
    }, mouseleave: function () {
      $(this).stop()
      $(this).animate({
        "color": "black"
      }, 500)
    }
  })

  // Hago el desplegable
  $("#menu-principal").children("label").on("click", function () {
    if ($("#menu").css("display") === "none") {
      $("#menu").css({
        'display': 'block',
        'position': 'absolute',
        'top': '2rem',
        'left': '0.5rem',
        'background-color': 'white',
        'padding': '1rem',
        'width': '100%'
      })
    } else {
      $("#menu").css("display", "none")
    }

  })
})
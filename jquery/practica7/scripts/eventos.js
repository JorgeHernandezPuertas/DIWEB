$(function () {
  // Hago el hover
  $("#menu-principal").children("label").on("mouseenter", function () {
    $(this).css({ "color": "#555" })
  }).on("mouseleave", function () {
    $(this).css({ "color": "inherit" })
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
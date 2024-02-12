$(function () {
  // Controlo el scroll
  $(document).scroll(function () {
    let pos = $(document).scrollTop()
    if (pos > 1) {
      $("header").addClass("fixeado")
    } else {
      $("header").removeClass("fixeado")
    }
  })

  // Controlo el resize
  $(window).resize(function () {
    $("#menu-hamburger").prop("checked", false)
  })
})
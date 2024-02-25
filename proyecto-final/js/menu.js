$(function () {
  // Controlo el despligue del menú principal
  $("#hamburguesa").on({
    "click": function () {
      if ($("#menu").css("display") === "none") {
        $(this).children("img").removeClass("hamburguesa")
        $(this).children("img").addClass("cruz")
        $("#menu").slideDown()
      } else {
        $(this).children("img").removeClass("cruz")
        $(this).children("img").addClass("hamburguesa")
        $("#menu").slideUp()
      }
    }
  })

  // Controlo el despliegue del submenú
  $("#menu-principal>li:nth-child(4)>div").on({
    "click": function () {

      if ($("#submenu").css("display") === "none") {
        $(this).find("img").animate({
          "opacity": "0"
        }, 200, function () {
          $(this).removeClass("mas")
          $(this).addClass("menos")
        }).animate({
          "opacity": "1"
        }, 200)

        $("#submenu").slideDown().css("display", "flex")
      } else if ($("#submenu").css("display") === "flex") {
        $(this).find("img").stop(true)
        $(this).find("img").animate({
          "opacity": "0"
        }, 200, function () {
          $(this).removeClass("menos")
          $(this).addClass("mas")
        }).animate({
          "opacity": "1"
        }, 200)

        $("#submenu").slideUp()
      }
    }
  })
})
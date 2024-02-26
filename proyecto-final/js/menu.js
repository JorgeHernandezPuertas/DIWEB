$(function () {
  // Controlo que se oculte al hacer resize y no quede descuadrado el menú
  $(window).on({
    "resize": function () {
      $("#menu").removeAttr("style")
      $("#submenu").removeAttr("style")
      if ($("#hamburguesa").children("img").hasClass("cruz")) {
        $("#hamburguesa").children("img").stop(false, true).animate({
          "opacity": "0"
        }, function () {
          $(this).removeClass("cruz").addClass("hamburguesa")
        }).animate({
          "opacity": "1"
        })
      }
    }
  })

  // Controlo el despligue del menú principal
  $("#hamburguesa").on({
    "click": function () {
      if ($("#menu").css("display") === "none") {
        $(this).children("img").stop(true)
        $(this).children("img").animate({
          "opacity": "0"
        }, function () {
          $(this).removeClass("hamburguesa").addClass("cruz")
        }).animate({
          "opacity": "1"
        })

        $("#menu").slideDown()
      } else {
        $(this).children("img").stop(true)
        $(this).children("img").animate({
          "opacity": "0"
        }, function () {
          $(this).removeClass("cruz").addClass("hamburguesa")
        }).animate({
          "opacity": "1"
        })

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
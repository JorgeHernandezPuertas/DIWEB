$(function () {
  // Controlo que se oculte al hacer resize y no quede descuadrado el menú
  $(window).on({
    "resize": function () {
      $("#menu").removeAttr("style")
      $("#submenu").removeAttr("style")
      if ($("#hamburguesa").children("img").hasClass("cruz")) {
        $("#hamburguesa").children("img").stop(true).animate({
          "opacity": "0"
        }, function () {
          $(this).removeClass("cruz").addClass("hamburguesa")
        }).animate({
          "opacity": "1"
        })
      }

      // restablezco el icono del submenú y el color
      if ($("#menu-principal div").find("img").hasClass("menos")) {
        $("#menu-principal div").find("img").removeClass("menos").addClass("mas")
        $("#menu-principal div").find("span").removeAttr("style")
      }
    },
    "scroll": function () {
      // Restablezco el menú si está abierto
      $("#menu").removeAttr("style")
      $("#submenu").removeAttr("style")
      if ($("#hamburguesa").children("img").hasClass("cruz")) {
        $("#hamburguesa").children("img").stop(true).animate({
          "opacity": "0"
        }, function () {
          $(this).removeClass("cruz").addClass("hamburguesa")
        }).animate({
          "opacity": "1"
        })
      }

      // restablezco el icono del submenú y el color
      if ($("#menu-principal div").find("img").hasClass("menos")) {
        $("#menu-principal div").find("img").removeClass("menos").addClass("mas")
        $("#menu-principal div").find("span").removeAttr("style")
      }

      // Efectos de scroll
      if ($(window).scrollTop() >= 110) {
        if ($("#cabecera").css("position") !== "fixed") {
          $("#cabecera").stop(false, true)
          $("#subir").stop(false, true)

          // Cabecera
          $("main").css({
            "padding-top": "130px"
          })

          $("#cabecera").css({
            "position": "fixed",
            "width": "100%",
            "z-index": "99",
            "top": "-300px"
          }).animate({
            "top": "0",
          }, {
            "duration": 500,
            "complete": function () {
              $(this).css("top", "0")
            }
          })

          // Boton de subir
          $("#subir").fadeIn("slow")
        }

      } else {
        if ($("#cabecera").css("position") === "fixed") {
          $("#cabecera").stop(false, true)
          $("#subir").stop(true)

          // Cabecera
          $("#cabecera").animate({
            "top": "-1px"
          }, {
            "duration": 500,
            "complete": function () {
              $("main").removeAttr("style")
              $(this).removeAttr("style")
            }
          })
        }

        // Boton de subir
        $("#subir").fadeOut("slow")
      }
    }
  })

  // Botón de subir
  $("#subir").on({
    click: function () {
      $("html").stop(true)

      $(this).fadeOut()
      $("html").animate({
        "scrollTop": 0
      }, "slow")
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
        // restablezco el submenú por si está abierto
        $("#submenu").removeAttr("style")

        // restablezco el icono del submenú y el color
        if ($("#menu-principal div").find("img").hasClass("menos")) {
          $("#menu-principal div").find("img").removeClass("menos").addClass("mas")
          $("#menu-principal div").find("span").css("color", "#FFF")
        }

        // Cierro el menú
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
        $(this).children("span").animate({ "color": "#AAA" }, "slow")
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
        $(this).children("span").animate({ "color": "#FFF" }, {
          "duration": "slow",
          "complete": function () {
            $(this).removeAttr("style")
          }
        })
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
$(function () {
  // Efectos de scroll
  // Aparecer el botón
  $(window).on({
    "scroll": function () {
      const scrolleado = $(this).scrollTop()
      if (scrolleado > 80 && $("#volverarriba").css("display") === "none") {
        // Controlo que en caso de acumulación, solo se anime el último
        $("#volverarriba").stop(false, true)
        $("#volverarriba").fadeIn("slow")
      } else if (scrolleado < 80 && $("#volverarriba").css("display") !== "none") {
        $("#volverarriba").stop(false, true)
        $("#volverarriba").fadeOut("slow")
      }
    }
  })

  // Volver arriba del todo
  $("#volverarriba").on({
    "click": function () {
      $("html").animate({
        scrollTop: 0
      }, "1000")
    }
  })

  // Abro el menú
  $("#menu-principal").on({
    "click": function () {
      // Controlo que en caso de acumulación, solo se anime el último
      $("#menu").stop(false, true)
      // Despliego o pliego en función de su posición
      if ($("#menu").css("top") != "0px") {
        $("#menu").animate({
          "left": "-20rem"
        }, 1000, function () {
          $(this).css({ "top": "0" })
        })
      } else {
        $("#menu").css({
          "top": "3.6rem",
        }).animate({
          "left": "0"
        }, 1000)
      }
    }
  })

  // Animo el submenú
  $("#menu li").on({
    "click": function () {
      // Controlo la flechita
      if ($(this).find("i").css("tranform") === "rotate(180deg)") {
        $(this).find("i").css({
          "transform": "rotate(0deg)",
          "transition": "transform .1s ease"
        })
      } else {
        $(this).find("i").css({
          "transform": "rotate(180deg)",
          "transition": "transform .1s ease"
        })
      }



      // Animo el despliegue
      $(this).children("ul").slideToggle()
    }
  })
})
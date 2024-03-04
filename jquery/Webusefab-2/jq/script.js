$(function () {
  // Efectos de scroll
  // Aparecer el botón
  $(window).on({
    "scroll": function () {
      const scrolleado = $(this).scrollTop()
      if (scrolleado > 130 && $("#volverarriba").css("display") === "none") {
        // Efectos del boton
        // Controlo que en caso de acumulación, solo se anime el último
        $("#volverarriba").stop(false, true)
        $("#volverarriba").fadeIn("slow")

        // Efectos de fixed
        $("#top").stop(false, true)
        $("#top").css({
          'position': "fixed",
          'width': "100%",
          'height': "0px",
          'overflow': "hidden"
        }).animate({
          'height': "130px",
          'opacity': ".7"
        }, 500)
      } else if (scrolleado < 130 && $("#volverarriba").css("display") !== "none") {
        // Efectos del boton
        $("#volverarriba").stop(false, true)
        $("#volverarriba").fadeOut("slow")

        // Efectos de fixed
        $("#top").stop(false,true)
        $("#top").removeAttr("style").css({ 'opacity': '.7' }).animate({ 'opacity': "1" }, 500)
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
  $("#menu li a").on({
    "click": function () {
      // Animo el despliegue
      // En caso de spam de animaciones, ejecuto solo la última
      $(this).siblings("ul").stop(false, true)
      if ($(this).parent("li").children("ul").css("display") === "none"){
        
        $("#menu li").children("ul").slideUp()
        $(this).siblings("ul").slideDown()
        // Controlo la flechita
        $("#menu i").css({
          "transform": "rotate(0deg)",
          "transition": "transform .1s ease"
        })

        $(this).find("i").css({
          "transform": "rotate(180deg)",
          "transition": "transform .1s ease"
        })
      } else {
        $(this).siblings("ul").slideUp()
        // controlo la flechita
        $(this).find("i").css({
          "transform": "rotate(0deg)",
          "transition": "transform .1s ease"
        })
      }
    }
  })

  // Cambio la imagen al poner el ratón encima
  $(".item a picture img").on({
    // Al entrar pongo la imagen 2
    "mouseenter": function () {
      $(this).attr("src", $(this).attr("src").replace(".", "-1."))
    }, // Al salir pongo la imagen 1
    "mouseleave": function () {
      $(this).attr("src", $(this).attr("src").replace("-1.", "."))
    }
  })
})
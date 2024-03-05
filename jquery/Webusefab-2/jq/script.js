$(function () {

  // Slider
  $('.bxslider').bxSlider()

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
        $("#top").stop(false, true)
        $("#top").removeAttr("style").css({ 'opacity': '.7' }).animate({ 'opacity': "1" }, 500)
      }
    }
  })

  // Volver arriba del todo
  $("#volverarriba").on({
    "click": function () {
      $("html").animate({
        scrollTop: 0
      }, "500")
    }
  })

  // Abro el menú
  $("#menu-principal").on({
    "click": function () {
      // Controlo que en caso de acumulación, solo se anime el último
      $("#menu").stop(false, true)
      $("#oscuro").stop(false, true)
      $("#desplazable").stop(false, true)
      // Pongo el resto de la página en gris
      $("#oscuro").css({
        display: "block",
        width: "100dvw",
        height: "100dvh",
        opacity: "0"
      }).animate({
        left: "288px",
        opacity: ".8"
      }, 500)
      // Muevo el main con el menu
      $("#desplazable").animate({
        left: "288px",
      }, 500)
      $("#menu").animate({
        "left": "0"
      }, 500)
    }
  })

  // Animo el submenú
  $("#menu li a").on({
    "click": function () {
      // Animo el despliegue
      // En caso de spam de animaciones, ejecuto solo la última
      $(this).siblings("ul").stop(false, true)
      if ($(this).parent("li").children("ul").css("display") === "none") {

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
    "mouseenter": function () {
      // Enseño el boton
      $(this).parent().parent().siblings("button").stop(false, true)
      $(this).parent().parent().siblings("button").fadeIn()
    },
    "mouseleave": function () {
      // Quito el boton
      $(this).parent().parent().siblings("button").stop(false, true)
      $(this).parent().parent().siblings("button").fadeOut()
    }
  })

  // Hago que al estar en el botón siga el estado de dentro de la foto
  $(".item button").on({
    "mouseenter": function () {
      $(this).stop(false)
    }
  })

  // Hago que al pulsar lo oscuro se quite el menú
  $("#oscuro").on({
    click: function () {
      $("#menu").stop(false, true)
      $("#oscuro").stop(false, true)
      $("#desplazable").stop(false, true)

      $("#oscuro").animate({
        left: "0",
        opacity: "0"
      }, function () {
        $(this).css("display", "none")
      })
      $("#desplazable").animate({
        left: "0",
      }, 500)
      $("#menu").animate({
        "left": "-20rem"
      }, 500)
    }
  })

})
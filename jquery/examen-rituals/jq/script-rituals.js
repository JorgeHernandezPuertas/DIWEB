$(function () {

  // Hamburguesa (menú principal)
  $("#menu-principal>label").on({
    click: function () {
      // controlo la acumulación de efectos
      $("#menu-toggle").stop(false, true)
      $(this).children("span").stop(false, true)
      $("#menu-toggle ul").stop(false, true)
      $("#menu-toggle span").stop(false, true)

      // Controlo si se despliega o se pliega
      if ($("#menu-toggle").css("display") === "none") {
        // Cambio el color de la hamburguesa
        $("#menu-principal>label>span").animate({ "color": "#e9a140" })

        // Menú desplegado
        $("#menu-toggle").slideDown()
      } else {
        // Restauro el estado inicial si hay abiertos submenús (de forma progresiva)
        $("menu-toggle ul span").animate({ "color": "white" })
        $("menu-toggle ul span.angulo").rotate({ angle: -90, animateTo: 0 })

        // Cambio el color de la hamburguesa
        $("#menu-principal>label>span").animate({ "color": "white" })

        // Menú escodido
        $("#menu-toggle").slideUp()
      }
    }
  })

  // submenú
  $("#menu-toggle a").on({
    click: function () {
      // Controlo la acumulación de efectos
      $("#menu-toggle ul").stop(false, true)
      $("#menu-toggle span").stop(true)

      // Pliego todos los submenús para abrir solo el que toque
      $("#menu-toggle ul").slideUp()
      $("#menu-toggle span").animate({ "color": "white" })
      $("#menu-toggle span.angulo").rotate({ angle: -90, animateTo: 0 })

      // Controlo si se pliega o se despliega
      if ($(this).siblings("ul").css("display") === "none") {
        // Cambio el color del título
        $(this).find("span").animate({ "color": "#e9a140" })

        // Roto la flecha
        $(this).find("span.angulo").rotate({ angle: 0, animateTo: -90 })

        // Despliego el submenú
        $(this).siblings("ul").slideDown()
      }
    }
  })

  $(window).on({
    resize: function () { // Al redimensionar
      // Restauro el menú
      $("#menu-principal").removeAttr("style")
      $("#menu-principal>label>span").removeAttr("style")
      $("#menu-toggle").removeAttr("style")
      $("#menu-toggle span").removeAttr("style")
      $("#menu-toggle ul").removeAttr("style")
    },
    scroll: function () { // Al hacer scroll
      // controlo la acumulación de efectos
      $("#menu-toggle").stop(false, true)
      $(this).children("span").stop(false, true)
      $("#menu-toggle ul").stop(false, true)
      $("#menu-toggle span").stop(false, true)

      // Restauro el estado inicial si hay abiertos submenús (de forma progresiva)
      $("menu-toggle ul span").animate({ "color": "white" })
      $("menu-toggle ul span.angulo").rotate({ angle: -90, animateTo: 0 })

      // Cambio el color de la hamburguesa
      $("#menu-principal>label>span").animate({ "color": "white" })

      // Menú escodido
      $("#menu-toggle").slideUp()
    }
  })

  // Icono de compra
  // movil
  $(".item-sec>img").on({
    click: function () {
      // Pongo el mensajito
      const pos = $(this).offset()
      $("#cartel").css({
        "left": (pos.left - 255),
        "top": (pos.top),
      }).fadeIn(1000, function () {
        // Controlo que se muestre un segundo y desaparezca
        setTimeout(function () { $("#cartel").fadeOut(1000) }, 1000)
      })
    }
  })

  // Desktop
  $(".item-sec>input").on({
    click: function () {
      // Pongo el mensajito
      const pos = $(this).offset()
      $("#cartel").css({
        "left": (pos.left - 255),
        "top": (pos.top),
      }).fadeIn(1000, function () {
        // Controlo que se muestre un segundo y desaparezca
        setTimeout(function () { $("#cartel").fadeOut(1000) }, 1000)
      })
    }
  })

  // Cookies
  $("#cookies").css("display", "flex")
  // Efecto de fundido
  $("#cookies span").on({
    click: function () {
      $("#cookies").animate({
        "top": "100%"
      })
    }
  })

  // Login
  $("#registro input:required").on({
    focusout: function () {
      if ($(this).val().length === 0) {
        $(this).siblings("span").html("Campo vacío")
        $(this).siblings("span").css({
          "visibility": "visible"
        })
      } else {
        $(this).siblings("span").css({
          "visibility": "hidden"
        })
      }
    }
  })

})
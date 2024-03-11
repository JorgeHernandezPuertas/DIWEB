$(function () {
  var SliderModule = function () {
    // Creo el objeto que contendrá mi slider y sus items
    var pb = {}

    // Almaceno el slider
    pb.elslider = $("#slider")

    // Almaceno los paneles del slider
    pb.items = {
      panels: pb.elslider.find(".slider-wrapper > li")
    }

    // Variables globales
    var SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length,
      pausado = false

    // Creo un constructor para el slider
    pb.init = function (settings) {
      this.settings = settings ?? { duration: 4000 }

      // Me hago el array con las imágenes
      var imagenes = ['<img src="slider/slide1.png">',
        '<img src="slider/slide2.png">',
        '<img src="slider/slide3.png">',
        '<img src="slider/slide4.png">'];

      // creo los controles con js
      var losControles = ''

      // La función para inicializar el slider (el constructor)
      SliderInit()

      // Añado los botones de izquierda y derecha al slider
      const btnIzquierda = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>'
      const btnDerecha = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>'
      $('#izq').html(btnIzquierda)
      $('#der').html(btnDerecha)

      // Establezco la funcionalidad de izquierda y derecha
      $('#izq').on({
        click: function () {
          if (currentSlider === 0)
            cambiarPanel(lengthSlider - 1)
          else
            cambiarPanel(currentSlider - 1)
        }
      })
      $('#der').on({
        click: function () {
          if (currentSlider === lengthSlider - 1)
            cambiarPanel(0)
          else
            cambiarPanel(currentSlider + 1)
        }
      })

      // Controlo pausar los paneles al tener el raton dentro
      pb.items.panels.on({
        mouseenter: function () {
          // Quito el interval
          clearInterval(SliderInterval)
        },
        mouseleave: function () {
          // Restauro el intervalo
          SliderInit()
        }
      })

      // Creo el mismo número de botones que de paneles
      for (let i = 0; i < lengthSlider; i++) {
        losControles += i === 0 ? "<li class='active'>" + imagenes[i] + "</li>" : "<li>" + imagenes[i] + "</li>"
      }

      // Inserto los controles en su contenedor en el HTML
      $('#control-buttons').html(losControles)

      // Establezco la funcionalidad de los botones
      $('#control-buttons li').on({
        click: function () {
          // Al hacer click cambio el panel
          // Controlo que no he clickado en la que ya está mostrandose
          if (currentSlider !== $(this).index()) {
            cambiarPanel($(this).index())
          }
        }, // Si pongo el ratón encima muestro la imagen en miniatura
        mouseenter: function (e) {
          $("#fotito").stop(false, true)
          $("#fotito img").attr("src", $(this).children("img").attr("src"))
          $("#fotito").css({
            "top": $(this).position().top - 80 + "px",
            "left": $(this).position().left - 25 + "px",
          })
          $("#fotito").fadeIn("fast");
        },
        mouseleave: function () {
          $("#fotito").stop(false, true)
          $("#fotito").fadeOut("fast")
        }
      })
    }

    var SliderInit = function () {
      if (!pausado) SliderInterval = setInterval(pb.startSlider, pb.settings.duration)
    }

    pb.startSlider = function () {
      // Cogemos los paneles del slider
      var paneles = pb.items.panels
      // Cogemos los controles
      var controles = $('#control-buttons li')

      // Si el slider siguiente se pasa, lo vuelvo a poner al principio, haciendo el bucle
      if (nextSlider >= lengthSlider) {
        nextSlider = 0
      }

      // EFECTOS
      // Cambio de la bolita
      controles.removeClass('active')
      // Uso el nextSlider porque es el que estoy cambiando para que sea el actual
      controles.eq(nextSlider).addClass('active')

      // Aseguro su posicion
      paneles.eq(nextSlider).css({ "left": "100%", })
      paneles.eq(currentSlider).css({ "left": "0" })

      // Animo el movimiento
      paneles.eq(currentSlider).animate({ "left": "-100%", })
      paneles.eq(nextSlider).animate({ "left": "0" })

      // Actualizo variables
      currentSlider = nextSlider
      nextSlider++
    }

    // Creo una función para controlar los botones del slider
    var cambiarPanel = function (indice) {
      // Limpio el intervalo cuando cambio, para que no se me pase rápido
      clearInterval(SliderInterval)

      var paneles = pb.items.panels
      // Cogemos los controles
      var controles = $('#control-buttons li')

      // EFECTOS
      // Cambio de la bolita
      controles.removeClass('active')
      controles.eq(indice).addClass('active')

      // Efectos de transición
      if ((currentSlider === 0 && indice !== lengthSlider - 1) || (currentSlider === lengthSlider - 1 && indice === 0) || (indice > currentSlider && currentSlider !== 0)) {
        // Aseguro su posicion
        paneles.eq(indice).css({ "left": "100%", })
        paneles.eq(currentSlider).css({ "left": "0" })

        // Animo el movimiento
        paneles.eq(currentSlider).animate({ "left": "-100%", })
        paneles.eq(indice).animate({ "left": "0" })
      } else {
        // Aseguro su posicion
        paneles.eq(indice).css({ "left": "-100%", })
        paneles.eq(currentSlider).css({ "left": "0" })

        // Animo el movimiento
        paneles.eq(currentSlider).animate({ "left": "100%", })
        paneles.eq(indice).animate({ "left": "0" })
      }

      // Actualizamos los datos del bucle
      currentSlider = indice
      nextSlider = indice + 1

      // Reactivo el intervalo al cambiar
      SliderInit()
    }

    // Devuelvo el objeto pb
    return pb
  }() // () es para que se ejecute automáticamente

  // Llamo al constructor
  SliderModule.init()

})
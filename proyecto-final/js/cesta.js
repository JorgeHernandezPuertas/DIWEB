$(function () {
  function recalcularCarrito () {
    // Compruebo el número del carrito al iniciar la página
    let numCarrito = 0
    $(".numero").each(function () {
      numCarrito += parseInt($(this).html())
    })
    $("#num-carrito").html(numCarrito)
  }
  recalcularCarrito()


  // Funcionalidad de menos
  $(".menos").on({
    click: function () {
      const num = parseInt($(this).siblings(".numero").html())
      if (num > 0) {
        $(this).siblings(".numero").html(num - 1)
        $(this).parent().siblings("span").children("span").html((num - 1) * 20 + " €")
        recalcularCarrito()
      }
    }
  })

  // Funcionalidad de más
  $(".mas").on({
    click: function () {
      const num = parseInt($(this).siblings(".numero").html())

      $(this).siblings(".numero").html(num + 1)
      $(this).parent().siblings("span").children("span").html((num + 1) * 20 + " €")
      recalcularCarrito()
    }
  })

  // Botón comprar
  $("#carro button").on({
    "click": function () {
      window.location.href = '../sites/formulario-pedido.html'
    }
  })
})
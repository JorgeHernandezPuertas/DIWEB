$(function () {
  // Añadir al carro
  $("#libro button").on({
    click: function () {
      const num = parseInt($("#num-carrito").html())
      $("#num-carrito").html(num + 1)
    }
  })
})
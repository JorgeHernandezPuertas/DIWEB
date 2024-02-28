$(function () {
  $("section#pedido>form").on({
    "submit": function (e) {
      // Si ha rellenado todos los campos al pedir, le mando a la página de confirmación
      let noErrores = true
      const form = e.target
      for (let i = 0; i < form.length - 1; i++) {
        if (form[i].value === "") {
          noErrores = false
          break
        }
      }
      if (noErrores) {
        window.location.href = '../sites/pedido-realizado.html'
      }
    }
  })
})
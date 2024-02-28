$(function () {
  $("section#pedido>form").on({
    "submit": function (e) {
      e.preventDefault()
      $("div.form-group>label>input")
      // Si ha rellenado todos los campos al pedir, le mando a la página de confirmación
      let noErrores = true
      const form = e.target
      for (let i = 0; i < form.length - 1; i++) {
        if (form[i].value === "") {
          noErrores = false
          $(form[i]).addClass("error")
        } else {
          if ($(form[i]).hasClass("error")) {
            $(form[i]).removeClass("error")
          }
        }
      }
      if (noErrores) {
        window.location.href = '../sites/pedido-realizado.html'
      }
    }
  })
})
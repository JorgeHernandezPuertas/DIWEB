$(function () {
  $("section#login form").on({
    "submit": function (e) {
      e.preventDefault()
      $("div.form-group>label>input").toggleClass("error")
    }
  })
})
$(function () {
  $(document).keypress(function (e) {
    if (String.fromCharCode(e.which) === "d") {
      $(".noticia").children("h3").toggle("fast")
    }
  })
})
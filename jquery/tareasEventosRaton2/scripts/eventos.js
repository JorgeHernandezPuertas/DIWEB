$(function () {
  $("img").click(function (e) {
    $(this).next().css("display", "block")
  })
  $("img").dblclick(function (e) {
    $(this).next().css("display", "none")
  })
})
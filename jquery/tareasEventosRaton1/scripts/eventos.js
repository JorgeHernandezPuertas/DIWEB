$(function () {
  /*
  // Manual
  $("img").mouseenter(function(e) {
    $(this).next().css("display", "block")
  })
  $("img").mouseleave(function(e) {
    $(this).next().css("display", "none")
  })
*/
  // Con toggle
  $("img").mouseenter(function (e) {
    $(this).next().toggle("fast")
  })
  $("img").mouseleave(function (e) {
    $(this).next().toggle("fast")
  })
})
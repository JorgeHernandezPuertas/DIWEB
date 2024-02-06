$(function() {
  $("img").mouseenter(function(e) {
    $(this).next().css("display", "block")
  })
  $("img").mouseleave(function(e) {
    $(this).next().css("display", "none")
  })
})
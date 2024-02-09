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
  /*
    // Con toggle
    $("img").mouseenter(function (e) {
      $(this).next().toggle("fast")
    })
    $("img").mouseleave(function (e) {
      $(this).next().toggle("fast")
    })
  */

  // Con hover (El hover no funciona con funciones flecha)
  $("img").hover(function (e) {
    $(this).next().toggle("fast")
  }, function (e) {
    $(this).next().toggle("fast")
  })

})
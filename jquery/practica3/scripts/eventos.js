$(function () {
  $("#menu")
    .children("li")
    .on("mouseenter", function () { $(this).css({ "font-weight": "bold" }) })
    .on("mouseleave", function () { $(this).css({ "font-weight": "normal" }) })
})
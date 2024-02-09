$(function () {
  $("input").focusin(function () { $(this).css({ "border": "5px solid pink" }) }).focusout(function () { $(this).css({ "border": "1px solid black" }) })
})
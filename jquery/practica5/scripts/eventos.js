$(function () {
  $("input").focusin(function () { $(this).css({ "background-color": "pink" }) }).focusout(function () { $(this).css({ "background-color": "white" }) })
})
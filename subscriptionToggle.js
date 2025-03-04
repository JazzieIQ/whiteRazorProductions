// filepath: /c:/Users/Matthew/Documents/Personal Portfolio/whiteRazorProductions/subscriptionToggle.js
document.addEventListener("DOMContentLoaded", function () {
  // jQuery-based subscription toggle
  $("#toggle").click(function () {
    if ($(this).is(":checked")) {
      $(".sub").css("opacity", 0);
      $(".thanks").css("opacity", 1);
    } else {
      $(".sub").css("opacity", 1);
      $(".thanks").css("opacity", 0);
    }
    });
  });
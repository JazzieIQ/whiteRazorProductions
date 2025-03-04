// Nav filepath: /c:/Users/Matthew/Documents/Personal Portfolio/whiteRazorProductions/navToggle.js
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navUl = document.querySelector("nav ul");

  // Toggle navigation visibility
  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navUl.classList.toggle("show");
  });
});
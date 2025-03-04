// Youtube Video on Home filepath: /c:/Users/Matthew/Documents/Personal Portfolio/whiteRazorProductions/youtubeVideo.js
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("homeLink");
  const reelVideo = document.getElementById("reelVideo");

  // Play YouTube video when Home link is clicked
  homeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    // Play the YouTube video
    reelVideo.src = "https://www.youtube.com/embed/aXOzzz6bNMg?autoplay=1";
  });
});
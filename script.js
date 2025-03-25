document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Add event listener to #logoHeader to return to index page
    const logoHeader = document.querySelector('#logoHeader');
    if (logoHeader) {
        logoHeader.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Add event listener to .logoVideo to return to index page
    const logoVideo = document.querySelector('.logoVideo');
    if (logoVideo) {
        logoVideo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

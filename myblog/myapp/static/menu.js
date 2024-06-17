document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-icon');
    var navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
    
        navMenu.classList.toggle('open');
    });
});

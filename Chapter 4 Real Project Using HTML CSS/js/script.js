window.addEventListener('scroll', function() {
    var navbar = document.getElementsByTagName('nav')[0];
    if (window.scrollY > 600) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});
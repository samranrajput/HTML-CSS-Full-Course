document.addEventListener('DOMContentLoaded', function() {
    const navItemsList = document.getElementById('main-nav-items'); // Get the UL element
    
    if (navItemsList) {
        const navLinks = navItemsList.querySelectorAll('a'); // Get all <a> tags inside the UL

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // When any link is clicked, remove the 'menu-open' class from the UL
                navItemsList.classList.remove('menu-open');

                // Optional: If you also have a checkbox to toggle, uncheck it
                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle && menuToggle.checked) {
                    menuToggle.checked = false;
                }
            });
        });
    }
});
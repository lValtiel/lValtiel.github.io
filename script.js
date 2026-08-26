const menuButton = document.getElementById('button');
const navMenu = document.querySelector('.nav_menu');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav_menu a');


/* =========================
   MENÚ MOBILE
========================= */

if (menuButton && navMenu) {

    menuButton.addEventListener('click', () => {

        navMenu.classList.toggle('active');

        const isOpen = navMenu.classList.contains('active');

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú' : 'Abrir menú'
        );

    });

}


/* =========================
   CERRAR MENÚ AL SELECCIONAR
========================= */

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

        if (menuButton) {
            menuButton.setAttribute(
                'aria-label',
                'Abrir menú'
            );
        }

    });

});


/* =========================
   SECCIÓN ACTIVA
========================= */

const updateActiveSection = () => {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                `.nav_menu a[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }

        }

    });

};


/* =========================
   SCROLL
========================= */

window.addEventListener('scroll', updateActiveSection);

updateActiveSection();


/* =========================
   CERRAR MENÚ AL VOLVER A DESKTOP
========================= */

window.addEventListener('resize', () => {

    if (window.innerWidth > 850 && navMenu) {

        navMenu.classList.remove('active');

        if (menuButton) {
            menuButton.setAttribute(
                'aria-label',
                'Abrir menú'
            );
        }

    }

});
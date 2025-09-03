document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar and Mobile Menu ---
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.header .navbar a');

    // Toggle mobile menu
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    // --- Sticky Header & Active Link on Scroll ---
    const sections = document.querySelectorAll('section');
    window.onscroll = () => {
        // Sticky Header
        header.classList.toggle('sticky', window.scrollY > 100);

        // Active link highlighting
        let currentSectionId = '';
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(links => {
            links.classList.remove('active');
            // Check if a section is active before trying to add a class
            if (currentSectionId) {
                const activeLink = document.querySelector('.header .navbar a[href*=' + currentSectionId + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // --- Typed.js for Hero Section ---
    const typed = new Typed('.typed-text', {
        strings: ['Android Developer', 'Kotlin Expert', 'React Native Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

    // --- Swiper.js for Skills Carousel ---
    const swiper = new Swiper('.skills-slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            520: { slidesPerView: 2, spaceBetween: 20, },
            768: { slidesPerView: 3, spaceBetween: 30, },
            1024: { slidesPerView: 4, spaceBetween: 40, },
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    // --- Scroll Reveal Animations using Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    const animatableElements = document.querySelectorAll('.animatable');
    animatableElements.forEach((el) => observer.observe(el));

});

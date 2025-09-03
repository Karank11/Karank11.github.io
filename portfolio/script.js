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

    // --- Swiper.js for Skills Carousel with Coverflow Effect ---
    const swiper = new Swiper('.skills-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
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

    // --- Animated Particle Background ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#0ef"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0ef",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    });
});
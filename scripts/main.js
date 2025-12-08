document.addEventListener('DOMContentLoaded', function() {
    // Cargar navbar y footer
    loadFragments();
    
    // Inicializar componentes
    initNavbar();
    initHero();
    initScrollAnimations();
    initTestimonialCarousel();
    
    // Verificar y actualizar el carrito al cargar la página
    if (typeof initCart === 'function') {
        initCart();
    }
    
    // Inicializar animaciones de entrada
    initEntranceAnimations();
});

function loadFragments() {
    // Cargar navbar
    fetch('./fragments/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            initNavbar();
        })
        .catch(error => console.error('Error loading navbar:', error));
    
    // Cargar footer
    fetch('./fragments/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function initNavbar() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbar = document.querySelector('.navbar');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
            document.body.classList.toggle('navbar-open');
            
            if(navbarMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer clic en enlaces (solo en móvil)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navbarMenu.classList.remove('active');
                    navbarToggle.classList.remove('active');
                    document.body.classList.remove('navbar-open');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

function initHero() {
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 100);
    }

    // Smooth scroll para el indicador del hero
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

function initTestimonialCarousel() {
    const items = document.querySelectorAll('.testimonial-item');
    if (items.length === 0) return;

    let current = 0;
    
    // Función para cambiar testimonio
    function showNextTestimonial() {
        items[current].classList.remove('active');
        current = (current + 1) % items.length;
        items[current].classList.add('active');
    }
    
    // Iniciar carrusel automático
    setInterval(showNextTestimonial, 5000);
}

function initScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => observer.observe(element));
}

function initEntranceAnimations() {
    // Animación escalonada para elementos del menú
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observar contenedores de elementos escalonados
    document.querySelectorAll('.stagger-animate').forEach(container => {
        menuObserver.observe(container);
    });
}

// Smooth scrolling para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de carga para imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});

// Mejora de accesibilidad para botones
document.querySelectorAll('button, .btn').forEach(button => {
    button.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});
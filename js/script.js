// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para la barra de navegación fija
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            navLinks.classList.remove('active');
        }
    });
});

// Barra de navegación fija y cambio de estilo al hacer scroll
const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Cambiar estilo de la barra de navegación al hacer scroll
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Ocultar/mostrar barra de navegación al hacer scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
    
    // Resaltar enlace activo en la navegación
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollTop >= sectionTop - 200) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// Menú hamburguesa para móviles
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        const formData = new FormData(this);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulación de envío (reemplazar con tu lógica de envío real)
        console.log('Formulario enviado:', formObject);
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
        this.reset();
    });
}

// Animación de carga de habilidades
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        // Usar setTimeout para asegurar que la animación se vea
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Animar habilidades cuando son visibles
const skillsSection = document.getElementById('habilidades');
let skillsAnimated = false;

function checkScroll() {
    if (!skillsAnimated && isElementInViewport(skillsSection)) {
        animateSkills();
        skillsAnimated = true;
    }
}

// Verificar si un elemento está en el viewport
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Actualizar año actual en el footer
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si la sección de habilidades ya está visible al cargar
    checkScroll();
    
    // Agregar clase de animación a los elementos al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', () => {
        checkScroll();
        animateOnScroll();
    });
    
    // Inicializar animaciones visibles al cargar
    animateOnScroll();
});

// Efecto de escritura en el título
function typeWriter(element, text, speed = 50) {
    let i = 0;
    const title = document.querySelector(element);
    
    if (!title) return;
    
    title.textContent = '';
    
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efecto de escritura cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('#inicio h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeWriter('#inicio h1', text);
    }
});

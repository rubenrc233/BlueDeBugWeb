// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe animated elements
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
    
    // Create dynamic bubbles
    createDynamicBubbles();
});

// ===================================
// Dynamic Bubbles
// ===================================
function createDynamicBubbles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const positions = []; // Track occupied positions
    
    // Helper function to check if position overlaps
    function isOverlapping(x, y, size, minDistance = 15) {
        return positions.some(pos => {
            const dx = Math.abs(pos.x - x);
            const dy = Math.abs(pos.y - y);
            const minDist = (pos.size + size) / 2 + minDistance;
            return Math.sqrt(dx * dx + dy * dy) < minDist;
        });
    }
    
    // Helper function to find non-overlapping position
    function findPosition(size, maxAttempts = 50, preferLeft = false) {
        for (let i = 0; i < maxAttempts; i++) {
            let x, y;
            if (preferLeft && Math.random() > 0.3) {
                // 70% chance to place on left side (0-50%)
                x = Math.random() * 45 + 5; // 5-50%
                y = Math.random() * 90 + 5;
            } else {
                x = Math.random() * 90 + 5; // 5-95%
                y = Math.random() * 90 + 5;
            }
            if (!isOverlapping(x, y, size)) {
                positions.push({ x, y, size });
                return { x, y };
            }
        }
        // Fallback to random position if can't find space
        const x = Math.random() * 90 + 5;
        const y = Math.random() * 90 + 5;
        positions.push({ x, y, size });
        return { x, y };
    }
    
    // Create static pulsing bubbles (large)
    const bubbleCount = 8;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'static-bubble';
        
        const size = Math.random() * 200 + 150; // 150-350px
        const pos = findPosition(size, 50, i < 4); // First 4 bubbles prefer left
        const duration = Math.random() * 3 + 3; // 3-6s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.05 + 0.02; // 0.02-0.07
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${pos.x}%`;
        bubble.style.top = `${pos.y}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.background = `radial-gradient(circle, rgba(33, 150, 243, ${opacity}) 0%, transparent 70%)`;
        
        hero.appendChild(bubble);
    }
    
    // Create subtle particles
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'subtle-particle';
        
        const size = Math.random() * 4 + 2; // 2-6px
        const pos = findPosition(size, 50, i < 8); // First 8 particles prefer left
        const duration = Math.random() * 4 + 2; // 2-6s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${pos.x}%`;
        particle.style.top = `${pos.y}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        hero.appendChild(particle);
    }
}

// ===================================
// Navbar Scroll
// ===================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// Active Navigation on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            if (link) link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Form Handling
// ===================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Por favor completa todos los campos requeridos', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitButton.innerHTML;
        submitButton.innerHTML = 'Enviando...';
        submitButton.disabled = true;
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`Nuevo mensaje de ${data.name}${data.company ? ' - ' + data.company : ''}`);
        const body = encodeURIComponent(
            `Nombre: ${data.name}\n` +
            `Email: ${data.email}\n` +
            (data.company ? `Empresa: ${data.company}\n` : '') +
            `Servicio: ${data.service}\n\n` +
            `Mensaje:\n${data.message}`
        );
        
        const mailtoLink = `mailto:bluedebug.contact@gmail.com?subject=${subject}&body=${body}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Show success message and reset form
        setTimeout(() => {
            showNotification('¡Mensaje preparado! Se abrirá tu cliente de correo.', 'success');
            contactForm.reset();
            submitButton.innerHTML = originalHTML;
            submitButton.disabled = false;
        }, 500);
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${type === 'success' ? '✓' : '⚠'}</span>
            <p>${message}</p>
        </div>
    `;
    
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 10000;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                animation: slideIn 0.3s ease, slideOut 0.3s ease 3.2s;
                max-width: 400px;
            }
            
            .notification-success {
                background: rgba(16, 185, 129, 0.1);
                border-color: rgba(16, 185, 129, 0.3);
            }
            
            .notification-error {
                background: rgba(239, 68, 68, 0.1);
                border-color: rgba(239, 68, 68, 0.3);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                font-size: 0.875rem;
                color: #fff;
            }
            
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3500);
}

// ===================================
// Initial Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    const heroElements = document.querySelectorAll('.hero [data-aos]');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('aos-animate');
        }, index * 100);
    });
});

// ===================================
// Console Branding
// ===================================
console.log(
    '%c BlueDeBug ',
    'background: #2196F3; color: white; padding: 8px 16px; font-size: 16px; font-weight: bold; border-radius: 4px;'
);
console.log(
    '%c Transformación Digital',
    'color: #94A3B8; font-size: 12px; font-weight: 600;'
);

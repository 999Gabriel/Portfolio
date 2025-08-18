// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Smooth scroll with enhanced easing
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize progress bars
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.querySelector('.progress');
        const targetWidth = bar.getAttribute('data-progress');
        
        progress.style.width = targetWidth;
    });
}

// Smooth reveal animations on scroll
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // If this is the skills section, animate progress bars
                if (entry.target.id === 'skills') {
                    initProgressBars();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('animate-section');
    });
}

// Handle header transparency on scroll
function handleHeaderScroll() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Handle header transparency on scroll
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Initial check
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }
    
    // Keyboard shortcut for contact
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            window.location.href = 'mailto:999gabriel.winkler@gmail.com';
        }
    });

    // Pointer tracking for card highlight glow
    function attachPointerGlow(scopeSelector) {
        const scope = document.querySelector(scopeSelector);
        if (!scope) return;
        scope.addEventListener('mousemove', (e) => {
            const rect = scope.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            scope.style.setProperty('--mx', x + '%');
        });
    }
    attachPointerGlow('.companies-grid');
    attachPointerGlow('.portfolio-grid');

    // 3D tilt interactions (depth)
    function supportsHover() {
        return window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }
    function initTilt(selector) {
        if (!supportsHover()) return; // avoid on touch devices
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('tiltable');
            const rectCache = { w: 0, h: 0 };
            const updateRect = () => {
                const r = el.getBoundingClientRect();
                rectCache.w = r.width; rectCache.h = r.height;
            };
            updateRect();
            window.addEventListener('resize', updateRect);
            el.addEventListener('mousemove', (e) => {
                const r = el.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
                const py = (e.clientY - r.top) / r.height - 0.5;
                const rotateX = (-py) * 6; // degrees
                const rotateY = (px) * 6;
                el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                el.classList.add('tilt-active');
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
                el.classList.remove('tilt-active');
            });
        });
    }
    initTilt('.company-card');
    initTilt('.portfolio-item');
    initTilt('.tech-item');

    // Scroll parallax for hero/editorial elements
    const heroTitle = document.querySelector('.hero-content h1, .hero-name');
    const edTitle = document.querySelector('.editorial-title');
    const edStrap = document.querySelector('.editorial-strap');
    function parallaxScroll() {
        const y = window.scrollY || window.pageYOffset;
        if (heroTitle) heroTitle.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        if (edTitle) edTitle.style.transform = `translate3d(0, ${Math.max(0, (y - (edTitle.offsetTop - 200))) * 0.06}px, 0)`;
        if (edStrap) edStrap.style.transform = `translate3d(0, ${Math.max(0, (y - (edStrap.offsetTop - 200))) * 0.08}px, 0)`;
    }
    window.addEventListener('scroll', parallaxScroll, { passive: true });
    parallaxScroll();

    // Apply depth-layered background to main sections without changing HTML
    ['#companies', '#about', '#skills', '#tech-stack', '#portfolio', '#contact'].forEach(id => {
        const el = document.querySelector(id)?.closest('section') || document.querySelector(id);
        if (el) el.classList.add('depth-layered');
    });

    // Contact interactions
    const contactForm = document.getElementById('contact-form');
    const copyBtn = document.getElementById('copy-email');
    const emailCode = document.getElementById('contact-email');
    const toast = document.getElementById('toast');

    if (copyBtn && emailCode) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailCode.textContent.trim());
                if (toast) {
                    toast.textContent = 'Email copied';
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 1600);
                }
            } catch (e) {
                if (toast) {
                    toast.textContent = 'Copy failed';
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 1600);
                }
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = (document.getElementById('name')?.value || '').trim();
            const fromEmail = (document.getElementById('email')?.value || '').trim();
            const project = (document.getElementById('project')?.value || '').trim();
            const message = (document.getElementById('message')?.value || '').trim();
            const to = '999gabriel.winkler@gmail.com';
            const subject = `Project Inquiry from ${name || 'Website Visitor'} — ${project || 'General'}`;
            const bodyLines = [
                `Name: ${name}`,
                `Email: ${fromEmail}`,
                `Project: ${project}`,
                '',
                message || 'Hi Gabriel,\n\nI’d like to discuss a potential project.',
                '',
                '— Sent from gabrielwinkler.com'
            ];
            const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
            window.location.href = mailto;
        });
    }
});
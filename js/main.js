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
});
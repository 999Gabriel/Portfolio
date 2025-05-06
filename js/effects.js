document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .footer-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            // Ensure targetId is not just "#" to prevent errors
            if (targetId.length > 1) {
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Add offset for fixed header
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.rounded-box, .fade-in, .slide-up');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: unobserve after animation
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(el => scrollObserver.observe(el));

    // Update current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const mainNavLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && mainNavLinks) {
        mobileNavToggle.addEventListener('click', () => {
            mainNavLinks.classList.toggle('active'); // Toggle a class to show/hide nav
            mobileNavToggle.classList.toggle('active'); // For styling the toggle button itself
            document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
        });
    }

    // Add a class to nav on scroll for styling
    const nav = document.querySelector('.main-nav');
    if(nav){
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // Initialize typing effect if Typed.js is available
    if (typeof Typed !== 'undefined') {
        new Typed('.typing-effect', {
            strings: ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Entrepreneur'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Progress bar animation for skills
    const skillBars = document.querySelectorAll('.progress');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset width first
                progressBar.style.width = '0%';
                
                // Animate to target width
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});
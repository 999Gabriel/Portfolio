/* =========================================
   Premium Portfolio - Interactions
   ========================================= */

// Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Setup
gsap.registerPlugin(ScrollTrigger);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* =========================================
   Custom Cursor
   ========================================= */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Dot follows instantly
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  }
});

// Smooth outline follow
function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  if (cursorOutline) {
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';
  }

  requestAnimationFrame(animateCursor);
}
animateCursor();

/* =========================================
   Magnetic Buttons
   ========================================= */
const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach(elem => {
  elem.addEventListener('mousemove', (e) => {
    const rect = elem.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(elem, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out'
    });
  });

  elem.addEventListener('mouseleave', () => {
    gsap.to(elem, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)'
    });
  });
});

/* =========================================
   Navigation Scroll
   ========================================= */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* =========================================
   Hero Animations
   ========================================= */
const heroTl = gsap.timeline({ delay: 0.3 });

// Title lines sweep in
heroTl.from('.title-line .char-wrap', {
  y: '100%',
  duration: 1.2,
  stagger: 0.1,
  ease: 'power4.out'
});

// Hero image reveal
heroTl.to('.hero-img', {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: 'power3.out'
}, '-=0.8');

// Badges and lead text
heroTl.from(['.hero-badges', '.hero-lead', '.hero-actions'], {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power2.out'
}, '-=0.8');

// Floating shapes
heroTl.from('.shape', {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'back.out(1.7)'
}, '-=1');

// Scroll indicator
heroTl.from('.scroll-indicator', {
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: 'power2.out'
}, '-=0.5');

/* =========================================
   Scroll Animations
   ========================================= */

// Section titles
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

// Service cards
gsap.from('.service-card', {
  scrollTrigger: {
    trigger: '.services-grid',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power3.out'
});

// Philosophy quote
gsap.from('.big-quote', {
  scrollTrigger: {
    trigger: '.big-quote',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Timeline items
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power2.out'
  });
});

// Project cards - staggered scale
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.projects-grid',
    start: 'top 80%',
  },
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 1,
  stagger: 0.15,
  ease: 'power3.out'
});

// Featured image
gsap.from('.featured-wrapper', {
  scrollTrigger: {
    trigger: '.featured-image-section',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  scale: 0.98,
  duration: 1.2,
  ease: 'power3.out'
});

/* =========================================
   Stats Counter Animation (Fixed)
   ========================================= */
gsap.utils.toArray('.big-number').forEach(num => {
  const targetValue = parseInt(num.dataset.value) || 0;
  const suffix = num.dataset.suffix || '+';

  gsap.to(num, {
    scrollTrigger: {
      trigger: num,
      start: 'top 90%',
    },
    innerText: targetValue,
    duration: 2,
    ease: 'power2.out',
    snap: { innerText: 1 },
    onUpdate: function () {
      num.textContent = Math.round(num.innerText) + suffix;
    }
  });
});

// Footer CTA
gsap.from('.footer-cta', {
  scrollTrigger: {
    trigger: '.footer-cta',
    start: 'top 85%',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

/* =========================================
   Smooth Anchor Links
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target, { duration: 1.5 });
    }
  });
});

console.log('🚀 Premium Portfolio Loaded');
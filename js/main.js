/* =========================================================
   Gabriel Winkler — Portfolio Interactions
   Lean vanilla JS: scroll reveal, stat counters, nav active state
   ========================================================= */

(function () {
  'use strict';

  /* -----------------------------------------
     Scroll reveal with IntersectionObserver
     ----------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    });

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* -----------------------------------------
     Stat counter animation
     ----------------------------------------- */
  const counters = document.querySelectorAll('.stat-value');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.value, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach((el) => {
      el.textContent = (el.dataset.value || '0') + (el.dataset.suffix || '');
    });
  }

  /* -----------------------------------------
     Nav active link on scroll
     ----------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [...navLinks]
    .map((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return null;
      const section = document.querySelector(href);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = sections.find((s) => s.section === entry.target);
          if (match) {
            navLinks.forEach((l) => l.classList.remove('active'));
            match.link.classList.add('active');
          }
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(({ section }) => navObserver.observe(section));
  }
})();

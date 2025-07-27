// javascript.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Hamburger toggle
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.classList.toggle('open');
    });
    // close menu when any nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          btn.classList.remove('open');
        }
      });
    });
  }

  // 2) Filter buttons (on search page)
  const filters = document.querySelectorAll('.filter-bar .filter');
  const cards   = document.querySelectorAll('.results-grid .card');
  filters.forEach(f => {
    f.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      f.classList.add('active');
      const category = f.textContent.trim();
      cards.forEach(card => {
        const tagEl = card.querySelector('.tag');
        const tag = tagEl ? tagEl.textContent.trim() : '';
        card.style.display = tag === category ? '' : 'none';
      });
    });
  });

  // 3) Back to Top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4) Newsletter signup
  const newsletterForm    = document.getElementById('newsletter-form');
  const newsletterEmail   = document.getElementById('newsletter-email');
  const newsletterMessage = document.getElementById('newsletter-message');
  if (newsletterForm && newsletterEmail && newsletterMessage) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      // basic email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newsletterMessage.textContent = 'Please enter a valid email address.';
        newsletterMessage.style.color   = '#e63946';
        return;
      }
      // simulate success
      newsletterMessage.textContent = 'Thanks for subscribing! Stay tuned.';
      newsletterMessage.style.color   = '#2e7d32';
      newsletterEmail.value = '';
      // TODO: send `email` to your API here
    });
  }

  // 5) Smooth‐scroll for any internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetID = link.getAttribute('href');
      if (targetID.length > 1) {
        const target = document.querySelector(targetID);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

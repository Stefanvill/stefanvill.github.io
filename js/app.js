// Smooth scrolling for navigation links
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

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe skill cards and tech badges
document.querySelectorAll('.skill-card, .tech-badge').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    navbar.style.boxShadow = '0 4px 12px rgba(0, 102, 255, 0.15)';
  } else {
    navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Mobile menu toggle
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Add click handlers to nav links for mobile
if (window.innerWidth < 768) {
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      // Close menu if open
      navMenu.style.display = 'none';
    });
  });
}

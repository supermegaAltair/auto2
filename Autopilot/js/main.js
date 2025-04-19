// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function () {
  // Initialize animations
  initScrollAnimations();

  // Initialize smooth scrolling
  initSmoothScroll();
});

// Function to handle smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Function to initialize scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.benefit-card, .service-card');

  // Add animation classes based on position
  animatedElements.forEach((element, index) => {
    if (index % 2 === 0) {
      element.classList.add('fade-right');
    } else {
      element.classList.add('fade-left');
    }
  });

  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll animations
  function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');

    animatedElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('appear');
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);

  // Trigger once on load
  setTimeout(handleScrollAnimations, 100);
}

// Handle button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)';
  });

  button.addEventListener('mouseleave', function () {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});

// Handle card hover effects for better mobile experience
const cards = document.querySelectorAll('.benefit-card, .service-card');
cards.forEach(card => {
  card.addEventListener('touchstart', function () {
    this.classList.add('hover');
  }, { passive: true });

  card.addEventListener('touchend', function () {
    setTimeout(() => {
      this.classList.remove('hover');
    }, 300);
  }, { passive: true });
});
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
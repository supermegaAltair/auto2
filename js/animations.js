// Animation functionality

document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for hero section
  initParallaxEffect();
  
  // Initialize card animations
  initCardAnimations();
  
  // Initialize counter animations
  initNumberCounters();
});

// Function to create parallax effect on hero section
function initParallaxEffect() {
  const heroSection = document.querySelector('.hero-section');
  
  window.addEventListener('scroll', function() {
    // Get scroll position
    const scrollPosition = window.scrollY;
    
    // Only apply parallax if heroSection exists and is in view
    if (heroSection && scrollPosition <= heroSection.offsetHeight) {
      // Create parallax effect by moving background position
      const yPos = scrollPosition * 0.3;
      heroSection.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
    }
  });
}

// Function to animate cards on hover
function initCardAnimations() {
  const cards = document.querySelectorAll('.benefit-card, .service-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = 'var(--shadow-lg)';
      
      // Animate icon
      const icon = this.querySelector('.benefit-icon, .service-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        
        // Change color for benefit icons
        if (icon.classList.contains('benefit-icon')) {
          icon.style.color = 'var(--accent)';
        }
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      
      // Reset icon animation
      const icon = this.querySelector('.benefit-icon, .service-icon');
      if (icon) {
        icon.style.transform = '';
        
        // Reset color for benefit icons
        if (icon.classList.contains('benefit-icon')) {
          icon.style.color = '';
        }
      }
    });
  });
}

// Function to add number counter animations
function initNumberCounters() {
  // This would be used if we had statistic numbers to animate
  // Example implementation for future use:
  
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Add for actual counters when needed:
  /*
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;
  
  function handleCounterAnimation() {
    if (!hasAnimated && isElementInViewport(document.querySelector('.counter-section'))) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateValue(counter, 0, target, 1500);
      });
      hasAnimated = true;
    }
  }
  
  window.addEventListener('scroll', handleCounterAnimation);
  */
}

// Add button hover animation (complementing the ones in main.js)
const ctaButtons = document.querySelectorAll('.hero-buttons .btn, .contact-buttons .btn');

ctaButtons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// Animated scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', function() {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      window.scrollTo({
        top: benefitsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
}
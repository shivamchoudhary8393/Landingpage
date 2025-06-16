const menuToggleButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let heroSlidesCount = heroDots.length;

// Toggle mobile menu
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggleButton.setAttribute('aria-expanded', isOpen);
  mobileOverlay.classList.toggle('visible', isOpen);
}
menuToggleButton.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', toggleMobileMenu);

// Hero carousel dots click event
heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Function to activate a slide (only updates dots visually)
function goToSlide(index) {
  heroDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    dot.setAttribute('aria-selected', i === index);
    dot.tabIndex = i === index ? 0 : -1;
  });
  currentSlide = index;
  // Implement slide image/text swap here if needed (this example is static)
}

// Accessibility: Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    toggleMobileMenu();
    menuToggleButton.focus();
  }
});

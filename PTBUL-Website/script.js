const menuToggle = document.querySelector('.menu-toggle');
const navCollapse = document.querySelector('nav.nav-collapse');
const menuOverlay = document.getElementById('menu-overlay');
const menuClose = document.querySelector('.menu-close');

// Open menu with hamburger
menuToggle.addEventListener('click', () => {
  navCollapse.classList.add('open');
  menuOverlay.classList.add('active');
});

// Close menu with X button
menuClose.addEventListener('click', () => {
  navCollapse.classList.remove('open');
  menuOverlay.classList.remove('active');
});

// Close menu when clicking the overlay
menuOverlay.addEventListener('click', () => {
  navCollapse.classList.remove('open');
  menuOverlay.classList.remove('active');
});

// Close nav on window resize if desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navCollapse.classList.remove('open');
    menuOverlay.classList.remove('active');
  }
});

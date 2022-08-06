const header = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  //   window.pageYOffset > 0 ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
  if (window.pageYOffset > 0) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('hidden');
});

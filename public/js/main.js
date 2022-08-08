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
  navMenu.classList.toggle('navHide');
});

const colapse = document.querySelectorAll('.colapse');
colapse.forEach((colaps) => {
  colaps.addEventListener('click', () => {
    const hide = colaps.children[2];
    const colapsing = colaps.children[1].children[0];
    const colapsed = colaps.children[1].children[1];
    hide.classList.toggle('colapseHide');
    colapsing.classList.toggle('hidden');
    colapsed.classList.toggle('hidden');
  });
});

const hubBtn = document.getElementById('hubBtn');
const hub = document.getElementById('hub');
hubBtn.addEventListener('click', () => {
  const icons = hub.children;
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle('iconHide');
  }
});

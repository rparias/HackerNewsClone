import RouterHandler from './router';

function setActiveLink() {
  const links = document.querySelectorAll('.header-link');
  links.forEach((link) => {
    const linkPath = link.getAttribute('href');
    const currentPath = window.location.hash;
    if (currentPath === linkPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.onhashchange = () => {
  setActiveLink();
};

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();

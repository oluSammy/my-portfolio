//scroll event listener
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  const scroll = document.querySelector('.banner__scroll');
  const top = document.querySelector('.top-btn');
  nav.classList.toggle('sticky', window.scrollY > 100);
  if (window.scrollY > 100) {
    scroll.style.opacity = '0';
    scroll.style.visibility = 'hidden';
    top.style.opacity = '1';
    top.style.visibility = 'visible';
  } else {
    scroll.style.opacity = '1';
    scroll.style.visibility = 'visible';
    top.style.opacity = '0';
    top.style.visibility = 'hidden';
  }
});

ScrollReveal().reveal('.about__content', {
  reset: true,
  distance: '20%',
  origin: 'left',
  opacity: null,
});

//

ScrollReveal().reveal('.about__btn-container', {
  delay: 675,
  reset: true,
  distance: '10%',
  origin: 'left',
  opacity: 0,
});

ScrollReveal().reveal('.dev-animation', {
  delay: 275,
  reset: true,
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
});

//animate-dev tools container
ScrollReveal().reveal('.animate-dev', {
  delay: 1000,
  reset: true,
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
});

// projects__header
ScrollReveal().reveal('.projects__header', {
  delay: 105,
  reset: true,
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
});

// animate-cards
ScrollReveal().reveal('.animate-card', {
  delay: 105,
  reset: true,
  distance: '10%',
  origin: 'bottom',
  opacity: 0,
});

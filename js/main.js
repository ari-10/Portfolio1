'use strict';

// ************************
// Definition
// ************************
const loading = document.querySelector('.loading');
const snav = document.querySelector('.snav');
const snavButton = document.querySelector('.snav__btn');
const snavLists = document.querySelectorAll('.snav__list');
const globalNavLists = document.querySelectorAll('.global-nav__list');
const header = document.querySelector('header');
const intro = document.querySelector('.intro');
const introBtn = document.querySelector('.intro__btn');
const sections = document.querySelectorAll('section');
const contact = document.querySelector('.contact');
const fadeInSlideEl = document.querySelector('.js-fade-in-slide');
const fadeInZoomEl = document.querySelectorAll('.js-fade-in-zoom');
const stickyNavObsOpt = {
  root: null,
  rootMargin: "0px",
  threshold: [0.45],
};
const stickyNavObs = new IntersectionObserver(stickyNavigation, stickyNavObsOpt);
const scrollFadeInObsOpt = {
  root: null,
  rootMargin: "0px",
  threshold: [1],
};
const scrollFadeInObs = new IntersectionObserver(scrollFadeIn, scrollFadeInObsOpt);



// ************************
// Function
// ************************
function screenLoading() {
  loading.classList.add('loading--fade');
  fadeInSlideEl.classList.add('js-fade-in-slide--done');
}

function toggleNavigation() {
  snav.classList.toggle('snav--active');
}

function stickyNavigation(entries) {
  if (!entries[0].isIntersecting) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
}

function scrollFadeIn(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('js-fade-in-zoom--done');
  });
}

function scrollNavTo($index) {
  sections[$index].scrollIntoView({
    behavior: "smooth"
  });
}


// ************************
// Event
// ************************
window.addEventListener('load', screenLoading);

snavButton.addEventListener('click', toggleNavigation);

introBtn.addEventListener('click', () => {
  scrollNavTo(sections.length - 1);
})

for (let $i = 0; $i < globalNavLists.length; $i++) {
  globalNavLists[$i].addEventListener('click', () => {
    scrollNavTo($i);
  });
};

for (let $i = 0; $i < snavLists.length; $i++) {
  snavLists[$i].addEventListener('click', () => {
    scrollNavTo($i);
  });
};

stickyNavObs.observe(intro);

fadeInZoomEl.forEach(fadeInZoomElement => {
  scrollFadeInObs.observe(fadeInZoomElement);
});


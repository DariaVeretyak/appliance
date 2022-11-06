'use strict';

// анимация
const animTitles = document.querySelector('.animTitles');

function animOnScroll() {
  const animItem = animTitles;
  const animItemHeight = animItem.offsetHeight;
  const animItemOffset = offset(animItem).top;
  const animStart = 4;

  let animItemPoint = window.innerHeight - animItemHeight / animStart;

  if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    (pageYOffset > animItemOffset - animItemPoint)
    && pageYOffset < (animItemOffset + animItemHeight)
  ) {
    animItem.classList.add('_active');
  } else {
    if (!animItem.classList.contains('anim-no-hide')) {
      animItem.classList.remove('_active');
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft
    = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop
    = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop, leff: rect.left + scrollLeft,
  };
}

if (animTitles) {
  window.addEventListener('scroll', animOnScroll);

  setTimeout(() => {
    animOnScroll();
  }, 200);
}

// menu-open (mobile)
const menuBtn = document.querySelector('.header__menu');
const menuClose = document.querySelector('.header__menu-close');
const menuMobile = document.querySelector('.header__footer');

menuBtn.addEventListener('click', (ev) => {
  menuMobile.classList.add('header__footer--active');
});

menuClose.addEventListener('click', (ev) => {
  menuMobile.classList.remove('header__footer--active');
});

// search
const inputSearch = document.getElementById('city');
const searchBtn = document.querySelector('.header__search-btn');

inputSearch.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.target.value = '';
  };
});

searchBtn.addEventListener('click', (e) => {
  inputSearch.value = '';
});

// links
const footerLinks = document.querySelectorAll('.header__nav-item');

footerLinks.forEach(link => {
  link.addEventListener('click', (ev) => {
    menuMobile.classList.remove('header__footer--active');
  });
});

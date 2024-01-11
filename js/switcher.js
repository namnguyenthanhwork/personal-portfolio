/* --------------- toggle switcher ------------ */
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');

styleSwitcherToggler.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// hide switcher on scroll
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/* --------------- toggle switcher color ------------ */
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  localStorage.setItem('color', color);
  changeColor();
}

function changeColor() {
  alternateStyles.forEach((style) => {
    if (localStorage.getItem('color') === style.getAttribute('title'))
      style.removeAttribute('disabled');
    else style.setAttribute('disabled', 'true');
  });
}

// checkig if 'color' key exists
if (localStorage.getItem('color') !== null) changeColor();

/* ---------------theme light - dark mode ------------ */
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark'))
    localStorage.setItem('theme', 'dark');
  else localStorage.setItem('theme', 'light');
  updateIcon();
});

function themeMode() {
  // checking if 'theme' key exists
  if (localStorage.getItem('theme') !== null) {
    if (localStorage.getItem('theme') === 'light')
      document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  }
  updateIcon();
}
themeMode();

function updateIcon() {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.remove('fa-moon');
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.remove('fa-sun');
    dayNight.querySelector('i').classList.add('fa-moon');
  }
}

/* ------------------ toggle music --------------- */
const music = document.querySelector('.music');
let audio = document.getElementById('myAudio');
window.addEventListener('load', () => {
  audio.pause();
  music.classList.add('pause');
});
music.addEventListener('click', function () {
  if (this.classList.contains('pause')) {
    audio.play();
  } else {
    audio.pause();
  }
  this.classList.toggle('pause');
});

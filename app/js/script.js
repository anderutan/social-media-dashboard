const body = document.querySelector('body');
const darkToggle = document.getElementById('dark');
const lightToggle = document.getElementById('light');
const radioBtns = document.querySelectorAll('.toggle__wrapper input');
const localGetColor = localStorage.getItem('colorMode');

if (localGetColor) {
  localGetColor === 'dark' ? setDarkMode() : setLightMode();
} else {
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? setDarkMode()
    : setLightMode();
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    if (event.matches) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });

for (let btn of radioBtns) {
  btn.addEventListener('click', () => {
    if (darkToggle.checked) {
      localStorage.setItem('colorMode', 'dark');
      setDarkMode();
    } else {
      localStorage.setItem('colorMode', 'light');
      setLightMode();
    }
  });
}

function setDarkMode() {
  body.classList = 'dark';
  darkToggle.click();
}

function setLightMode() {
  body.classList = 'light';
  lightToggle.click();
}

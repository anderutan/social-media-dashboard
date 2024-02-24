const body = document.querySelector('body');
const darkToggle = document.getElementById('dark');
const lightToggle = document.getElementById('light');
const radioBtns = document.querySelectorAll('.toggle__wrapper input');
const localGetColor = localStorage.getItem('colorMode');

if (localGetColor) {
  localGetColor === 'dark' ? setDarkMode() : setLightMode();
} else {
  setDarkMode();
}

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

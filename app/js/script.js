const body = document.querySelector('body');
const darkToggle = document.getElementById('dark');
const radioBtns = document.querySelectorAll('.toggle__wrapper input');

for (let btn of radioBtns) {
  btn.addEventListener('click', (event) => {
    body.classList = event.target.value;
  });
}

darkToggle.checked ? (body.classList = 'dark') : (body.classList = 'light');

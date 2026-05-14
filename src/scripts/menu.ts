const button = document.querySelector('[data-open-menu]');
const menu = document.querySelector('.menu');

button?.addEventListener('click', () => {
  button?.classList.toggle('-active');
  menu?.classList.toggle('-open');
});
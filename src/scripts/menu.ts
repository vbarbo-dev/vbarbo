export function headerMenu() {
  const button = document.querySelector('[data-open-menu]');
  const menu = document.querySelector('.menu');
  const menuItems = menu?.querySelectorAll('.menu-item');

  button?.addEventListener('click', () => {
    button?.classList.toggle('-active');
    menu?.classList.toggle('-open');
  });

  if(menuItems) {
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menu?.classList.remove('-open');
        button?.classList.remove('-active');
      });
    });
  }
}
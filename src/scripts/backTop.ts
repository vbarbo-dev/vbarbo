export function backToTop() {
  const backToTopButtons = document.querySelectorAll<HTMLButtonElement>('[data-back-to-top]');

  if(!backToTopButtons) return;

  backToTopButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
}
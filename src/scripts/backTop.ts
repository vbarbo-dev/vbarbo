export function backToTop() {
  const backToTopButton = document.querySelector(
    '[data-back-to-top]'
  ) as HTMLButtonElement | null;

  if (backToTopButton) {

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
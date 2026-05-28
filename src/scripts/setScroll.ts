export function initHeaderScroll() {
  const element = document.querySelector<HTMLElement>('.header');

  if (!element) return;

  const header = element;

  let lastScrollTop = 0;

  function updateHeaderState() {
    const scrollTop = window.scrollY;

    if (scrollTop <= 0) {
      header.classList.add('scroll-up');
      header.classList.remove('scroll-down');
      header.classList.add('on-top');

      lastScrollTop = scrollTop;
      return;
    }

    header.classList.remove('on-top');

    if (scrollTop > lastScrollTop) {
      header.classList.add('scroll-down');
      header.classList.remove('scroll-up');
    } else {
      header.classList.add('scroll-up');
      header.classList.remove('scroll-down');
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', updateHeaderState);

  updateHeaderState();
}
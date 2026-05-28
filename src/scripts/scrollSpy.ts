export function initScrollSpy() {
  const anchors = document.querySelectorAll<HTMLElement>('.anchor[id]');
  const links = document.querySelectorAll<HTMLElement>('[data-link]');

  if (!anchors.length || !links.length) return;

  function updateActiveSection() {
    let currentId = '';

    anchors.forEach((anchor) => {
      const rect = anchor.getBoundingClientRect();

      // Anchor já passou do topo
      if (rect.top <= 120) {
        currentId = anchor.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        '-active',
        link.dataset.link === currentId
      );
    });
  }

  window.addEventListener('scroll', updateActiveSection);

  updateActiveSection();
}
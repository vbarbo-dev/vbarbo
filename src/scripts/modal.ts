export function modal() {
  const modal = document.querySelector('[data-modal]') as HTMLDivElement | null;
  const image = document.querySelector('.modal-image') as HTMLImageElement | null;
  const projects = document.querySelectorAll('[data-project]');
  const close = document.querySelector('[data-modal-close]');

  if (!modal || !image) return;

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      const preview = project.getAttribute('data-preview');

      if (!preview) return;

      image.src = preview;
      modal.classList.add('-active');
    });
  });

  close?.addEventListener('click', () => {
    modal.classList.remove('-active');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('-active');
    }
  });
}
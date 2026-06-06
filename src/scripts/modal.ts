export function modal() {
  const modal = document.querySelector('[data-modal]') as HTMLDivElement | null;
  const image = document.querySelector('.modal-image') as HTMLImageElement | null;
  const projects = document.querySelectorAll('[data-project]');
  const close = document.querySelector('[data-modal-close]');

  if (!modal || !image) return;

  const resetImage = () => {
    image.src = '';
    image.style.opacity = '0';
    modal.classList.remove('-loading');
  };

  const openImage = (src: string) => {
    modal.classList.add('-loading');
    image.style.opacity = '0';

    const tempImg = new Image();
    tempImg.src = src;

    const show = () => {
      image.src = src;
      modal.classList.remove('-loading');
      modal.classList.add('-active');

      requestAnimationFrame(() => {
        image.style.opacity = '1';
      });
    };

    // decode é mais moderno, fallback pro onload
    if (tempImg.decode) {
      tempImg.decode().then(show).catch(show);
    } else {
      tempImg.onload = show;
    }
  };

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      const preview = project.getAttribute('data-preview');
      if (!preview) return;

      openImage(preview);
    });
  });

  const closeModal = () => {
    modal.classList.remove('-active');
    resetImage();
  };

  close?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}
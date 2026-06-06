export function modal() {
  const modal = document.querySelector('[data-modal]') as HTMLDivElement | null;
  const image = document.querySelector('.modal-image') as HTMLImageElement | null;
  const projects = document.querySelectorAll('[data-project]');
  const close = document.querySelector('[data-modal-close]');

  if (!modal || !image) return;

  const resetImage = () => {
    image.src = '';
    image.style.opacity = '0';
    image.classList.remove('-loading');
  };

  const loadImage = (src: string) => {
    image.classList.add('-loading');
    image.style.opacity = '0';

    const tempImg = new Image();
    tempImg.src = src;

    const show = () => {
      image.src = src;

      requestAnimationFrame(() => {
        image.classList.remove('-loading');
        image.style.opacity = '1';
      });
    };

    if (tempImg.decode) {
      tempImg.decode().then(show).catch(show);
    } else {
      tempImg.onload = show;
    }
  };

  const openModal = (src: string) => {
    modal.classList.add('-active');
    loadImage(src);
  };

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      const preview = project.getAttribute('data-preview');
      if (!preview) return;

      openModal(preview);
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
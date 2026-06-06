export function modal() {
  const modal = document.querySelector('[data-modal]') as HTMLDivElement | null;
  const image = document.querySelector('.modal-image') as HTMLImageElement | null;
  const projects = document.querySelectorAll('[data-project]');
  const close = document.querySelector('[data-modal-close]');
  const shimmer = document.querySelector('.modal-shimmer') as HTMLDivElement | null;

  if (!modal || !image) return;

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const reset = () => {
    image.src = '';
    image.style.opacity = '0';
    image.classList.remove('-loaded');

    shimmer?.classList.add('-active');
  };

  const loadImage = (src: string) => {
    shimmer?.classList.add('-active');
    image.style.opacity = '0';

    const tempImg = new Image();
    tempImg.src = src;

    const show = () => {
      image.src = src;

      requestAnimationFrame(() => {
        shimmer?.classList.remove('-active');
        image.classList.add('-loaded');
        image.style.opacity = '1';
      });
    };

    if (tempImg.decode) {
      tempImg.decode().then(show).catch(show);
    } else {
      tempImg.onload = show;
    }
  };

  const open = (src: string) => {
    modal.classList.add('-active');
    lockScroll();
    loadImage(src);
  };

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      const preview = project.getAttribute('data-preview');
      if (!preview) return;

      open(preview);
    });
  });

  const closeModal = () => {
    modal.classList.remove('-active');
    unlockScroll();
    reset();
  };

  close?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}
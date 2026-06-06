export function reveal() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}
export function jobTabs() {
  const tabs = document.querySelectorAll<HTMLElement>('.job-tab');
  const contents = document.querySelectorAll<HTMLElement>('.job');

  if (!tabs.length || !contents.length) return;

  function setActiveTab(target: string) {
    tabs.forEach((tab) => {
      tab.classList.toggle(
        '-active',
        tab.dataset.tab === target
      );
    });

    contents.forEach((content) => {
      content.classList.toggle(
        '-active',
        content.dataset.content === target
      );
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      if (!target) return;

      setActiveTab(target);
    });
  });

  setActiveTab(tabs[0].dataset.tab || '');
}
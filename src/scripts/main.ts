import { headerMenu } from "./menu";
import { jobTabs } from "./jobTabs";
import { backToTop } from "./backTop";
import { form } from "./contactForm";
import { initHeaderScroll } from "./setScroll";
import { initScrollSpy } from "./scrollSpy";

document.addEventListener('DOMContentLoaded', () => {
  headerMenu();
  jobTabs();
  backToTop();
  form();
  initHeaderScroll();
  initScrollSpy();
});
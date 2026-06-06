import { headerMenu } from "./menu";
import { jobTabs } from "./jobTabs";
import { backToTop } from "./backTop";
import { form } from "./contactForm";
import { initHeaderScroll } from "./setScroll";
import { initScrollSpy } from "./scrollSpy";
import { modal } from "./modal";
import { reveal } from "./reveal";

document.addEventListener('DOMContentLoaded', () => {
  headerMenu();
  reveal();
  jobTabs();
  backToTop();
  form();
  initHeaderScroll();
  initScrollSpy();
  modal();
});
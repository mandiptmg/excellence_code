import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initCode from "./code.js";
import initHero from "./hero.js";

import initScrollTop from "./scrollTopBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1500,
    easing: "ease-in-out",
    once: true,
  });

  initNavbar();
  initHero();
  initScrollTop();
  initProjects();
  initClients();
  initCode();
  initServices();
});

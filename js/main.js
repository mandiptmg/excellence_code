import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initCode from "./code.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
  });

  initNavbar();
  initProjects();
  initClients();
  initCode();
  initServices();
});

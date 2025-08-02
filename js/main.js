import initNavbar from './navbar.js';
import initProjects from './projects.js';
import initFeatures from './features.js';
import initTeam from './team.js';
import initClients from './clients.js';
import initServices from './services.js';
import initTimeline from './milestone.js';


document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
    
    // Content sections
    initProjects();
    initFeatures();
    initTeam();
    initClients();
    initServices();
    
    // Timeline/Milestones
    initTimeline();

});

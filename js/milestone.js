export default function initTimeline() {
  const milestones = [
    {
      year: "2012",
      title: "Founding Year",
      subtitle: "Creative Design & Website Development",
      description:
        "The agency was founded with a focus on creative design and website development, helping businesses establish their online presence with stunning visuals and user-friendly websites.",
      icon: "assets/object/object.png",
    },
    {
      year: "2014",
      title: "Expanding Services",
      subtitle: "Events Management & Exhibition Stand Execution",
      description:
        "We expanded our offerings to include events management and exhibition stand execution, providing end-to-end solutions for brands to showcase their products and services at trade shows and events.",
      icon: "assets/object/object2.png",
    },
    {
      year: "2016",
      title: "Digital Marketing",
      subtitle: "SEO & SMO",
      description:
        "Recognizing the growing importance of digital presence, we added SEO (Search Engine Optimization) and SMO (Social Media Optimization) to our services.",
      icon: "assets/object/object3.png",
    },
    {
      year: "2019",
      title: "Tech Expansion",
      subtitle: "Mobile App Development & Cloud Solutions",
      description:
        "To keep up with modern trends, we introduced mobile application development and cloud-based solutions, empowering businesses with scalable, cross-platform digital tools.",
      icon: "assets/object/object3.png",
    },
  ];

  let activeIndex = 0;
  let showAll = false;

  const generateStepIndicator = () => {
    const steps = milestones
      .map(
        (_, index) =>
          `<div class="step-dot ${
            index === activeIndex ? "active" : ""
          }" data-step="${index}"></div>`
      )
      .join("");

    return `
      ${steps}
      <i class="fas fa-chevron-right step-arrow"></i>
      <div class="step-line"></div>
    `;
  };

  // Generate milestones HTML
  const generateMilestones = () => {
    return milestones
      .map(
        (milestone, index) => `
      <div class="milestone-item ${index === activeIndex ? "active" : ""}" 
           data-index="${index}" tabindex="0" role="button" 
           aria-pressed="${index === activeIndex}">
        
        <!-- Left Section -->
        <div class="milestone-left">
          <div class="milestone-header">
            <img src="${milestone.icon}" 
                 alt="${milestone.title} icon" 
                 class="milestone-icon"
                 onerror="this.style.display='none'">
            <p class="milestone-year">${milestone.year}</p>
          </div>
          <div class="milestone-titles">
            <p class="milestone-title">${milestone.title}</p>
            <h4 class="milestone-subtitle">${milestone.subtitle}</h4>
          </div>
        </div>

        <!-- Right Section -->
        <div class="milestone-right">
          <p class="milestone-description">${milestone.description}</p>
        </div>
      </div>
    `
      )
      .join("");
  };

  // Update step indicator
  const updateStepIndicator = () => {
    const stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator) {
      stepIndicator.innerHTML = generateStepIndicator();
    }
  };

  // Update milestone states
  const updateMilestoneStates = () => {
    const items = document.querySelectorAll(".milestone-item");
    items.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("active");
        item.setAttribute("aria-pressed", "true");
      } else {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      }
    });
  };

  // Set active milestone
  const setActiveIndex = (index) => {
    if (index === activeIndex || index < 0 || index >= milestones.length)
      return;

    activeIndex = index;
    updateStepIndicator();
    updateMilestoneStates();

    // Smooth scroll to active milestone
    const activeItem = document.querySelector(
      `.milestone-item[data-index="${index}"]`
    );
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Toggle show all milestones
  const toggleShowAll = () => {
    showAll = !showAll;
    const container = document.getElementById("milestonesContainer");
    const icon = document.getElementById("toggleIcon");

    if (container && icon) {
      if (showAll) {
        container.classList.remove("collapsed");
        container.classList.add("expanded");
        icon.classList.add("rotated");
      } else {
        container.classList.remove("expanded");
        container.classList.add("collapsed");
        icon.classList.remove("rotated");
      }
    }
  };

  // Handle milestone clicks
  const handleMilestoneClick = (e) => {
    const milestoneItem = e.target.closest(".milestone-item");
    if (milestoneItem) {
      const index = parseInt(milestoneItem.dataset.index);
      setActiveIndex(index);
    }
  };

  // Handle step indicator clicks
  const handleStepClick = (e) => {
    if (e.target.classList.contains("step-dot")) {
      const step = parseInt(e.target.dataset.step);
      setActiveIndex(step);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    // Handle milestone item keyboard events
    if (e.target.classList.contains("milestone-item")) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = parseInt(e.target.dataset.index);
        setActiveIndex(index);
      }
    }

    // Arrow key navigation
    if (e.key === "ArrowUp" && activeIndex > 0) {
      e.preventDefault();
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "ArrowDown" && activeIndex < milestones.length - 1) {
      e.preventDefault();
      setActiveIndex(activeIndex + 1);
    }
  };

  // Initialize DOM elements
  const stepIndicator = document.getElementById("stepIndicator");
  const milestonesList = document.getElementById("milestonesList");
  const toggleButton = document.getElementById("toggleButton");

  if (!stepIndicator || !milestonesList || !toggleButton) {
    console.error("Timeline: Required DOM elements not found");
    return null;
  }

  // Render initial content
  stepIndicator.innerHTML = generateStepIndicator();
  milestonesList.innerHTML = generateMilestones();

  // Bind event listeners
  document.addEventListener("click", handleMilestoneClick);
  document.addEventListener("click", handleStepClick);
  document.addEventListener("keydown", handleKeyDown);

  toggleButton.addEventListener("click", toggleShowAll);

  // Step indicator click events
  stepIndicator.querySelectorAll(".step-dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const step = parseInt(e.target.dataset.step);
      setActiveIndex(step);
    });
  });

  // Auto-advance functionality (optional)
  let autoAdvanceInterval = null;

  const startAutoAdvance = () => {
    autoAdvanceInterval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % milestones.length;
      setActiveIndex(nextIndex);
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceInterval) {
      clearInterval(autoAdvanceInterval);
      autoAdvanceInterval = null;
    }
  };

  // Cleanup function
  const destroy = () => {
    stopAutoAdvance();
    document.removeEventListener("click", handleMilestoneClick);
    document.removeEventListener("click", handleStepClick);
    document.removeEventListener("keydown", handleKeyDown);
    toggleButton.removeEventListener("click", toggleShowAll);
  };

  // Public API
  const timelineAPI = {
    setActive: setActiveIndex,
    toggle: toggleShowAll,
    destroy: destroy,
    getCurrentIndex: () => activeIndex,
    getMilestones: () => milestones,
    addMilestone: (milestone) => {
      milestones.push(milestone);
      milestonesList.innerHTML = generateMilestones();
      updateStepIndicator();
    },
    updateMilestone: (index, newData) => {
      if (milestones[index]) {
        milestones[index] = { ...milestones[index], ...newData };
        milestonesList.innerHTML = generateMilestones();
        updateStepIndicator();
      }
    },
    startAutoAdvance,
    stopAutoAdvance,
  };

  // Store API globally for external access
  window.timelineAPI = timelineAPI;

  console.log("Timeline initialized successfully");
  return timelineAPI;
}

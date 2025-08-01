document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navbar = document.querySelector(".navbar");

  if (document.getElementById("currentYear")) {
    document.getElementById("currentYear").textContent =
      new Date().getFullYear();
  }

  // Toggle Menu
  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.add("active");
  });

  closeMenu?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
  });

  // Scroll Effect
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  // Projects Section
  const projects = [
    {
      title: "BenX",
      subtitle: "Brand Guidelines",
      image: "assets/portfolio/portfolio1.png",
    },
    {
      title: "BenX",
      subtitle: "Brand Guidelines",
      image: "assets/portfolio/portfolio2.png",
    },
    {
      title: "BenX",
      subtitle: "Brand Guidelines",
      image: "assets/portfolio/portfolio3.png",
    },
  ];

  const projectsGrid = document.getElementById("portfolioGrid");
  if (projectsGrid) {
    const projectCardsHTML = projects
      .map(
        (project, index) => `
      <div class="project-card" data-index="${index}">
        <div class="image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-image" />
        </div>
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-footer">
            <hr class="divider" />
            <button class="arrow-btn" data-index="${index}">→</button>
          </div>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
      </div>
    `
      )
      .join("");

    projectsGrid.innerHTML = projectCardsHTML;

    // Add event listeners to arrow buttons
    projectsGrid.querySelectorAll(".arrow-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const idx = e.currentTarget.getAttribute("data-index");
        alert(`More details for ${projects[idx].title}`);
      });
    });
  }

  // Why Choose Us Section
  const features = [
    {
      title: "Experience and Reliability",
      description:
        "With over a decade of project execution in both private and government sectors, we've earned trust through quality delivery.",
    },
    {
      title: "Customized Solutions",
      description:
        "We tailor strategies to your unique needs, ensuring personalized and effective outcomes.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our consistent results speak volumes about our professionalism and client satisfaction.",
    },
    {
      title: "Creative Excellence",
      description:
        "Innovation meets execution — our creative ideas are matched with technical expertise.",
    },
    {
      title: "End-to-End Service",
      description:
        "We manage everything from planning to delivery for a seamless client experience.",
    },
  ];

  const featureGrid = document.getElementById("featureGrid");

  // Combine heading and features into one array
  const fullContent = [
    {
      isHeading: true,
      html: `
      <div class="heading" data-aos="fade-right">
        <h2>
          What makes us <br />
          the right choice <br />
          for you?
        </h2>
      </div>
    `,
    },
    ...features.map((feature, index) => ({
      isHeading: false,
      html: `
      <div class="feature-card" data-index="${index}" data-aos="fade-up">
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-desc">${feature.description}</p>
      </div>
    `,
    })),
  ];

  // Inject into grid
  if (featureGrid) {
    featureGrid.innerHTML = fullContent.map((item) => item.html).join("");
  }

  // Dummy team data
  const teamMembers = [
    {
      name: "John Paul",
      title: "Creative Designer",
      linkedin: "#",
    },
    {
      name: "Jane Smith",
      title: "Project Manager",
      linkedin: "#",
    },
    {
      name: "Alex Doe",
      title: "UX Specialist",
      linkedin: "#",
    },
    {
      name: "Emma Wilson",
      title: "Developer",
      linkedin: "#",
    },
    {
      name: "Michael Scott",
      title: "Marketing Lead",
      linkedin: "#",
    },
    {
      name: "Sarah Connor",
      title: "Data Analyst",
      linkedin: "#",
    },
  ];

  // Swiper initialization
  const swiperWrapper = document.getElementById("teamSwiperWrapper");

  swiperWrapper.innerHTML = teamMembers
    .map(
      (member) => `
  <div class="swiper-slide">
    <div class="hiden-overflow">
      <img src="assets/image.png" alt="${member.name}" />
      <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <div class="slide-info">
      <p>${member.name}</p>
      <p>${member.title}</p>
    </div>
  </div>
`
    )
    .join("");

  // Set slidesPerView based on screen width
  let slidesPerView = 2;

  function updateSlidesPerView() {
    if (window.innerWidth >= 1024) {
      slidesPerView = 3;
    } else if (window.innerWidth >= 768) {
      slidesPerView = 2;
    } else {
      slidesPerView = 1;
    }
  }

  updateSlidesPerView(); // Initial run
  window.addEventListener("resize", () => {
    updateSlidesPerView();
    if (window.myTeamSwiper) {
      window.myTeamSwiper.params.slidesPerView = slidesPerView;
      window.myTeamSwiper.update();
    }
  });

  // Now initialize Swiper with current slidesPerView
  window.myTeamSwiper = new Swiper(".team-swiper", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: "#teamNextBtn",
      prevEl: "#teamPrevBtn",
    },
  });

  const clients = [
    {
      title: "BenX Acency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "BenX Acency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "BenX Acency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "BenX Acency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
  ];

  const slidesContainer = document.getElementById("slidesContainer");
  // Inject slides
  slidesContainer.innerHTML = clients
    .map(
      (client) => `
          <div class="slide">
            <p class="testimonial-text">"${client.paragraph}"</p>
            <div class="testimonial-footer">
              <h3 class="testimonial-title">${client.title}</h3>
              <hr class="testimonial-divider" />
              <p class="testimonial-subtitle">${client.subtitle}</p>
            </div>
          </div>
        `
    )
    .join("");

  // Slider logic
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  let currentIndex = 0;

  // Calculate how many slides are visible per view (based on CSS)
  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 2;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function updateSliderPosition() {
    const slidesPerView = getSlidesPerView();
    // Limit max index so we don't show empty slides
    const maxIndex = totalSlides - slidesPerView;
    if (currentIndex > maxIndex) currentIndex = maxIndex < 0 ? 0 : maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  // Next & Prev buttons
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex++;
    updateSliderPosition();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex--;
    updateSliderPosition();
  });

  // On window resize, update position to handle responsive changes
  window.addEventListener("resize", () => {
    updateSliderPosition();
  });

  // Initialize position
  updateSliderPosition();

  const services = [
    {
      title: "Website Design and Development",
      paragraph:
        "We specialize in designing and developing responsive, user-friendly websites that provide an excellent user experience.",
    },
    {
      title: "Digital Marketing and Social Media Management",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Events and Conferences Organizing",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const serviceList = document.getElementById("serviceList");

  let activeIndex = null;

  function renderAccordion() {
    serviceList.innerHTML = services
      .map((service, index) => {
        const isActive = index === activeIndex;
        return `
          <li class="vas-service-item ${
            isActive ? "active" : ""
          }" data-index="${index}">
            <div>
              <h5 class="vas-service-title">${service.title}</h5>
              ${
                isActive
                  ? `
                <p class="vas-service-paragraph">${service.paragraph}</p>
                <div class="vas-link-wrap">
                  <a href="#" class="vas-read-more">Read More</a>
                  <span class="vas-link-icon"><i class="fas fa-arrow-up"></i></span>
                </div>
              `
                  : ""
              }
            </div>
          </li>
        `;
      })
      .join("");

    document.querySelectorAll(".vas-service-item").forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.getAttribute("data-index"));
        activeIndex = activeIndex === index ? null : index;
        renderAccordion(); // re-render to update state
      });
    });
  }

  renderAccordion(); // initial render
});

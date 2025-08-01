export default function initTeam() {
  const teamMembers = [
    { name: "John Paul", title: "Creative Designer", linkedin: "#" },
    { name: "Jane Smith", title: "Project Manager", linkedin: "#" },
    { name: "Alex Doe", title: "UX Specialist", linkedin: "#" },
    { name: "Emma Wilson", title: "Developer", linkedin: "#" },
    { name: "Michael Scott", title: "Marketing Lead", linkedin: "#" },
    { name: "Sarah Connor", title: "Data Analyst", linkedin: "#" },
  ];

  const swiperWrapper = document.getElementById("teamSwiperWrapper");
  if (swiperWrapper) {
    swiperWrapper.innerHTML = teamMembers.map(member => `
      <div class="swiper-slide">
        <div class="hiden-overflow">
          <img src="assets/image.png" alt="${member.name}"  />
          <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div class="slide-info">
          <p>${member.name}</p>
          <p>${member.title}</p>
        </div>
      </div>
    `).join("");
  }

  let slidesPerView = 2;
  const updateSlides = () => {
    slidesPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  };

  updateSlides();
  window.addEventListener("resize", () => {
    updateSlides();
    if (window.myTeamSwiper) {
      window.myTeamSwiper.params.slidesPerView = slidesPerView;
      window.myTeamSwiper.update();
    }
  });

  window.myTeamSwiper = new Swiper(".swiper", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: "#teamNextBtn",
      prevEl: "#teamPrevBtn",
    },
  });
}

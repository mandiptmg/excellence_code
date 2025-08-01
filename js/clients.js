export default function initClients() {
  const clients = [
    {
      title: "BenX Agency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "Digital Nexus",
      subtitle: "UI/UX Design",
      paragraph:
        "Reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "SparkEdge",
      subtitle: "Web Development",
      paragraph:
        "Totam ad ea beatae autem, blanditiis corrupti! Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Nova Solutions",
      subtitle: "Strategy Consulting",
      paragraph:
        "Dolorem ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
  ];

  const slidesContainer = document.getElementById("slidesContainer");
  if (slidesContainer) {
    slidesContainer.innerHTML = clients
      .map(
        (client) => `
        <div class="swiper-slide hover">
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
  }
window.myClientsSwiper = new Swiper(".clients-swiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#clientsNextBtn",
    prevEl: "#clientsPrevBtn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2, // ✅ prevent 3 on large screens
    },
  },
});

}

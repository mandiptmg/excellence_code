export default function initServices() {
  const services = [
    {
      title: "Website Design and Development",
      paragraph: "We create responsive and user-friendly websites.",
    },
    {
      title: "Digital Marketing and Social Media Management",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Events and Conferences Organizing",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const serviceList = document.getElementById("serviceList");
  let activeIndex = null;

  function renderAccordion() {
    if (!serviceList) return;
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
        renderAccordion();
      });
    });
  }

  renderAccordion();
}

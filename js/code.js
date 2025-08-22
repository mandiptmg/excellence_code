export default function initCode() {
  const cards = [
    {
      iconImage: "./assets/object/creative.png",
      image: "./assets/code/creative.svg",
      title: "Creative",
      content:
        "Innovative ideas leveraging modern technologies to craft solutions that inspire and engage.",
    },
    {
      iconImage: "./assets/object/outstanding.png",
      image: "./assets/code/outstanding.svg",
      title: "Outstanding",
      content:
        "Delivering high-quality code with precision, ensuring reliability and excellence every time.",
    },
    {
      iconImage: "./assets/object/dynamic.png",
      image: "./assets/code/dynamic.svg",
      title: "Dynamic",
      content:
        "Adaptable and future-ready, capable of evolving with new trends and solving challenges quickly.",
    },
    {
      iconImage: "./assets/object/effective.png",
      image: "./assets/code/effective.svg",
      title: "Effective",
      content:
        "Focused on impactful results—creating solutions that save time, cost, and maximize efficiency.",
    },
  ];

  const container = document.getElementById("codeGrid");

  // Generate HTML
  container.innerHTML = cards
    .map(
      (card, index) => `
      <div class="card ${index === 0 ? "active" : ""}" data-index="${index}" >
        <img src="${card.iconImage}" alt="${card.title} Icon" class="icon" />
        
           ${
             card.image
               ? `<img src="${card.image}" alt="${card.title} Image" class="extra-image" />`
               : `<img
                 src="./assets/code.png"
                 alt="${card.title} Image"
                 class="extra-image"
               />`
           }
          
        <h3 class="card-title">${card.title}</h3>
             <p class="card-content">${card.content}</p>
      </div>
    `
    )
    .join("");

  // Add click event to toggle active card
  const allCards = container.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      allCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
}

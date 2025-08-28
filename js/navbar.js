export default function initNavbar() {
  const menuToggle = document.getElementById("menuToggle"); // hamburger button
  const mobileMenu = document.getElementById("mobileMenu"); // overlay (menu-model)
  const closeMenu = document.getElementById("closeMenu"); // close button
  const navbar = document.querySelector(".navbar");
  const navbar1 = document.querySelector(".navbar1");

  // Footer year auto-update
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Menu Open / Close ---
  const openMenu = () => mobileMenu?.classList.add("active");
  const closeMenuFn = () => mobileMenu?.classList.remove("active");

  menuToggle?.addEventListener("click", openMenu);
  closeMenu?.addEventListener("click", closeMenuFn);

  // Close when clicking outside the menu content (backdrop)
  mobileMenu?.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenuFn();
  });

  // Close when clicking nav links
  const menuLinks = mobileMenu?.querySelectorAll("a");
  menuLinks?.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        window.location.href = `${window.location.origin}/${href}`;
      }

      closeMenuFn();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenuFn();
  });

  // --- Close menu on resize > 1024px ---
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenuFn();
    }
  });

  // --- Navbar scroll effect ---
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 50);
    navbar1?.classList.toggle("scrolled", window.scrollY > 50);
  });

  // --- Accordion dropdown ---
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const btn = item.querySelector(".dropbtn");
    const submenu = item.querySelector(".dropdown-menu-content");

    btn?.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all accordions (only one open at a time)
      accordionItems.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
        i.querySelector(".dropdown-menu-content").hidden = true;
      });

      // Open current accordion
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        submenu.hidden = false;
      }
    });
  });

  // --- Fix links to use hash only (navbar + navbar1) ---
  const navLinks = document.querySelectorAll(".navbar a, .navbar1 a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && href.includes("#")) {
        e.preventDefault();
        const id = href.split("#")[1]; // get "about", "code", etc.
        window.location.href = `/#${id}`;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Lightweight rotating role text; respects reduced-motion preferences.
  const role = document.getElementById("typedRole");
  const roles = ["Natural Language Processing", "Legal AI & Research", "Software Development", "Workflow Automation"];
  if (role && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % roles.length;
      role.animate([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 350 });
      role.textContent = roles[index];
    }, 2600);
  }

  // Close the mobile navigation after a section is selected.
  document.querySelectorAll("#navContent .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navContent");
      if (menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
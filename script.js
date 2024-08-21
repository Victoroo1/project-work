document.addEventListener("DOMContentLoaded", function myFunction() {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  function switchSection(sectionId) {
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.add("active-section");
      } else {
        section.classList.remove("active-section");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const sectionId = this.getAttribute("data-section");
      switchSection(sectionId);
    });
  });

  switchSection("home");
});

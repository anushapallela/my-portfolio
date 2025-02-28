document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    function makeActive() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }
  
    window.addEventListener("scroll", makeActive);
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    window.scrollToSection = function (sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    };
  });
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        scrollToSection(targetId);
      });
    });
  });

// Smooth scrolling and section transitions
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    // Function to check which section is in view
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
  
    // Add event listener for scroll
    window.addEventListener("scroll", makeActive);
  
    // Smooth scroll to section
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Scroll to section on button click
    window.scrollToSection = function (sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    };
  });
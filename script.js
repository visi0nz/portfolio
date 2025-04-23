// Hamburger Menu
function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
}

// Language Switcher
function switchLanguage(lang) {
  if (lang === 'de') {
      window.location.href = 'indexger.html'; 
  } else {
      window.location.href = 'index.html'; 
  }
}


// Navbar
let lastScrollY = window.scrollY; // Track the last scroll position

window.addEventListener("scroll", () => {
    const header = document.querySelector("header"); // Select the header element
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add("hidden");
    } else {
        // Scrolling up
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});


// Projects

function toggleProject(button) {
  const projectDetails = button.nextElementSibling; // Nächstes Element (Details)
  const isVisible = projectDetails.style.display === "block";

  // Alle anderen Projekte schließen
  document.querySelectorAll(".project-details").forEach((details) => {
      details.style.display = "none";
  });

  // Aktuelles Projekt umschalten
  projectDetails.style.display = isVisible ? "none" : "block";
}
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
    const projectDetails = button.nextElementSibling; // Get the project details
    const isVisible = projectDetails.style.display === "block";

    // Close all other projects
    document.querySelectorAll(".project-details").forEach((details) => {
        details.style.display = "none";
    });
    document.querySelectorAll(".project-title").forEach((title) => {
        title.classList.remove("open"); // Remove the 'open' class from all buttons
    });

    // Toggle the current project
    if (!isVisible) {
        projectDetails.style.display = "block";
        button.classList.add("open"); // Add the 'open' class to the current button
    }
}
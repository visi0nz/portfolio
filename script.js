// Animate sections on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});


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


// Navbar disappearing / appearing
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

// Animate desktop nav links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link, index) => {
        link.style.opacity = "0"; // Ensure the initial state is hidden
        link.style.transform = "translateY(-80px)"; // Ensure the initial position is above
        link.style.animation = `slideDown 0.8s ease forwards`;
        link.style.animationDelay = `${index * 0.2}s`; // Add delay for each link
    });
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

// Footer Links
// Adjust target attribute for Impressum and Datenschutz links
function adjustFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-links a');

    footerLinks.forEach((link) => {
        if (window.innerWidth > 768) {
            // For desktop: Open in a new window
            link.setAttribute('target', '_blank');
        } else {
            // For mobile: Open in the same window
            link.removeAttribute('target');
        }
    });
}

// Run the function on page load
adjustFooterLinks();

// Run the function on window resize
window.addEventListener('resize', adjustFooterLinks);

// JavaScript for Lightbox
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const projectImages = document.querySelectorAll(".project-image");

    // Open lightbox when an image is clicked
    projectImages.forEach((image) => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex"; // Show the lightbox
            lightboxImage.src = image.src; // Set the lightbox image source
        });
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage) {
            lightbox.style.display = "none"; // Hide the lightbox
        }
    });
});
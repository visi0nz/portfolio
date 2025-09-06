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
      window.location.href = 'index.html'; 
  } else {
      window.location.href = 'index-eng.html'; 
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

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const projectCards = document.querySelectorAll(".project-card");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Entferne die aktive Klasse von allen Buttons
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active"); // Füge die aktive Klasse zum geklickten Button hinzu

            const filter = button.getAttribute("data-filter");

            projectCards.forEach((card) => {
                const techs = card.getAttribute("data-tech").split(" ");
                if (filter === "all" || techs.includes(filter)) {
                    card.style.display = "block"; // Zeige das Projekt an
                } else {
                    card.style.display = "none"; // Verstecke das Projekt
                }
            });
        });
    });
});

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


// Lightbox

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("lightbox-close");
    closeButton.innerHTML = "&times;"; // Close icon
    lightbox.appendChild(closeButton);

    const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

    lightboxTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const imageSrc = trigger.getAttribute("href");
            lightboxImage.src = imageSrc;
            lightbox.classList.add("active");
        });
    });

    // Close the lightbox when the close button is clicked
    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
});




// Image Loader
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
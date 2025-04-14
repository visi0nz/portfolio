function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// disappearing Navbar

  const navbar = document.getElementById("desktop-nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }
    lastScrollY = currentScrollY;
  });


// Language Switcher
function switchLanguage(lang) {
  if (lang === 'de') {
      window.location.href = 'indexger.html'; 
  } else {
      window.location.href = 'index.html'; 
  }
}
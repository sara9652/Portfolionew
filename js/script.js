
window.addEventListener('load', () => {
    gsap.from('header', { y: -100, opacity: 0, duration: 1 });
    gsap.from('.landing-content h1', { x: -50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.landing-content p', { x: 50, opacity: 0, duration: 1, delay: 0.8 });
    gsap.from('.download-resume-btn', { scale: 0, opacity: 0, duration: 1, delay: 1.2 });
  });
  
  // Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Optional: Close menu on link click (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


// Typing Effect
const typedRole = document.getElementById("typed-role");
const roles = ["Web Developer", "Frontend Engineer"];
let i = 0,
  j = 0,
  currentRole = "",
  isDeleting = false;

function typeEffect() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }

    typedRole.innerHTML = currentRole;

    if (!isDeleting && j === roles[i].length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
    setTimeout(typeEffect, isDeleting ? 80 : 150);
  }
}
typeEffect();
const modeToggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  modeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

modeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    modeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("darkMode", "disabled");
    modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});


// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  AOS.init({
    duration: 1000,
    once: true,
  });
});

document.querySelectorAll("a[href]").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return; // ignore anchors and mailto links
    }
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
  

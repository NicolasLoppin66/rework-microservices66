// Menu mobile
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
  });

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector("nav").classList.remove("active");
  });
});

// Animation au défilement
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.padding = "0.5rem 0";
  } else {
    header.style.padding = "1rem 0";
  }
});

// Gestion du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  this.reset();
});

// Méthode JavaScript pour un scroll fluide
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Utilisation pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    smoothScroll(target);
  });
});

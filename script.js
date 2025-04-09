// ================= CAROUSEL ===================
const carousel = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function updateCarousel() {
  if (carousel) {
    carousel.style.transform = translateX(-${index * 100}%);
  }
}

[prev, next].forEach((button, i) => {
  if (button) {
    button.addEventListener("click", () => {
      index = (i === 0)
        ? (index - 1 + images.length) % images.length
        : (index + 1) % images.length;
      updateCarousel();
    });
  }
});

// ================= HERO BACKGROUND ===================
const heroSection = document.getElementById("hero");
const backgrounds = [
  "images/logoM.png",
  "images/l1.jpg",
  "images/l2.jpg",
  "images/l3.jpg",
  "images/l4.jpeg",
  "images/p9.jpg",
  "images/p10.jpg",
  "images/download.jpeg",
];
let currentBackground = 0;

function changeBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = url('${backgrounds[currentBackground]}');
    currentBackground = (currentBackground + 1) % backgrounds.length;
  }
}
if (heroSection) setInterval(changeBackground, 2500);

// ================= RECENSIONI ===================
const reviews = document.querySelectorAll(".review");
let currentReview = 0;

function showNextReview() {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === currentReview);
  });
  currentReview = (currentReview + 1) % reviews.length;
}
if (reviews.length > 0) setInterval(showNextReview, 2500);

// ================= CHAT BUTTON ===================
const chatButton = document.getElementById("chat-button");
if (chatButton) {
  chatButton.addEventListener("click", () => {
    alert("Chat non disponibile al momento. Contattaci via email!");
  });
}

// ================= MENU TOGGLE PER MOBILE ===================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Chiudi menu quando clicchi un link
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 940) {
        navMenu.classList.remove("active");
      }
    });
  });
}

// ================= DROPDOWN PER MOBILE ===================
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");

  if (link) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 940) {
        e.preventDefault(); // evita salto
        dropdown.classList.toggle("active");
      }
    });
  }
});
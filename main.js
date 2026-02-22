// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message sent!");

  form.reset();
});

// Skill hover accessibility enhancement
document.querySelectorAll(".skills-list span").forEach(skill => {
  skill.addEveconst progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;
  progressBar.style.width = scrolled + "%";
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


const words = ["Frontend Developer", "UI Engineer", "Web Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typewriter").textContent =
    currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();




// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Skill hover accessibility enhancement
document.querySelectorAll(".skills-list span").forEach(skill => {
  skill.addEventListener("focus", () => {
    skill.classList.add("active");
  });
});
// Project card keyboard accessibility
document.querySelectorAll(".project-card").forEach(card => {
  card.setAttribute("tabindex", "0");
});
// STICKY NAVBAR
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// DARK MODE TOGGLE
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
});

// FORM VALIDATION
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";

  form.reset();
});


document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modal.classList.add("show");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});


// TOGGLE MENU
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// CLOSE ON LINK CLICK
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  });
});

// CLOSE ON OUTSIDE CLICK
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
  }
});

// SCROLL SHADOW
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});
/* FILTER LOGIC */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* MODAL LOGIC */
const modal = document.getElementById("projectModal");
const viewButtons = document.querySelectorAll(".view-btn");
const closeModal = document.querySelector(".close-modal");

viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

/* TOGGLE CLICK */
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");

  if (current === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});
root.setAttribute("data-theme", "dark");ntListener("focus", () => {
    skill.classList.add("active");
  });
});
// Project card keyboard accessibility
document.querySelectorAll(".project-card").forEach(card => {
  card.setAttribute("tabindex", "0");
});


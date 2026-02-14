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
  skill.addEventListener("focus", () => {
    skill.classList.add("active");
  });
});
// Project card keyboard accessibility
document.querySelectorAll(".project-card").forEach(card => {
  card.setAttribute("tabindex", "0");
});

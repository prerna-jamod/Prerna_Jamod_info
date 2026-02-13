// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when click any link (mobile)
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Project search filter
const searchInput = document.getElementById("searchInput");
const projects = Array.from(document.querySelectorAll(".project"));

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  projects.forEach(card => {
    const title = (card.dataset.title || "").toLowerCase();
    card.style.display = title.includes(q) ? "block" : "none";
  });
});

// Contact form (demo)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill all fields.";
    return;
  }

  formMsg.textContent = "Message sent successfully! (Demo only)";
  form.reset();
});

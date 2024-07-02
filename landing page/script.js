document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learn-more");
  learnMoreBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    contactForm.reset();
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#e74c3c";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "#f1c40f";
    });
  });
});

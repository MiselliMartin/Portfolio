document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll('a');
  
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("aparecer")) {
          navbar.classList.remove("aparecer");
        }
      });
    });
  
    btn.addEventListener("click", () => {
      navbar.style.position = "fixed";
      navbar.classList.toggle("aparecer");
    });
  });
  
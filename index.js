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

const divColum = document.getElementById("costadito");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Verifica si el div está visible
    if (entry.isIntersecting) {
      // Agrega la clase cuando está visible
      div.classList.add("visible");
    } else {
      // Remueve la clase cuando no está visible
      div.classList.remove("visible");
    }
  });
});

observer.observe(divColum);


  });
  

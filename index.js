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

    const secciones = document.querySelectorAll('.indicador')
    const navlinks = document.querySelectorAll('.navlink')
    const iconcitos = document.querySelectorAll('.fa-circle')

    const funcionObserver = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const itemActual = Array.from(navlinks).find(navlink => navlink.dataset.url === entry.target.id)
          itemActual.classList.add('active')
          for (const navlink of navlinks) {
            if (itemActual != navlink){
              if (navlink.classList.contains("active")){
                navlink.classList.remove('active')
              }
            }
          }
          const iconitoActual = Array.from(iconcitos).find(iconito => iconito.dataset.url === entry.target.id)
          iconitoActual.classList.add('fa-solid')
          for (const iconito of iconcitos) {
            if (iconitoActual != iconito){
              if (iconito.classList.contains("fa-solid")){
                iconito.classList.remove('fa-solid')
                iconito.classList.add('fa-ragular')
              }
            }
          }
        }
      })
    }

    const observer = new IntersectionObserver(funcionObserver, {
      root: null,
      rootMargin : '0px',
      threshold: 0.8
    })

    secciones.forEach(seccion => observer.observe(seccion))
});
  
  
// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Hamburguesa para Móviles
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Botón Volver Arriba
  const btnTop = document.getElementById('btn-top');

  if (btnTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnTop.style.display = 'block';
      } else {
        btnTop.style.display = 'none';
      }
    });

    btnTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Lógica para la predicción del futuro
  const btnPrediccion = document.getElementById('btn-prediccion');
  const textoPrediccion = document.getElementById('texto-prediccion');

  if (btnPrediccion && textoPrediccion) {
    btnPrediccion.addEventListener('click', () => {
      // Verificamos si está oculto
      if (textoPrediccion.style.display === 'none' || textoPrediccion.style.display === '') {
        textoPrediccion.style.display = 'block';
        btnPrediccion.textContent = 'Ocultar Predicción';
      } else {
        textoPrediccion.style.display = 'none';
        btnPrediccion.textContent = 'Revelar Predicción';
      }
    });
  } else {
    console.log("No se encontró el botón de predicción en esta página.");
  }
});

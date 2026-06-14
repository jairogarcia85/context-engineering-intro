/* ============================================================
   Rubén Carpinteiro — JS del sitio (vanilla, sin dependencias)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // --- Menú móvil: abre/cierra la navegación ---
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú al pulsar un enlace (útil en móvil)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Año dinámico en el footer ---
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

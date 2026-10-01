(function () {
  var raiz = document.documentElement;
  var CLAVE = 'castel-tema';
  var guardado = null;

  try { guardado = localStorage.getItem(CLAVE); } catch (e) {}

  var tema = guardado || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  raiz.setAttribute('data-tema', tema);

  document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('boton-tema');
    if (!boton) return;

    function actualizar() {
      var oscuro = raiz.getAttribute('data-tema') === 'dark';
      boton.setAttribute('aria-pressed', oscuro);
      boton.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
    }

    boton.addEventListener('click', function () {
      var nuevo = raiz.getAttribute('data-tema') === 'dark' ? 'light' : 'dark';
      raiz.setAttribute('data-tema', nuevo);
      try { localStorage.setItem(CLAVE, nuevo); } catch (e) {}
      actualizar();
    });

    actualizar();
  });
})();
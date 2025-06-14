const musicaInicio = new Audio('complementos/heroes.mp3');
musicaInicio.volume = 0.1;
musicaInicio.loop = false;
musicaInicio.play();

function cambiarPantalla(entrada, salida) {
  document.getElementById(entrada).style.display = "none";
  document.getElementById(salida).style.display = "block"; 
}

comenzar.addEventListener("click", function() {
  cambiarPantalla("pantalla-inicial", "pantalla-principal");
});

trabajos.addEventListener("click", function() {
  cambiarPantalla("pantalla-principal", "pantalla-trabajos");
});

profesional.addEventListener("click", function() {
  cambiarPantalla("pantalla-principal", "pantalla-profesional");
});

trab.addEventListener("click", function() {
  cambiarPantalla("pantalla-trabajos", "pantalla-principal");
});

prof.addEventListener("click", function() {
  cambiarPantalla("pantalla-profesional", "pantalla-principal");
});

window.addEventListener('load', bloquearRotacionHorizontal);

function reproducirSonido(rutaSonido) {
  const audio = new Audio(rutaSonido);
  audio.play();
}

function agregarEfectoSonido(elementoId, sonidoHover, sonidoClick) {
  const elemento = document.getElementById(elementoId);
  if (elemento) {
    elemento.addEventListener("mouseover", function() {
      reproducirSonido(sonidoHover);
    });

    elemento.addEventListener("click", function() {
      reproducirSonido(sonidoClick);
    });
  }
}

agregarEfectoSonido("comenzar", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("trabajos", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("profesional", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("trab", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("prof", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("facebook-link", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("linkedin-link", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("github-link", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("descargar-cv-btn", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("n10", "complementos/pasar.mp3", "complementos/click.mp3");
agregarEfectoSonido("n11", "complementos/pasar.mp3", "complementos/click.mp3");


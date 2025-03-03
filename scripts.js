function toggleMusic() {
  var audio = document.getElementById("audio");
  var button = document.querySelector(".musica button");
  if (audio.paused) {
      audio.play();
      button.textContent = "Pausar Música";
  } else {
      audio.pause();
      button.textContent = "Reproducir Música";
  }
}

// Cargar tareas guardadas al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
  var tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareasGuardadas.forEach(function(tarea) {
      agregarTarea(tarea.texto, tarea.completada);
  });
});

// Función para agregar nuevas tareas
function agregarTarea(tareaTexto = "", completada = false) {
  var input = document.querySelector(".tareas input");
  var lista = document.querySelector(".tareas ul");
  var tarea = tareaTexto.trim() || input.value.trim();
  if (tarea !== "") {
      var li = document.createElement("li");
      li.textContent = tarea;
      if (completada) {
          li.style.textDecoration = "line-through";
      }
      lista.appendChild(li);
      guardarTareas();
      input.value = "";
  } else if (!tareaTexto) {
      alert("Por favor, escribe una tarea.");
  }
}

// Detectar el botón de agregar tareas y asignar la función
var botonAgregar = document.querySelector(".tareas button");
botonAgregar.addEventListener("click", function() {
  agregarTarea();
});

// Función para marcar tareas como completadas y guardar el estado
document.querySelector(".tareas ul").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
      if (e.target.style.textDecoration === "line-through") {
          e.target.style.textDecoration = "none";
      } else {
          e.target.style.textDecoration = "line-through";
      }
      guardarTareas();
  }
});

// Función para guardar tareas en localStorage
function guardarTareas() {
  var lista = document.querySelectorAll(".tareas ul li");
  var tareas = [];
  lista.forEach(function(li) {
      tareas.push({
          texto: li.textContent,
          completada: li.style.textDecoration === "line-through"
      });
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para mostrar observadores como emergentes (pop-ups)
function mostrarObservador(mensaje) {
  alert("Observador: " + mensaje);
}

// Ejemplo de cómo usar la función de observadores
var observadores = document.querySelectorAll(".observadores ul li");
observadores.forEach(function(observador) {
  observador.addEventListener("click", function() {
      var mensaje = observador.textContent;
      mostrarObservador(mensaje);
  });
});

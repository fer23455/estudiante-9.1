scripts.js
function agregarTarea() {
    const tarea = document.getElementById("nueva-tarea").value.trim();
    if (tarea !== "") {
      const li = document.createElement("li");
      li.textContent = tarea;
      document.getElementById("tareas-list").appendChild(li);
      document.getElementById("nueva-tarea").value = "";
    } else {
      alert("Por favor, escribe una tarea.");
    }
  }
  
  // Función para agregar un nuevo observador
  function agregarObservador() {
    const observador = document.getElementById("nuevo-observador").value.trim();
    if (observador !== "") {
      const li = document.createElement("li");
      li.textContent = observador;
      document.getElementById("observadores-list").appendChild(li);
      document.getElementById("nuevo-observador").value = "";
    } else {
      alert("Por favor, escribe un observador.");
    }
  }
  
  // Función para pausar o reanudar la música de fondo
  function toggleMusic() {
    const audio = document.getElementById("background-music");
    const btn = document.getElementById("music-toggle");
    if (audio.paused) {
      audio.play();
      btn.textContent = "Pausar Música";
    } else {
      audio.pause();
      btn.textContent = "Reanudar Música";
    }
  }
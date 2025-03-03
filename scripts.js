fetch('datos.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo.");
        }
        return response.text();
    })
    .then(data => {
        const lista = document.querySelector(".observadores ul");
        const lineas = data.split("\n");
        lineas.forEach(linea => {
            if (linea.trim() !== "") {
                const li = document.createElement("li");
                li.textContent = linea;
                lista.appendChild(li);
            }
        });
    })
    .catch(error => console.error("Error:", error));

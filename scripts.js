body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: #fff;
    text-align: center;
}

header {
    background-color: #1e3c72;
    padding: 20px;
    border-bottom: 2px solid #2a5298;
}

.navbar {
    display: flex;
    justify-content: center;
    background-color: #2a5298;
    padding: 10px;
}

.navbar button {
    background-color: #1e3c72;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.navbar button:hover {
    background-color: #3b5998;
}

.seccion {
    display: none;
    padding: 20px;
    animation: fadeIn 0.5s;
}

.visible {
    display: block;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #3b5998;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}

input[type="text"] {
    padding: 5px;
    width: 60%;
    border: none;
    border-radius: 5px;
}

button {
    background-color: #3b5998;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #4b70b2;
}

.revisar {
    color: #ffd700;
}

.cumplido {
    color: #32cd32;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

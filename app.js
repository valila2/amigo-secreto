// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Capturar el campo de entrada
    let nombre = inputNombre.value.trim(); 

    if (nombre === "") { 
        alert("Por favor, inserte un nombre."); 
        return;
    }

    amigos.push(nombre); 
    inputNombre.value = ""; 

    actualizarLista(); 
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li"); 
        li.textContent = amigo; // Asignarle el nombre del amigo
        listaAmigos.appendChild(li); 
    });
}
function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista HTML
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; 

    document.getElementById("resultadoSorteo").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> `;
}

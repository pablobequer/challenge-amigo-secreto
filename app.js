let listaDeNombres = [];
let amigoSecreto = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//
function insertarAmigo() {
    let agregarAmigo = document.getElementById("amigo").value;
    if (agregarAmigo !== '') {
      listaDeNombres.push(agregarAmigo);
      document.getElementById("amigo").value = ''; // Limpiar el valor del input
      console.log('Amigo agregado:', agregarAmigo);
      mostrarListaAmigos(); // Llamar a la función para mostrar la lista
      
    } else {
        alert("No ha ingresado ningún nombre, favor de intentar de nuevo");
    }
    
}

function mostrarListaAmigos() {
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < listaDeNombres.length; i++) {
      let nuevoItem = document.createElement("li");
      nuevoItem.textContent = listaDeNombres[i];
      listaAmigosElement.appendChild(nuevoItem);
    }
}
    
function sortearAmigo() {
    if (listaDeNombres.length > 0) {
        let amigoSorteado = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)];
        listaDeNombres = []; // Limpiar la lista de amigos
        mostrarAmigoSorteado(amigoSorteado);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        alert("No hay suficientes amigos en la lista. Por favor, agrega más nombres.");
    }
}

function mostrarAmigoSorteado(amigoSorteado) {
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista de amigos
}

function reiniciarSorteo() {
    location.reload();
}





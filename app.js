// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables principales globales
let amigosIngresados = [];

const crearTextoElemento = (elem, texto) => {
    const elementoHTML = document.createElement(elem);
    elementoHTML.textContent = texto;

    return elementoHTML;
}

const generarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * amigosIngresados.length);

    return numeroAleatorio;
}

const limpiarInput = () => {
    document.getElementById('amigo').value = "";
}

const limpiarListaAmigos = () => {
    document.getElementById('listaAmigos').innerHTML = "";
}

//! Funciones necesarias
const agregarAmigo = () => {
    const valorInput = document.getElementById("amigo").value;

    // Verificar que no se ingrese una cadena vacia
    if(valorInput === "" ) {
        alert("Por favor, inserte un nombre válido.");
    } else {
        // Agregar a la lista de amigos el nuevo amigo
        amigosIngresados.push(valorInput);

        // Actualizar la lista de amigos
        actualizarListaAmigos();

        // Limpiar la caja de texto
        limpiarInput();
    }
}

const actualizarListaAmigos = () => {
    // Actualizar la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Agregar la lista de amigos en el HTML
    for(let i=0; i<amigosIngresados.length; i++) {
        listaAmigos.appendChild(crearTextoElemento('li', amigosIngresados[i]));
    }
}

const sortearAmigo = () => {
    // Limpiar la lista de amigos ingresados
    limpiarListaAmigos();

    // Verificar que la lista tenga elementos
    if(amigosIngresados.length !== 0) {
        const amigoGanador = generarNumeroAleatorio();
        // Obtener el amigo ganador y ponerlo en el HTML
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigosIngresados[amigoGanador]}.`;
    }
    else {
        alert("No se han ingresado amigos todavia");
    }

    // Deshabilitar el boton para que solo se pueda usar una vez el boton
    document.querySelector('.button-draw').setAttribute('disabled', 'true');

    // Deshabilitar el boton de agregar para no poder agregar mas
    document.querySelector('.button-add').setAttribute("disabled", 'true');
}
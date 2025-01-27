// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables principales globales
let numerosGenerados = [];
let amigosIngresados = [];
const numMaximo = 5;

const asignarTextoElemento = (elem, texto) => {
    const elementoHTML = document.querySelector(elem);
    elementoHTML.innerHTML = texto;
}

const generarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * numMaximo) + 1;

    // Ver el numero aleatorio
    console.log(numeroAleatorio);

    // Verificar si ya se sorteron todos los numeros
    if(numerosGenerados.length === numMaximo) {
        asignarTextoElemento('p', "Ya se sorteron todos los números posibles");
    }
    else {
        // Si el numero generado esta incluido en la lista volver a llamar al metodo y generar otro
        if(numerosGenerados.includes(numeroAleatorio)) {
            return generarNumeroAleatorio();
        }
        else {
            numerosGenerados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
}

const limpiarInput = () => {
    document.getElementById('amigo').value = "";
}

const limpiarListaAmigos = () => {
    document.getElementById('listaAmigos').innerHTML = [];
}

//! Funciones necesarias
const agregarAmigo = () => {
    const valorInput = document.getElementById("amigo").value;
    console.log(valorInput);
    // Varificar que no se ingrese una cadena vacia
    if(valorInput === "" ) {
        alert("Por favor, inserte un nombre válido.");
    } else {
        // Agregar a la lista de amigos el nuevo amigo
        amigosIngresados.push(valorInput);
        console.log(amigosIngresados);

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
    for(let i=0; i<amigosIngresados.length; i++) {
        listaAmigos.innerHTML = asignarTextoElemento('li', amigosIngresados[i]);
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
}
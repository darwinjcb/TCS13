"use strict"
/* EJERCICIO 1:
Escribir una función que reciba como parámetros un array de nombres y un nombre 
a buscar, muestre en pantalla si el nombre esta en lista o no. */
let arrayEstudiantes = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombre = prompt("Ingrese un nombre");
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"


function findName(arrayNombres, nombreBuscar) {

    if (arrayNombres.includes(nombreBuscar)) {
        alert("El nombre: '" + nombreBuscar + "' si se encuentra en la lista");
    } else {
        alert("El nombre: '" + nombreBuscar + "' no se encuentra en la lista");
    }
}

if (nombre !== null) {
    findName(arrayEstudiantes, nombre);
}


/* EJERCICIO 5:
Escribir una función que reciba como parámetros el siguiente array anterior y 
el titulo de un libro. Convertir los elementos en objetos agregando la las clave 
id (numero autoincremental que empieza en 1) y title.   Devolver el valor de id 
correspondiente al titulo recibido como parámetro. */

function convertirArrayAObjetos(arrayLibros, tituloBuscado) {
    // Array para almacenar los objetos convertidos
    let librosObjetos = [];

    // Recorremos el array de libros
    arrayLibros.forEach((titulo, index) => {
        // Creamos el objeto con id autoincremental y title normalizado
        let libroObjeto = {
            id: index + 1,
            title: titulo.charAt(0).toUpperCase() + titulo.slice(1).toLowerCase()
        };

        // Agregamos el objeto al array de objetos
        librosObjetos.push(libroObjeto);
    });

    // Convertimos el título buscado para comparar en minúsculas
    let tituloBuscadoLower = tituloBuscado.toLowerCase();

    // Buscamos el id correspondiente al título buscado
    let idBuscado = null;
    librosObjetos.forEach(libro => {
        if (libro.title.toLowerCase() === tituloBuscadoLower) {
            idBuscado = libro.id;
        }
    });

    // Devolvemos el id correspondiente al título buscado (null si no se encontró)
    return idBuscado;
    
}
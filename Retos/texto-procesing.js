/*
    1.- Crea una función llamada procesarTexto que reciba un string (oración)
    2.- Usa split para divir la oración en un array de palabras
    3.- Usa join para unir las palabras con un guión bajo (_)
    4.- Usa repeat para repetir la cadena resultante 3 veces
    5.- Usa slice para devolver solo la primera mitad de la cadena repetida
    6.- Devuelve el resultado final
*/

function procesarTexto(oracion) {
    let palabras = oracion.split(" ");
    let oracionUnida = palabras.join("_");
    let oracionRepetida = oracionUnida.repeat(3);
    let mitadOracion= oracionRepetida.slice(0, oracionRepetida.length / 2);

    return mitadOracion;
}

let oracion = "Ella no me ama de verdad";
console.log(procesarTexto(oracion));
/*
    1.- Crea una función llamada procesarFrutas que reciba una array de strings (frutas)
    2.- Usa push para agregar una nueva fruta al final del array
    3.- Usa pop para eliminar la última fruta del array
    4.- Usa unshift para agregar una fruta al inicio del array
    5.- Usa slice para obtener las primeras 3 frutas del array
*/

function procesarFrutas(frutas, nuevaFruta) {
    frutas.push(nuevaFruta);
    frutas.pop();
    frutas.shift("Piña");
    return frutas.slice(0, 3);
}

let frutas = ["Manzana", "Banana", "Cereza"];
console.log(procesarFrutas(frutas, "Durazno"));
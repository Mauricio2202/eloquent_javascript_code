/*
    Se usa para reducir un array a un solo valor (suma, promedio, etc).
    Puede devolver un número, un objeto, una cadena, o incluso otro array.
    Útil cuando queremos calcular resultados acumulativos.
*/

const numeros = [];
numeros.push(1, 2, 3, 4, 5);
const sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(sumaTotal);

// reduce() recorre el array y va acumulando la suma de los números, comenzando desde 0
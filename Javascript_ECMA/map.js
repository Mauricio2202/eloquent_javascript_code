/*
    Se usa para transformar cada elemento de un array
    Retorna un nuevo array con los elementos modificados
    Ideal cuando queremos modificar valores sin cambiar el array original
*/

const numeros = [];
numeros.push(1, 2, 3, 4, 5);
const duplicados = numeros.map(num => num * 2);

console.log(duplicados);

// Cada número del array original se multiplica por 2, generando un nuevo array con los valores transformados
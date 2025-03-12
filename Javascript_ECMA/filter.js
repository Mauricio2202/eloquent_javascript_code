/*
    Se usa para filtrar elementos de un array según una condición
    Retorna un nuevo array con los elementos que cumplan la condición
    Útil cuando queremos excluir elementos no deseados de una lista
*/

const numeros = [];
numeros.push(1, 4, 6, 8, 3, 9, 2);
const mayoresA5 = numeros.filter(num => num > 5);

console.log(mayoresA5);
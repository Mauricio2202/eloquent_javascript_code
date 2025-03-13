// Calcula el promedio de un array de números

const calificaciones = [];
calificaciones.push(85, 90, 78, 92, 88);

const promedio = calificaciones.reduce((promediador, num) => promediador + num, 0) / calificaciones.length;

console.log(promedio);
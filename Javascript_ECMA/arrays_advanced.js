let listaDeTareas = [];

function recordar(tarea) {
    // Esto es para agregar un elemento al array vacío
    listaDeTareas.push(tarea);
}

function obtenerTarea() {
    // shift agrega tareas al final de la cola y después la elimina
    return listaDeTareas.shift();
}

function recordarUrgentemente(tarea) {
    // unshift agrega una tarea al inicio de la cola no al final
    listaDeTareas.unshift(tarea);
}

recordar("manzana");
recordarUrgentemente("papaya");
recordarUrgentemente("durazno");
console.log(listaDeTareas);

//  Este busca a través del array desde el principio hasta el final y retorna el índice en el que se encontró el valor 
console.log([1, 2, 3, 2, 1].indexOf(2));

// Para buscar desde el final en lugar del inicio
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// Toma índices de inicio a fin y retorna un array que solo tiene los números entre ellos
console.log([0, 1, 2, 3, 4].slice(1, 4));
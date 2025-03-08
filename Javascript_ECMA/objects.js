let dia1 = {
    ardilla: false,
    eventos: ["trabajo", "toqué un árbol", "pizza", "salir a correr"],
};

console.log(dia1.ardilla);

let unObjeto = { izquierda: 1, derecha: 2 };
console.log(unObjeto.izquierda);

delete unObjeto.izquierda;
console.log(unObjeto.izquierda);

// in quiere decir "en" y verifica si una propiedad se encuentra en un objeto
console.log("izquierda" in unObjeto);
console.log("derecha" in unObjeto);

// Object.keys para saber qué propiedades tiene un objeto
console.log(Object.keys({x: 0, y: 0, z: 2}));

let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA);
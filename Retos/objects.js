/*
1.- Crea un array vacío llamado personas
2.- Usa el método push para agregar dos objetos que representen a personas, cada uno con las propiedades nombre y edad
3.- Usa el método pop para eliminar la última persona del array
*/

let personas = [];
personas.push({ 
    nombre: "Mauricio",
    edad: 21 
});

personas.push({ 
    nombre: "Danae",
    edad: 29
});

personas.pop();

console.log("Danae" in personas);
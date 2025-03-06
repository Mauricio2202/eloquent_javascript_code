// Para la función humus no son visibles cantidad, unidad y nombre de la función ingrediente
const humus = function(factor) {
    // Esta función puede ver la vinculación factor de la función externa humus
    const ingrediente = function(cantidad, unidad, nombre) {
        let cantidadIngrediente = cantidad * factor;
        if (cantidadIngrediente > 1) {
            unidad += "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "taza", "jugo de limón");
    ingrediente(1, "clavo", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");
}

humus();

// Funciones como valores
let lanzarMisiles = function() {
    sistemaDeMisiles.lanzar("ahora");
};
if (modoSeguro) {
    lanzarMisiles = function() {

    }
}

// Declaración de función
console.log("El futuro dice: ", futuro());

function futuro() {
    return "Nunca tendrán autos voladores";
}
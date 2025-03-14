// Contar los caracteres que pertenecen a cada código

function contarPor(elementos, nombreGrupo) {
    let cuentas = [];
    for (let elemento of elementos) {
        let nombre = nombreGrupo(elemento);
        let conocido = cuentas.findIndex(c => c.nombre == nombre);
        if (conocido == -1) {
            cuentas.push({ nombre, cuenta: 1 });
        } else {
            cuentas[conocido].cuenta++;
        }
    }
    return cuentas;
}

console.log(contarPor([1, 2, 3, 4, 5], n => n > 3));
function contarFs(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "F") {
            contador++;
        }
    }
    return contador;
}

console.log(contarFs("Frío en la Fábrica")); // 2 (hay dos "F" en el string)
console.log(contarFs("fresco y feliz")); // 0 (no hay "F" en mayúscula)

function contarCaracteres(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracteres("Frío en la Fábrica", "F")); // 2
console.log(contarCaracteres("fresco y feliz", "f")); // 2
console.log(contarCaracteres("hola mundo", "o")); // 2
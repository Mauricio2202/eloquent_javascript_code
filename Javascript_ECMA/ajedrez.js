const tamaño = 8;
let tablero = "";

for (let fila = 0; fila < tamaño; fila++) {
    for (let columna = 0; columna < tamaño; columna ++) {
        if ((fila + columna) % 2 === 0) {
            tablero += " ";
        } else {
            tablero += "#";
        }
    }
    tablero += "\n";
}

console.log(tablero);
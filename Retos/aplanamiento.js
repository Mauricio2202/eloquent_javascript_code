function aplanar(arrays) {
    return arrays.reduce((acumulador, elemento) => acumulador.concat(elemento), []);
}

const arrays = [[1, 2, 3], [4, 5], [6]];
console.log(aplanar(arrays));
const cuadrado = function(x) {
    return x * x;
};

console.log(cuadrado(12))

const hacerSonido = function() {
    console.log("Pling!");
}

hacerSonido();

const potencia = function(base, exponente) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
};

console.log(potencia(2, 10));
function factorial(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return factorial(numero - 1) * numero;
    }
}

console.log(factorial(8));

let resultado = 1;
// Este código calcula 2 elevado a la 10
for (let contador = 0; contador < 10; contador = contador + 1) {
    resultado = resultado * 2;
}
console.log(resultado)

// Ciclo que haga un triángulo
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}
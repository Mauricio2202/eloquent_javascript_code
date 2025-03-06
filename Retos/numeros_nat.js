function sumaN(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumaN(n - 1);
    }
}

console.log(sumaN(5)); // Debería imprimir 15 (1 + 2 + 3 + 4 + 5)
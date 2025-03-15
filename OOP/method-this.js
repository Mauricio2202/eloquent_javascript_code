function normalizar() {
    console.log(this.coordinadas.map(n => n / this.length));
}

normalizar.call({ coordinadas: [0, 2, 3], length: 5 });
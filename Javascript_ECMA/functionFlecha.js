const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta ++) {
        resultado += base;
    }
    return resultado;
};
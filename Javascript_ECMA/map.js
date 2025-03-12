function map(array, transformar) {
    let mapeados = [];
    for (let elemento of array) {
        mapeados.push(transformar[elemento]);
    }
    return mapeados;
}
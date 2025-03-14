function every(array, predicado) {
    for (let elemento of array) {
        if(!predicado(elemento)) {
            return false;
        }
    }
    return true;
}

console.log(every([2, 4, 6], n => n % 2 === 0));
console.log(every([2, 3, 6], n => n % 2 === 0));
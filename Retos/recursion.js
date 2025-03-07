function esPar(n) {
    if (n === 0) {
        return true;
    } 
    
    else if (n === 1) {
        return false;
    } 
    
    else {
        return esPar(n - 2);
    }
}

console.log(esPar(50));
console.log(esPar(75));
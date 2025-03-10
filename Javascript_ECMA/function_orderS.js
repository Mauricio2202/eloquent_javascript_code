// Podemos tener funciones que cambien a otras funciones

function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}

ruidosa(Math.min)(3, 2, 1);

["A", "B"].forEach(letra => console.log(letra));
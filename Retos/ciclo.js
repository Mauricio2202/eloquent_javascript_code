function ciclo(valor, prueba, actualizacion, cuerpo) {
    while (prueba(valor)) {
        cuerpo(valor);
        valor = actualizacion(valor);
    }
}

ciclo(3, n => n > 0, n => n - 1, console.log);
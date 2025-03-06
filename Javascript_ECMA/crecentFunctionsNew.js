function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) {
    let stringNumero = String(numero);
    while (stringNumero.length < 3) {
        stringNumero = "0" + stringNumero;
    }
    console.log(`${stringNumero} ${etiqueta}`);
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
    imprimirEtiquetaAlcochadaConCeros(vacas, "Vacas");
    imprimirEtiquetaAlcochadaConCeros(pollos, "Pollos");
    imprimirEtiquetaAlcochadaConCeros(cerdos, "Cerdos");
}

imprimirInventarioGranja(7, 11, 3);
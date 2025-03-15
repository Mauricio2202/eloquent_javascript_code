function hablar(linea) {
    console.log(`El conejo '${this.tipo}' dice '${linea}'`);
}

let conejoBlanco = { tipo: "blanco", hablar };
let conejoHambriento = { tipo: "hambriento", hablar };

conejoBlanco.hablar("Oh mis orejas y bigotes, " + "qué tarde se está haciendo!");
conejoHambriento.hablar("Podría hacerme una zanahoria ahora mismo.");

hablar.call(conejoHambriento, "Burp!");
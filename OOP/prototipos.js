let vacio = {};
console.log(vacio.toString());

console.log(Object.getPrototypeOf({}) == 
            Object.prototype);

let conejoPrototipo = {
    hablar(linea) {
        console.log(`El conejo '${this.tipo}' dice '${linea}'`);
    }
};
let conejoAsesino = Object.create(conejoPrototipo);
conejoAsesino.tipo = "asesino";
conejoAsesino.hablar("SKREEEE!");
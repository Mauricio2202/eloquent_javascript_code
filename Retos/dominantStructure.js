const SCRIPTS = [
    { name: "Latin", ranges: [[65, 90], [97, 122]], direction: "ltr" },
    { name: "Arabic", ranges: [[1536, 1791]], direction: "rtl" },
    { name: "Han", ranges: [[11904, 12031]], direction: "ttb" }
];

function codigoCaracter(char) {
    let code = char.codePointAt(0);
    return SCRIPTS.find(script =>
        script.ranges.some(([from, to]) => code >= from && code <= to)
    );
}

function contarPor(array, groupName) {
    let conteo = [];
    for (let item of array) {
        let name = groupName(item);
        let conocido = conteo.find(c => c.name === name);
        if (conocido) {
            conocido.count++;
        } else {
            conteo.push({ name, count: 1 });
        }
    }
    return conteo;
}

function direccionDominante(texto) {
    let conteo = contarPor([...texto], char => {
        let script = codigoCaracter(char);
        return script ? script.direction : "ltr"; 
    });

    return conteo.reduce((max, actual) => actual.count > max.count ? actual : max).name;
}

console.log(direccionDominante("Hey, مساء الخير")); // → "rtl"
console.log(direccionDominante("Hello, World!"));   // → "ltr"
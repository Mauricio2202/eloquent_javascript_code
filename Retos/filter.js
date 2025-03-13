// Filtra los nombres de un array que tengan más de 5 letras

const nombres = [];
nombres.push("Mauricio", "Gabriel", "Alejandro", "Matías", "José roberto", "Maximiliano", "Chingas a tu madre");


const mayoresA5 = nombres.filter(name => name.length < 7);

console.log(mayoresA5);
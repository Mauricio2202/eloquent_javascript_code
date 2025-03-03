const express = require('express');
const app = express();

// Midleware para interpretar JSON
app.use(express.json());

// Datos iniciales de la api
let products = [
    { id: 1, name: 'Cable UTP Categería 5E', description: 'Permite conducir electricidad o señales' },
    { id: 2, name: 'Ponchadora', description: 'Se utiliza para hacer el ponchado' },
    { id: 3, name: 'Conectores RJ-45', description: 'Utilizados con tarjetas de red Ethernet' },
    { id: 4, name: 'Tester', description: 'Sirve para verificar la conectividad del cable UTP' },
];

app.get('/', (req, res) => {
    res.send("¡Bienvenido a productos de Redes!")
});

// Obtener los productos
app.get('/products', (req, res) => {
    res.json(products);
});

// Crear un nuevo producto
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
    };

    products.push(newProduct);
    res.status('201').json(newProduct);
});

// Actualizar un producto
app.put('/products:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);

    if (product) {
        product.name = req.body.name;
        res.json(product);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

// Eliminar un usuario por ID
app.delete('/products:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = productId.find((p) => p.id === productId);

    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1);
        res.json(400).json({ message: "Usuario no encontrado" });
    }
});
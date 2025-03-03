const express = require("express");
const app = express();

// Middleware para interpretar json
app.use(express.json());

let users = [
    { id: 1, name: 'Mauricio'},
    { id: 2, name: 'Rodolfo' },
];

// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Bienvenido a tu API REST de servicios CodePulse!");
});

// Obtener todos los usuarios (GET)
app.get("/users", (req, res) => {
    res.json(users);
});

// Crear un nuevo usuario (POST)
app.post("/users", (req, res) => {
    const { name } = req.body;

    if(!name || typeof name !== "string") {
        return res.status(400).json({
            error: "El campo 'name' es obligatorio y debe ser un texto válido." 
        });
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Actualizar un usuario por ID (PUT)
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id); // Convertir ID de string a número
    const user = users.find((u) => u.id === userId); // Buscar el usuario

    if (user) {
        user.name = req.body.name; // Actualizar el nombre
        res.json(user);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
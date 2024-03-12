const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});

// Restante do código do Express
// ...

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/starktechmg', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

// Agendamentos Routes
const agendamentosRouter = require('./routes/agendamentos.js');
app.use('/api/agendamentos', agendamentosRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

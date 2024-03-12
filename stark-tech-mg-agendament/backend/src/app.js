const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Rotas
const agendamentoRoutes = require('./routes/agendamentoRoutes');
app.use('/api/agendamentos', agendamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

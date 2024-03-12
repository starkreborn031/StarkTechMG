// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/starktechmg', { useNewUrlParser: true, useUnifiedTopology: true });

const agendamentoSchema = new mongoose.Schema({
  nomeCliente: String,
  data: String,
  servico: String,
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

app.get('/api/agendamentos', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/agendamentos', async (req, res) => {
  const agendamento = new Agendamento({
    nomeCliente: req.body.nomeCliente,
    data: req.body.data,
    servico: req.body.servico,
  });

  try {
    const novoAgendamento = await agendamento.save();
    res.status(201).json(novoAgendamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/agendamentos/:id', async (req, res) => {
  const idAgendamento = req.params.id;

  try {
    await Agendamento.findByIdAndRemove(idAgendamento);
    res.json({ message: 'Agendamento excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch('/api/agendamentos/:id', async (req, res) => {
  const idAgendamento = req.params.id;

  try {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(idAgendamento, {
      nomeCliente: req.body.nomeCliente,
      data: req.body.data,
      servico: req.body.servico,
    }, { new: true });

    res.json(agendamentoAtualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

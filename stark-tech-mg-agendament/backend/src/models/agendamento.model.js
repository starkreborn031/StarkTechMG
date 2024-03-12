// backend/models/agendamento.model.js
const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  data: { type: String, required: true },
  servico: { type: String, required: true },
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
// agendamento.controller.js
// backend/controllers/agendamento.controller.js
const Agendamento = require('../models/agendamento.model');

const agendamentoController = {
  createAgendamento: async (req, res) => {
    try {
      const agendamento = new Agendamento(req.body);
      await agendamento.save();
      res.status(201).json(agendamento);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAgendamentos: async (req, res) => {
    try {
      const agendamentos = await Agendamento.find();
      res.status(200).json(agendamentos);
    } catch (error) {
      res.status(5000).json(error);
    }
  },
  getAgendamentoById: async (req, res) => {
    try {
      const agendamento = await Agendamento.findById(req.params.id);
      res.status(200).json(agendamento);
      if (!agendamento) {
        res.status(404).json({ message: 'Agendamento não encontrado' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
}};

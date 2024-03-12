// backend/models/agendamento.model.js
const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    nomeCliente: { type: String, required: true },
    data: { type: String, required: true },
    servico: { type: String, required: true },
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;

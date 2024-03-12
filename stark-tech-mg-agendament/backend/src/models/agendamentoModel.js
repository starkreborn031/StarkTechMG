// backend/src/models/agendamentoModel.js
const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    servico: {
        type: String,
        required: true,
    },
    // Adicione mais campos conforme necessário
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;

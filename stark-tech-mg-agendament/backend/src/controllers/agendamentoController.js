// backend/src/controllers/agendamentoController.js
const Agendamento = require('../models/agendamentoModel');

// Método para criar um novo agendamento
exports.createAgendamento = async (req, res) => {
    try {
        const novoAgendamento = new Agendamento(req.body);
        await novoAgendamento.save();
        res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar agendamento.' });
    }
};

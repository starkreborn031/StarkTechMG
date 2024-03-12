// backend/routes/agendamentos.js
const router = require('express').Router();
const Agendamento = require('../models/agendamento.model');

// Obter todos os agendamentos
router.route('/').get(async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        res.json(agendamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Adicionar um novo agendamento
router.route('/').post(async (req, res) => {
    const { nomeCliente, data, servico } = req.body;
    const novoAgendamento = new Agendamento({ nomeCliente, data, servico });

    try {
        const agendamentoSalvo = await novoAgendamento.save();
        res.status(201).json(agendamentoSalvo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

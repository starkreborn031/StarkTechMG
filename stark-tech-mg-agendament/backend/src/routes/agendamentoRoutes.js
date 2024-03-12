// backend/src/routes/agendamentoRoutes.js
const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

// Rota para criar um novo agendamento
router.post('/', agendamentoController.createAgendamento);

module.exports = router;

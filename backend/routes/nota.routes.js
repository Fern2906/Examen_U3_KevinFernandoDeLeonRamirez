const express = require('express');
const router = express.Router();
const { obtenerNotas, crearNota } = require('../controllers/nota.controller');

router.get('/notas', obtenerNotas);
router.post('/notas', crearNota);

module.exports = router;

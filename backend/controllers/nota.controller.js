const Nota = require('../models/Nota');

const obtenerNotas = async (req, res) => {
  try {
    const notas = await Nota.find().sort({ createdAt: -1 });
    res.json(notas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las notas', error: error.message });
  }
};

const crearNota = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    if (!titulo || !contenido) {
      return res.status(400).json({ mensaje: 'El título y el contenido son obligatorios' });
    }
    const nuevaNota = new Nota({ titulo, contenido });
    const notaGuardada = await nuevaNota.save();
    res.status(201).json(notaGuardada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la nota', error: error.message });
  }
};

module.exports = {
  obtenerNotas,
  crearNota
};

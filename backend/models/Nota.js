const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Nota', notaSchema);

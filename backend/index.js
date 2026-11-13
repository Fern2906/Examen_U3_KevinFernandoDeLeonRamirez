const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const notaRoutes = require('./routes/nota.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notas_rapidas';

app.use(cors());
app.use(express.json());

app.use('/api', notaRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB ');
    app.listen(PORT, () => {
      console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

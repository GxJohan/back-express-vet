const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clienteRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Veterinaria - Backend Express.js' });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
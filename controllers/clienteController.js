const Cliente = require('../models/Cliente');

let clientes = [
  new Cliente(1, 'Juan Pérez', 'juan@email.com', '123456789', 'Firulais'),
  new Cliente(2, 'María García', 'maria@email.com', '987654321', 'Michi')
];

let nextId = 3;

const getAllClientes = (req, res) => {
  res.json(clientes);
};

const getClienteById = (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  
  if (!cliente) {
    return res.status(404).json({ message: 'Cliente no encontrado' });
  }
  
  res.json(cliente);
};

const createCliente = (req, res) => {
  const { nombre, email, telefono, mascota } = req.body;
  
  if (!nombre || !email || !telefono || !mascota) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }
  
  const nuevoCliente = new Cliente(nextId++, nombre, email, telefono, mascota);
  clientes.push(nuevoCliente);
  
  res.status(201).json(nuevoCliente);
};

const updateCliente = (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, email, telefono, mascota } = req.body;
  
  const clienteIndex = clientes.findIndex(c => c.id === id);
  
  if (clienteIndex === -1) {
    return res.status(404).json({ message: 'Cliente no encontrado' });
  }
  
  clientes[clienteIndex] = { ...clientes[clienteIndex], nombre, email, telefono, mascota };
  
  res.json(clientes[clienteIndex]);
};

const deleteCliente = (req, res) => {
  const id = parseInt(req.params.id);
  const clienteIndex = clientes.findIndex(c => c.id === id);
  
  if (clienteIndex === -1) {
    return res.status(404).json({ message: 'Cliente no encontrado' });
  }
  
  clientes.splice(clienteIndex, 1);
  
  res.json({ message: 'Cliente eliminado correctamente' });
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente
};
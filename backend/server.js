const mysql = require('mysql2');
require('dotenv').config();
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const router = express.Router();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api', userRoutes);


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


// Função para criar um novo usuário
const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await db.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  return result;
};

// Função para buscar usuário por email
const getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

// Função para buscar todos os usuários
const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT id, name, email FROM users');
  return rows;
};

// Função para atualizar usuário
const updateUser = async (id, name, email) => {
  const [result] = await db.execute(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
  );
  return result;
};

// Função para deletar usuário
const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
  return result;
};

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Registro de novo usuário
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const user = await getUserByEmail(email);
    if (user) return res.status(400).json({ message: 'Email já cadastrado.' });
    
    await createUser(name, email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário.' });
  }
});

// Login de usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await getUserByEmail(email);
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta.' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
});

// Listar todos os usuários (rota protegida)
router.get('/users', authMiddleware, async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar usuários.' });
  }
});

// Atualizar usuário (rota protegida)
router.put('/users/:id', authMiddleware, async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    await updateUser(id, name, email);
    res.json({ message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
});

// Deletar usuário (rota protegida)
router.delete('/users/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    await deleteUser(id);
    res.json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário.' });
  }
});

// Inicializar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
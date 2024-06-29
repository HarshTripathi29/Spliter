const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const groupRoutes = require('./routes/groupRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Init middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/groups', authMiddleware, groupRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

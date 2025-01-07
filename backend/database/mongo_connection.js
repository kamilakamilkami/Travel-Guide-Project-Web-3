const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Загружаем переменные окружения из .env

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
};

// Экспортируем функцию
module.exports = connectDB;

const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');
const userRoutes = require('./routes/userRoutes')
const PORT = process.env.PORT || 5000;
const DB = process.env.DB_NAMEE

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(`mongodb://localhost:27017/${DB}`, {
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error('Error connecting to database:', error);
});


 app.use('/', userRoutes);


app.listen(PORT, ()=> console.log(`the server is running on port ${PORT}`))
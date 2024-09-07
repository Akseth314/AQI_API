const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const aqiRoutes = require('./routes/aqi_routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>This is my API</h1>`);
});


app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB', error));


app.use('/api/aqi', aqiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

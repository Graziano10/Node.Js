const express = require('express');
require('dotenv').config();
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan('dev'));

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.post('/planets', (req, res) => {
  const newPlanet = req.body;
  planets.push(newPlanet);
  res.status(201).json(newPlanet);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error 1001' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
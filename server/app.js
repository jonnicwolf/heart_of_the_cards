// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const users = require('./controllers/users_controller');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/users', users);

app.get('/', (req, res) => {
  res.status(200).json({data: 'Wamnin!'})
});

app.get('*', ((req, res) => {
  res.status(404).send("404 Page Not Found")
}));

// EXPORT
module.exports = app;

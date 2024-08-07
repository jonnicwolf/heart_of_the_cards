// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// CONTROLLERS
const usersR = require('./controllers/users_controller');
const historyR = require('./controllers/history_controller');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/users', usersR);
app.use('/history', historyR);

app.get('/', (req, res) => {
  res.status(200).send('Wamnin!');
});

app.get('*', ((req, res) => {
  res.status(404).send("404 Page Not Found");
}));

module.exports = app;

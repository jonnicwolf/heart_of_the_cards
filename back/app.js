// DEPENDENCIES
const cors = require('cors')
const express = require('express')

// CONFIGURATION
const app = express()
// const = require('')
// const = require('')

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('*', ((req, res) => {
  res.status(404).send("<h1>404 Page Not Found<h1/>")
}));

// EXPORT
module.exports = app;
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

// Initialize Firebase Admin
admin.initializeApp();

// Use your existing middlewares, routes, etc.
// Example:
const middleware = require('./middleWare');
const controllers = require('./controllers');
const services = require('./services');

// Apply middlewares
app.use(middleware);

// Define routes
app.use('/api', controllers);

// Define a simple route
app.get('/hello', (req, res) => {
  res.send('Hello from Express API!');
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);

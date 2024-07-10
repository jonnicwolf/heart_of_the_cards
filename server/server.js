// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 7777;

// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

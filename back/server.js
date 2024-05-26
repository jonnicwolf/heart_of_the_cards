// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require('dotenv').config();

const PORT = process.env.PORT || 7777;

const { authenticate } = require('./middleWares/authMiddleWare.js');

app.get('/api/secure-resource', authenticate, (req, res) => {
  res.json({ message: 'You are authorized to access this resource' });
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

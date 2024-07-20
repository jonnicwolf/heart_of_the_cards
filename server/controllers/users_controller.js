const express = require('express');
const {
  get_allUsers,
  get_userByID,
  get_userByEmail,
  post_newUser,
  put_updateUser,
  delete_userByEmail,
  delete_userByID
} = require('../queries/users');
const users = express.Router();

users.get('/', async (req, res) =>{
  const query = await get_allUsers();
  console.log(query, 'query')
  if (query) res.status(200).json({ success: true, data: { payload: [...query] }})
  else res.status(200).json({ success: false, data: { error: 'Database is empty'}});
});

users.get('/:id', async (req, res) =>{
  const { id } = req.params;
  const user = await get_userByID(id);

  if (user) res.status(200).json({ success: true, data: { payload: user }})
  else res.status(200).json({ success: false, data: { error: 'User not found. '}});
});

users.get('email/:email', async (req, res) =>{
  const { email } = req.params;
  const user = await get_userByEmail(email);

  if (user) res.status(200).json({ success: true, data: { payload: user }})
  else res.status(200).json({ success: false, data: { error: 'User not found. '}});
});

users.post('/', async (req, res) => {
  try {
    const newUser = await post_newUser(req.body);
    res.status(201).json({ success: true, data: { payload: newUser }});
  }
  catch (error) {
    res.status(400).json({ error: 'New User not created.' });
  };
});

users.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await put_updateUser(id, req.body)
    res.status(200).json({ success: true, data: { payload: user } });
  }
  catch (error) {
    res.status(400).json({ error: 'User not found. '});
  };
});

users.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await delete_userByID(id);
    if (user) res.status(200).json(user);
  }
  catch (error) {
    res.status(400).json({ error: 'An error occurred while deleting user. '});
  };
});

users.delete('email/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await delete_userByEmail(email);
    if (user) res.status(200).json(user);
  }
  catch (error) {
    res.status(400).json({ error: 'An error occurred while deleting user. '});
  };
});

/** 404 */
users.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found.' });
});

module.exports = users;

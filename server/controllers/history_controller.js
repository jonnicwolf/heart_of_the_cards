const express = require('express');
const {
  get_allHistoryByUser,
  get_last,
} = require('../queries/history');
const history = express.Router();

history.get('/:id', async(req,res) => {
  const { id } = res.params;
  try {
    const results = await get_allHistoryByUser(id, req.body);
    if (results) res.status(200).json({ success: true, data: { payload: [...results] }});
    else res.status(200).json({ success: false, data: 'No user history found.'})
  } catch (error) {
    console.error(error);
  };
});

history.get('/last/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await get_last(id);
    if (result) res.status(200).json({ success: true, data: { payload: [...result] }});
    else res.status(200).json({ success: false, data: 'No user history found' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = history;
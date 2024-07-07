const express = require('express');
const {
  get_allHistoryByUser,
  get_last,
} = require('../queries/history');
const history = express.Router();

history.get('/:id', async(req,res) => {
  const { id } = req.params;
  try {
    const results = await get_allHistoryByUser(id);
    if (results) return res.status(200).json({ success: true, data: { payload: [...results] }});
    else return res.status(200).json({ success: false, data: 'No user history found.'})
  } catch (error) {
    console.error(error)
  }
});

history.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await get_last(id);
    if (result) return res.status(200).json({ success: true, data: { payload: [...result] }});
    else return res.status(200).json({ success: false, data: 'No user history found' });
  } catch (error) {
    console.error(error);
  }
});
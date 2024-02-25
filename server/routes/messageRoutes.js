const express = require('express');
const router = express.Router();
const Message = require('../models/messages');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1});
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const { userId, username, message } = req.body;
  console.log(message);
  const createdAt = new Date(Date.now());
  try {
    const newMessage = new Message({ username, message, createdAt, userId });
    await newMessage.save();
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

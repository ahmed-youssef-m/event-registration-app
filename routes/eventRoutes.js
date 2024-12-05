const express = require('express');
const router = express.Router();
const { Event } = require('../models/model');

router.get('/events', async (req, res) => {
    const events = await Event.findAll();
    res.json(events);
});

router.post('/events', async (req, res) => {
    const { name, description, date, location } = req.body;
    const event = await Event.create({ name, description, date, location });
    res.json(event);
});

router.get('/events/:id', async (req, res) => {
    const event = await Event.findByPk(req.params.id);
    res.json(event);
});

module.exports = router;
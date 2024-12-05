const express = require('express');
const router = express.Router();
const { Registration } = require('../models/model');

router.post('/events/:eventId/register', async (req, res) => {
    const { userName, email } = req.body;
    const eventId = req.params.eventId;
    const registration = await Registration.create({ userName, email, EventId: eventId });
    res.json(registration);
});

router.get('/events/:eventId/registrations', async (req, res) => {
    const eventId = req.params.eventId;
    const registrations = await Registration.findAll({ where: { EventId: eventId } });
    res.json(registrations);
});

module.exports = router;
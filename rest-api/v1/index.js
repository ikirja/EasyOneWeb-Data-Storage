const router = require('express').Router();
const { events } = require('./controllers');

router.post('/events', events.getEvents);
router.post('/events', events.createEvents);

module.exports = router;
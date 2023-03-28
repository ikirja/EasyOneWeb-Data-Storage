const { DB } = require(`${__basedir}/lib`);

async function getEvents(req, res) {
  try {
    const createdEvents = await new DB().events.createEvents(req.body);
    res.status(200).json(createdEvents);
  } catch (error) {
    // TODO: ERROR HANDLER
    res.status(400).json({ error: true, message: 'Create Event' });
  }
}

module.exports = getEvents;
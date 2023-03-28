const { DB } = require(`${__basedir}/lib`);

async function getEvents(req, res) {
  try {
    const events = await new DB().events.getEvents();
    res.status(200).json(events);
  } catch (error) {
    // TODO: ERROR HANDLER
    res.status(400).json({ error: true, message: 'Get Events' });
  }
}

module.exports = getEvents;
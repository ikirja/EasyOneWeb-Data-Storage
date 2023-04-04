const { DB } = require(`${__basedir}/lib`);

async function getEvents(req, res) {
  const DATE_START = req.body.dateStart;
  const DATE_END = req.body.dateEnd;
  const gte = new Date(DATE_START);
  const lt = new Date(DATE_END);

  if (isNaN(gte) || isNaN(lt)) return res.status(422).json({ error: true, message: 'Check dates' });

  try {
    const events = await new DB().events.getEvents({
      createdAt: {
        $gte: gte,
        $lt: lt
      }
    });
    res.status(200).json(events);
  } catch (error) {
    // TODO: ERROR HANDLER
    res.status(400).json({ error: true, message: 'Get Events' });
  }
}

module.exports = getEvents;
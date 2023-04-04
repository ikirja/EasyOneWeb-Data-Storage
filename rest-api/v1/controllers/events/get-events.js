const { DB } = require(`${__basedir}/lib`);

async function getEvents(req, res) {
  const { DATE_START, DATE_END, clearEvents } = req.body.dateStart;
  const gte = new Date(DATE_START);
  const lt = new Date(DATE_END);

  if (isNaN(gte) || isNaN(lt)) return res.status(422).json({ error: true, message: 'Check dates' });

  const queryObject = {
    createdAt: {
      $gte: gte,
      $lt: lt
    }
  }

  try {
    const events = await new DB().events.getEvents(queryObject);
    res.status(200).json(events);

    if (clearEvents) await new DB().events.deleteEvents(queryObject);
  } catch (error) {
    // TODO: ERROR HANDLER
    res.status(400).json({ error: true, message: 'Get Events' });
  }
}

module.exports = getEvents;
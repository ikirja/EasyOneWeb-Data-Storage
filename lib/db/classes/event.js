const EventModel = require('../models/event');

class Event {
  #EventModel = EventModel;

  constructor () {}

  async getEvents(queryObject) {
    return await this.#EventModel.find(queryObject);
  }

  async createEvents(queryObject) {
    return await this.#EventModel.create(queryObject);
  }

  async deleteEvents(queryObject) {
    return await this.#EventModel.deleteMany(queryObject);
  }
}

module.exports = Event;
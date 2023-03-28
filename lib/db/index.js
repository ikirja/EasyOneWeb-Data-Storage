const Event = require('./classes/event');

class DB {
  constructor() {
    this.events = new Event();
  }
}

module.exports = DB;
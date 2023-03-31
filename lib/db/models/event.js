const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  ip: {
    type: String,
    default: ''
  },
  headers: {
    type: Object,
    default: {}
  },
  type: {
    type: String,
    enum: [ 'view', 'search', 'search-preview' ],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  identities: {
    type: Object,
    default: {}
  },
  cookies: {
    type: Object,
    default: {}
  },
  search: {
    type: Object,
    default: {}
  },
  params: {
    type: Object,
    default: {}
  }
});

module.exports = model('Event', eventSchema);
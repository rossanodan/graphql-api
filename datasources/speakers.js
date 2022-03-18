const { RESTDataSource } = require('apollo-datasource-rest');

const sessions = require('../data/sessions.json');

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/speakers';
  }

  async getSpeakers() {
    return await this.get('/');
  }

  async getSpeakerById(id) {
    return await this.get(`/${id}`);
  }
}

module.exports = SpeakerAPI;
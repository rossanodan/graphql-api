const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

const sessions = require('../data/sessions.json');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const filteredSessions = _.filter(sessions, { id: parseInt(id) });
    return filteredSessions[0];
  }

  getSessionsBySpeakerId(speakerId) {
    const sessionsBySpeakerId = sessions.filter(
      (session) => _.filter(session.speakers, { id: speakerId }).length > 0
    );
    return sessionsBySpeakerId;
  }

  toggleFavoriteSession(id) {
    const filteredSessions = _.filter(sessions, { id: parseInt(id) });
    filteredSessions[0].favorite = !filteredSessions[0].favorite;
    return filteredSessions[0];
  }

  addSession(session) {
    session.id = 12;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionAPI;
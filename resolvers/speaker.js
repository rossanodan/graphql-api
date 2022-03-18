const _ = require("lodash");

module.exports = {
  sessions: async (speaker, args, { dataSources }) => await dataSources.sessionAPI.getSessionsBySpeakerId(speaker.id),
};

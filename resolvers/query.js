module.exports = {
  sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(args),
  sessionById: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.getSessionById(id),
  speakers: (parent, args, { dataSources }, info) => dataSources.speakerAPI.getSpeakers(),
  speakerById: (parent, { id }, { dataSources }, info) => dataSources.speakerAPI.getSpeakerById(id),
};

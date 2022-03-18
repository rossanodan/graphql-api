module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.toggleFavoriteSession(id),
  addNewSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(session);
  },
};
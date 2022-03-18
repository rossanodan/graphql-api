const Query = require('./resolvers/query');
const Session = require('./resolvers/session');
const Speaker = require('./resolvers/speaker');
const Mutation = require('./resolvers/mutation');

module.exports = {
  Query,
  Session,
  Speaker,
  Mutation,
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol',
    SATURN: 'Saturn',
  },
  SessionOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return 'Error';
      }
      return 'Session';
    }
  },
};

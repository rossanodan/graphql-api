
const { ApolloError } = require("apollo-server");
const _ = require("lodash");

module.exports = {
  speakers: async (session, args, { dataSources }) => {
    try {
      const allSpeakers = await dataSources.speakerAPI.getSpeakers();
      const speakers = allSpeakers.filter(
        (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
      );
      return speakers;
    } catch(error) {
      return new ApolloError('Unable to retrieve speakers', 'SPEAKERAPIERROR', { token: 'uniquetoken' });
    }
  },
};

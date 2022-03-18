const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID,
      title: String,
      description: String,
      startsAt: String,
      endsAt: String,
      room: Room,
      day: String,
      format: String,
      track: String,
      level: String
    ): [Session]
    sessionById(id: ID!): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID!): Speaker
  }
  enum Room {
    EUROPA
    SOL
    SATURN
  }
  type Mutation {
    toggleFavoriteSession(id: ID!): Session
    addNewSession(session: SessionInput): Session
  }
  union SessionOrError = Session | Error
  type Error {
    code: String
    message: String
    token: String
  }
  input SessionInput {
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String,
    favorite: Boolean,
  }
  type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "No longer used")
    level: String,
    favorite: Boolean,
    speakers: [Speaker]
  }
  type Speaker {
    id: ID!,
    bio: String,
    name: String,
    sessions: [Session]
  }
`;
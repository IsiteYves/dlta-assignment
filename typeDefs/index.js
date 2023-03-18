const { gql } = require("apollo-server-express");

// Here I define the schema for the GraphQL API using the GraphQL schema language
const typeDefs = gql`
  scalar ObjectId

  type PopulationData {
    _id: ID
    Country: String
    Year: String
    Area: Float
    TotalPopulation: Int
  }

  type Message {
    message: String
  }

  type Query {
    getPopulationData: [PopulationData]
  }

  type Mutation {
    addPopulationData(
      Country: String!
      Year: String!
      Area: Float!
      TotalPopulation: Int!
    ): PopulationData
    updatePopulationData(
      Country: String!
      Year: String!
      Area: Float!
      TotalPopulation: Int!
    ): PopulationData
    deletePopulationData(_id: String!): Message
  }
`;

// I export the created Schema
module.exports = typeDefs;

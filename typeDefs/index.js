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

  type Query {
    getCountryData: [PopulationData]
  }

  type Mutation {
    addData(
      Country: String!
      Year: String!
      Area: Float!
      TotalPopulation: Int!
    ): PopulationData
    updateData(
      Country: String!
      Year: String!
      Area: Float!
      TotalPopulation: Int!
    ): PopulationData
    deleteData(_id: String!): PopulationData
  }
`;

// I export the created Schema
module.exports = typeDefs;

const { gql } = require("apollo-server-express");

// Here I define the schema for the GraphQL API using the GraphQL schema language
const typeDefs = gql`
  type PopulationData {
    Country: String
    Year: String
    Area: Float
    TotalPopulation: Int
  }

  type Query {
    populationData: [PopulationData]
  }

  type Mutation {
    addPopulationData(
      Country: String!
      Year: String!
      Area: Float!
      TotalPopulation: Int!
    ): PopulationData
  }
`;

// I export the created Schema
module.exports = typeDefs;

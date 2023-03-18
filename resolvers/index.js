const PopulationData = require("../models/PopulationData");

// Define resolvers for the population data schema
const resolvers = {
  Query: {
    // Define a resolver for the 'populationData' query, which returns all population data
    populationData: async () => {
      const data = await PopulationData.find();
      return data;
    },
  },
  Mutation: {
    addPopulationData: async (_, args) => {
      const { Country, Year, Area, TotalPopulation } = args;
      // Create a new population data object using the model and provided arguments
      const populationData = new PopulationData({
        Country,
        Year,
        Area,
        TotalPopulation,
      });
      await populationData.save();
      return populationData;
    },
  },
};

module.exports = resolvers;

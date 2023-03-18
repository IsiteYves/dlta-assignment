const PopulationData = require("../models/PopulationData");

// Define resolvers for the population data schema
const resolvers = {
  Query: {
    // Define a resolver for the 'populationData' query, which returns all population data
    getCountryData: async () => {
      const data = await PopulationData.find();
      return data;
    },
  },
  Mutation: {
    addData: async (_, args) => {
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
    updateData: async (_, args) => {
      const { Country, Year, Area, TotalPopulation } = args;
      const updatedPopulationData = await PopulationData.findOneAndUpdate(
        { Country, Year },
        { $set: { Area, TotalPopulation } },
        { new: true }
      );
      return updatedPopulationData;
    },
    deleteData: async (_, args) => {
      const { _id } = args;
      const result = await PopulationData.findByIdAndDelete(_id);
      if (result.deletedCount === 1) {
        return `Successfully deleted ${Country} ${Year} data`;
      } else {
        throw new Error(`Could not delete ${Country} ${Year} data`);
      }
    },
  },
};

module.exports = resolvers;

const PopulationData = require("../models/PopulationData");

// Define resolvers for the population data schema
const resolvers = {
  Query: {
    // Define a resolver for the 'populationData' query, which returns all population data
    getPopulationData: async () => {
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
    updatePopulationData: async (_, args) => {
      const { _id, Country, Year, Area, TotalPopulation } = args;
      const updatedPopulationData = await PopulationData.findOneAndUpdate(
        { _id },
        { $set: { Country, Year, Area, TotalPopulation } },
        { new: true }
      );
      return updatedPopulationData;
    },
    deletePopulationData: async (_, args) => {
      try {
        const { _id } = args;
        const exists = await PopulationData.findById(_id);
        if (exists) {
          await PopulationData.findByIdAndDelete(_id);
          return {
            message: `Successfully deleted the data for document with _id '${_id}'`,
          };
        } else {
          return { message: `No document with _id '${_id}'.` };
        }
      } catch (e) {
        return { message: e?.message };
      }
    },
  },
};

module.exports = resolvers;

const PopulationData = require("../models/PopulationData");

// Define resolvers for the population data schema
const resolvers = {
  Query: {
    // Define a resolver for the 'populationData' query, which returns all population data
    getPopulationData: async () => {
      try {
        const data = await PopulationData.find();
        return data;
      } catch (e) {
        return { message: e?.message };
      }
    },
  },
  Mutation: {
    addPopulationData: async (_, args) => {
      try {
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
      } catch (e) {
        return { message: e?.message };
      }
    },
    updatePopulationData: async (_, args) => {
      try {
        const { _id, Country, Year, Area, TotalPopulation } = args;
        const exists = await PopulationData.findById(_id);
        if (!exists) return { message: `No document with _id '${_id}'.` };
        await PopulationData.findOneAndUpdate(
          { _id },
          { $set: { Country, Year, Area, TotalPopulation } },
          { new: true }
        );
        return {
          message: `Successfully update the data for document with _id '${_id}'`,
        };
      } catch (e) {
        return { message: e?.message };
      }
    },
    deletePopulationData: async (_, args) => {
      try {
        const { _id } = args;
        const exists = await PopulationData.findById(_id);
        if (!exists) return { message: `No document with _id '${_id}'.` };
        await PopulationData.findByIdAndDelete(_id);
        return {
          message: `Successfully deleted the data for document with _id '${_id}'`,
        };
      } catch (e) {
        return { message: e?.message };
      }
    },
  },
};

module.exports = resolvers;

const mongoose = require("mongoose");

// Define the population data schema using the Mongoose schema constructor
const populationDataSchema = new mongoose.Schema({
  Country: String,
  Year: String,
  Area: Number,
  TotalPopulation: Number,
});

// create a Mongoose model based on the schema
const PopulationData = mongoose.model("PopulationData", populationDataSchema);

// Export the model for use in other parts of the application
module.exports = PopulationData;

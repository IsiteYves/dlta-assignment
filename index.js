const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// Import typeDefs and resolvers
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();

// Create Apollo server with typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo middleware to Express app
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas and start server
mongoose
  .connect(
    "mongodb+srv://EveryOne:esyvprog1@pjs.qz9je.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`✅Connected to countries' database`);
    app.listen(PORT, () => console.log(`⚡Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });

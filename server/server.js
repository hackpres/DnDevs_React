import express from 'express';
import { ApolloServer } from 'apollo-server-express';
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');
import http from 'http';
import { typeDefs, resolvers } from './schemas/index.js';
import db from './config/connection.js';
import { authMiddleware } from './utils/auth.js';

const PORT = process.env.PORT || 3001;

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  // Below: our httpServer handles incoming requests to our express app.
  // We tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);
  // same ApolloServer initialization as before, plus the drain plugin for our httpServer
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    // Below: https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ]
  });
  // we need to start our server before we apply express as a middleware
  // we can apply any middleware to express before we add it to the apollo server.
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
  });
  // Modified server startup
  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
};

db.once("open", async () => {
  // Call the async function to start the server
  await startApolloServer(typeDefs, resolvers);
});


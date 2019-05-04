const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { gqlTypeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

const typeDefs = gql(gqlTypeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

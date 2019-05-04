const { ApolloServer, gql } = require('apollo-server');
const { gqlTypeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

const typeDefs = gql(gqlTypeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);  
})
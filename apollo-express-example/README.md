## Use Apollo Server with Express.js
This is a good example but it's out-dated:
https://scotch.io/tutorials/implementing-graphql-using-apollo-on-an-express-server

It uses the graphql-server-express package, which is now called apollo-server-express:

"The graphql-server-express package is now called apollo-server-express. We are continuing to release matching versions of the package under the old name, but we recommend you switch to using the new name. The API is identical."

Good reference: https://www.apollographql.com/docs/apollo-server/servers/express.html

First, I create the project:
```
cd graphql-server-example/apollo-express-example
npm init -y
npm install --save apollo-server-express express graphql
```

The type definitions and resolvers are exactly the same as before. The only difference is using apollo-server-express instead of apollo-server to put everything together.

graphql-server-example/apollo-express-example/index.js:
```
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const { gqlTypeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

const typeDefs = gql(gqlTypeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
```

Now I can run: `node index.js`
Open a browser and navigate to http://localhost:4000/graphql


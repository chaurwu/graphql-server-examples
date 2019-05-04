## create the project
```
cd graphql-server-example/apollo-server-example
npm init -y
npm install --save apollo-server graphql
```

## type definitions
First, I write the type definitions.

graphql-server-example/apollo-server-example/src/schema.js:
```
const gqlTypeDefs = `
  type Todo {
    text: String
    done: Boolean
  }

  type Query {
    todos: [Todo]
  }
`;

module.exports = { gqlTypeDefs };
```

Note that I need to define the Query type, which serves as the entry point of my GraphQL queries.

## resolvers
Next, I write the resolvers.

graphql-server-example/apollo-server-example/src/resolvers.js:
```
const todos = [
  {
    text: 'pick up package',
    done: true,
  },
  {
    text: 'reschedule appointment',
    done: false,
  },
];

const resolvers = {
  Query: {
    todos: () => todos,
  },
};

module.exports = { resolvers };
```

## apollo server
Lastly, I use apollo server to put everything together.

graphql-server-example/apollo-server-example/index.js:
```
const { ApolloServer, gql } = require('apollo-server');
const { gqlTypeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

const typeDefs = gql(gqlTypeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);  
})
```

Now I can run: `node index.js`
Open a browser and navigate to localhost:4000

Enter a query like the following:
```
{
  todos {
    text
    done
  }
}
```

And I see the query results!

Good reference: https://www.apollographql.com/docs/apollo-server/servers/express.html

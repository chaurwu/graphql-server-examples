
const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = GraphQL;
 
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
 
const PostType = new GraphQL.GraphQLObjectType({
  name: 'Book',
  description: 'Book type.',
  fields: () => ({
    title: {
      type: GraphQLString,
      description: 'Title of the book',
    },
    author: {
      type: GraphQLString,
      description: 'Author of the book',
    }
  }) 
});

const query = {
  index() {
    return {
        type: new GraphQLList(PostType),
        description: 'This will return all the posts we find in the given subreddit.',
        args: {
            subreddit: {
                type: GraphQLString,
                description: 'Please enter subreddit name',
            }
        },
        resolve(parent, args, context, info) {
            return PostResolver.index(args);
        }
    }
  }
};

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);  
})
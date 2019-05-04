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

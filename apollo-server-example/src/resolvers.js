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

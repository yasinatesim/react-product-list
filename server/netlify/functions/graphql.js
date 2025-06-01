const { createApolloServer } = require('../../src/graphqlServer');

const server = createApolloServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
    methods: 'GET,POST,OPTIONS',
  },
});

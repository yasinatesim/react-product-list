const { createApolloServer } = require('../../../src/graphqlServer');

const server = createApolloServer();

exports.handler = server.createHandler();

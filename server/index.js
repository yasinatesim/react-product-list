const { ApolloServer, gql } = require('apollo-server');

// Data
const { products } = require('./src/data/products.json');

const typeDefs = gql`
  type Product {
    title: String
    author: String
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

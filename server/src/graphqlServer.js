const { ApolloServer, gql } = require('apollo-server-lambda');
const { products } = require('./data/products.json');
const { cargo } = require('./data/cargo.json');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    image: String!
    price: Float!
    url: String!
    liked: Boolean!
    cargo: Cargo!
  }

  type Cargo {
    type: Int!
    name: String!
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
  Product: {
    cargo: (parent) => {
      return cargo.find((item) => item.type === parent.cargo);
    },
  },
};

function createApolloServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

module.exports = { createApolloServer };

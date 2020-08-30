const { ApolloServer, gql } = require('apollo-server');

// Data
const { products } = require('./src/data/products.json');
const { cargo } = require('./src/data/cargo.json');

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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

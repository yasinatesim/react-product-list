import { ApolloClient, InMemoryCache } from '@apollo/client';
import dotenv from 'dotenv';

// Config
dotenv.config();

const client = new ApolloClient({
  uri: process.env.SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;

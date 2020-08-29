import React from 'react';
import ReactDOM from 'react-dom';

// Utilities
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Componnets
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

// Utilities
import { ApolloProvider } from '@apollo/client';
import { Client } from './utils';

// Componnets
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';

import { useQuery, gql } from '@apollo/client';

const PRODUCTS = gql`
  query {
    products {
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.products.map(({ title }) => (
        <div key={title}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

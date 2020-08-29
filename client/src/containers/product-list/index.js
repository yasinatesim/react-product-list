import React from 'react';

import ProductItem from './components/product-item';

// import { useQuery, gql } from '@apollo/client';

// const PRODUCTS = gql`
//   query {
//     products {
//       title
//     }
//   }
// `;

function ProductList() {
  // const { loading, error, data } = useQuery(PRODUCTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div>
      {/* {data.products.map(({ title }) => ( */}
      <div><ProductItem /></div>
      {/* ))} */}
    </div>
  );
}

export default ProductList;


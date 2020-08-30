import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

const ProductContext = createContext({});

const PRODUCTS = gql`
  query {
    products {
      id
      name
      image
      price
      url
      cargo {
        type
        name
      }
    }
  }
`;

export const ProductProvider = ({ children }) => {
  const { loading, data } = useQuery(PRODUCTS);

  return (
    <ProductContext.Provider value={loading || !data.products ? null : data.products}>
      {children}
    </ProductContext.Provider>
  );
};
export const ProductConsumer = ProductContext.Consumer;
export default ProductContext;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

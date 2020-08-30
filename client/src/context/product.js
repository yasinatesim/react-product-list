import React, { createContext, useState, useEffect } from 'react';
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
      liked
      cargo {
        type
        name
      }
    }
  }
`;

export const ProductProvider = ({ children }) => {
  const { loading, data } = useQuery(PRODUCTS);
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    if (loading || !data.products) {
      setProducts(null);
    } else {
      setProducts(data.products);
    }
  }, [data]);

  const toggleLike = ({ productId }) => {
    const _products = JSON.parse(JSON.stringify(products));
    _products[productId].liked = !_products[productId].liked;
    setProducts(_products);

    const newlikedProducts =_products.filter((product) => product.liked);
    setLikedProducts(newlikedProducts);
  };

  const value = { products, setProducts, toggleLike, likedProducts, setLikedProducts };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
export default ProductContext;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

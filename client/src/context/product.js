/* istanbul ignore file */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

const ProductContext = createContext({});

/**
 * Queries
 */
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

/**
 * This function contains the product state
 * @param {Object} children - Contains the main component
 */
export const ProductProvider = ({ children }) => {
  const { loading, data } = useQuery(PRODUCTS);
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    if (loading || !data.products) {
      setProducts([]);
    } else {
      setProducts(data.products);
    }
  }, [loading, data]);

  /**
   * Like button trigger in the product item component
   * @param {String} productId - This is clicked product id
   */
  const toggleLike = ({ productId }) => {
    const _products = JSON.parse(JSON.stringify(products));
    const productIndex = _products.findIndex((product) => product.id === productId);

    // Change liked status
    _products[productIndex].liked = !_products[productIndex].liked;

    // Set the all products
    setProducts(_products);

    // Liked Products Area
    const newlikedProducts = _products.filter((product) => product.liked);
    setLikedProducts(newlikedProducts);
  };

  // Export the values for uses other components
  const value = { products, setProducts, toggleLike, likedProducts, setLikedProducts };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
export default ProductContext;

/**
 * Props
 * ------------
 */
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

// icons
import { HeartIcon } from '../../icons';

// Context
import ProductContext from '../../context/product';

// Components
import Title from '../../components/title';
import Button from '../../components/button';

import ProductItem from './components/product-item';

/**
 * This function is product list container
 */
function ProductList() {
  const { products, likedProducts, setProducts, setLikedProducts } = useContext(ProductContext);
  const [showLikedProducts, setShowLikedProducts] = useState(false);

  /**
   * Show / Hide liked products area trigger
   */
  const handleToggleLikedProducts = () => {
    // Toggle liked items
    setShowLikedProducts(!showLikedProducts);

    // Click the liked button
    if (showLikedProducts) {
      setLikedProducts([]);

      const _products = JSON.parse(JSON.stringify(products));
      for (let index = 0; index < _products.length; index += 1) {
        const product = _products[index];
        product.liked = false;
      }
      setProducts(_products);
    }
  };

  /**
   * This function id product item component
   * @param {Boolean} condition - This is render condition
   * @param {Array} array       - This is mapped array
   * @param {String} array      - This is not found message
   */
  const renderProductItem = ({ condition, array, message }) => {
    return condition
      ? array.map(({ id, name, image, price, url, cargo, liked }) => (
          <ProductItem
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            url={url}
            cargoType={cargo.type}
            cargoName={cargo.name}
            liked={liked}
          />
        ))
      : message;
  };

/**
 * Liked Products Area
 */
  const renderLikedProducts = () => {
    return renderProductItem({
      condition: likedProducts.length > 0,
      array: likedProducts,
      message: 'Ürün beğenmediniz',
    });
  };

  /**
   * Main Products Area
   */
  const renderMainProducts = () => {
    return renderProductItem({
      condition: products !== null,
      array: products,
      message: 'Loading'
    });
  };

  return (
    <div className="container">
      <Header>
        <Counter>
          <HeartIcon fill="#3498db" />
          <span>
            <strong>{likedProducts.length}</strong> ürün
          </span>
        </Counter>

        <Title>İlginizi Çekebilecek Ürünler</Title>

        <Filter showLikedProducts={showLikedProducts}>
          <Button onClick={handleToggleLikedProducts}>Beğendiklerim</Button>
        </Filter>
      </Header>

      <Container hasLikedProducts={likedProducts.length > 0} showLikedProducts={showLikedProducts}>
        {showLikedProducts ? renderLikedProducts() : renderMainProducts()}
      </Container>
    </div>
  );
}

/**
 * Styles
 * ------------
 */
const Container = styled.div`
  display: grid;
  gap: 16px;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);

  ${({ showLikedProducts, hasLikedProducts }) =>
    showLikedProducts &&
    !hasLikedProducts &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`;

const Header = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  align-items: center;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'title title title'
    'counter counter filter';

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
    grid-template-areas: 'counter title filter';
  }
`;

const Filter = styled.div`
  margin-left: auto;
  grid-area: filter;

  button {
    border-radius: 4px;
    font-weight: 700;

    ${({ showLikedProducts }) =>
      showLikedProducts &&
      css`
        border: 2px solid #3498db;
        color: #3498db;
      `}
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  grid-area: counter;
  span {
    margin-left: 8px;
  }
`;

export default ProductList;

import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

// Utilities
import { Container, Row, Column } from '../../styles/grid';

// icons
import { HeartIcon } from '../../icons';

// Context
import ProductContext from '../../context/product';

// Components
import ProductItem from './components/product-item';

function ProductList() {
  const { products, likedProducts, setProducts, setLikedProducts } = useContext(ProductContext);
  const [showLikedProducts, setShowLikedProducts] = useState(false);

  const handleToggleLikedProducts = () => {
    setShowLikedProducts(!showLikedProducts);

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

  const renderLikedProducts = () => {
    return likedProducts.length > 0 ? likedProducts.map(({ id, name, image, price, url, cargo, liked }) => (
      <Column key={id}>
        <ProductItem
          name={name}
          image={image}
          price={price}
          url={url}
          cargoType={cargo.type}
          cargoName={cargo.name}
          liked={liked}
          id={id}
        />
      </Column>
    )) : 'Ürün beğenmediniz.';
  };

  const renderProducts = () => {
    return products !== null
      ? products.map(({ id, name, image, price, url, cargo, liked }) => (
          <Column key={id}>
            <ProductItem
              name={name}
              image={image}
              price={price}
              url={url}
              cargoType={cargo.type}
              cargoName={cargo.name}
              liked={liked}
              id={id}
            />
          </Column>
        ))
      : 'loading';
  };

  return (
    <Container>
      <br/>
      <Row>
        <Column>
          <Counter>
            <HeartIcon fill="#3498db" />
            <span>
              <strong>{likedProducts.length}</strong> ürün
            </span>
          </Counter>
        </Column>
        <Column>
          <Button showLikedProducts={showLikedProducts} type="button" onClick={handleToggleLikedProducts}>
            Beğendiklerim
          </Button>
        </Column>
      </Row>
      <br/>

      <Row>{showLikedProducts ? renderLikedProducts() : renderProducts()}</Row>
    </Container>
  );
}

/**
 * Styles
 * ------------
 */
const Button = styled.button`
  border-radius: 4px;

  ${({ showLikedProducts }) =>
    showLikedProducts &&
    css`
      border: 2px solid #3498db;
      color: #3498db;
    `}
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 4px;
  }
`;

export default ProductList;

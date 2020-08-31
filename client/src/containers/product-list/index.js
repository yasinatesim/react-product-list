import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

// Utilities
import { Container, Column } from '../../styles/grid';

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
    return likedProducts.length > 0
      ? likedProducts.map(({ id, name, image, price, url, cargo, liked }) => (
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
      : 'Ürün beğenmediniz.';
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
      <Header>
        <Counter>
          <HeartIcon fill="#3498db" />
          <span>
            <strong>{likedProducts.length}</strong> ürün
          </span>
        </Counter>
        <Title>
          <h3>İlginizi Çekebilecek Ürünler</h3>
        </Title>
        <Filter>
          <button showLikedProducts={showLikedProducts} type="button" onClick={handleToggleLikedProducts}>
            Beğendiklerim
          </button>
        </Filter>
      </Header>

      <Row hasLikedProducts={likedProducts.length > 0} showLikedProducts={showLikedProducts}>{showLikedProducts ? renderLikedProducts() : renderProducts()}</Row>
    </Container>
  );
}

/**
 * Styles
 * ------------
 */
const Row = styled.div`
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
  grid-template-areas:  'title title title'
                        'counter counter filter';

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
    grid-template-areas: 'counter title filter';
  }
`;

const Title = styled.div`
grid-area: title;
margin-bottom: 24px;
  h3 {
    position: relative;
    text-align: center;

    &::after {
      content: '';
      width: 60px;
      height: 2px;
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 8px;
      background-color: #000;
    }
  }

  @media (min-width: 576px) {
    margin-bottom: 0;
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

  @media (min-width: 576px) {
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  grid-area: counter;
  span {
    margin-left: 8px;
  }

  @media (min-width: 576px) {
  }
`;

export default ProductList;

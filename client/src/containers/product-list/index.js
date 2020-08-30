import React, { useContext } from 'react';

// Utilities
import { Container, Row, Column } from '../../styles/grid';

// Context
import ProductContext from '../../context/product';

// Components
import ProductItem from './components/product-item';

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Row>
        {products !== null
          ? products.map(({ id, name, image, price, url, cargo, liked }, index) => (
              <Column key={id}>
                <ProductItem
                  name={name}
                  image={image}
                  price={price}
                  url={url}
                  cargoType={cargo.type}
                  cargoName={cargo.name}
                  liked={liked}
                  id={index}
                />
              </Column>
            ))
          : 'loading'}
      </Row>
    </Container>
  );
}

export default ProductList;

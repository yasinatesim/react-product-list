import React from 'react';

import { useQuery, gql } from '@apollo/client';

// Utilities
import { Container, Row, Column } from '../../styles/grid';

// Components
import ProductItem from './components/product-item';

const PRODUCTS = gql`
  query {
    products {
      name
      image,
      price,
      url
      cargo {
        type
        name
      }
    }
  }
`;

function ProductList() {
  const {
    loading,
    error,
    data,
  } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Row>
        {data.products.map(({ id, name, image, price, url, cargo }) => (
          <Column key={id}>
            <ProductItem name={name} image={image} price={price} url={url} cargoType={cargo.type} cargoName={cargo.name} />
          </Column>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;

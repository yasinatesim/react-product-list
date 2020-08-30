import React, { useContext, useState } from 'react';

// Utilities
import { Container, Row, Column } from '../../styles/grid';

// Context
import ProductContext from '../../context/product';

// Components
import ProductItem from './components/product-item';

function ProductList() {
  const { products, likedProducts } = useContext(ProductContext);
  const [showLikedProducts, setLikedProducts] = useState(false);

  const handleToggleLikedProducts = () => {
    setLikedProducts(!showLikedProducts);
  };

  const renderLikedProducts = () => {
    return likedProducts.map(({ id, name, image, price, url, cargo, liked }, index) => (
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
    ));
  };


  const renderProducts = () => {
    return products !== null ? products.map(({ id, name, image, price, url, cargo, liked }, index) => (
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
      : 'loading';
  };

  return (
    <Container>
      <div>{likedProducts.length} ürün beğendin</div>

      <br />
      <br />
      <br />
      <br />
      <button type="button" onClick={handleToggleLikedProducts}>Beğendiklerim</button>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row>{showLikedProducts ? renderLikedProducts() : renderProducts()}</Row>
    </Container>
  );
}

export default ProductList;

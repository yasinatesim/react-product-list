import React from 'react';

import styled from 'styled-components';

// Icons
import { CargoIcon } from '../../../icons';

// Components
import LikeButton from '../../../components/like-button';


function ProductItem({image,name, price, url, cargoType, cargoName}) {
  return (
    <Item href={url}>
      <LikeButton inCard />
      <img src={image} alt={name} />
      <Bottom>
        <Title>{name}</Title>
        <Price>{price} TL</Price>
        <span>
          {cargoType !== 3 && <CargoIcon width="24" fill="#f00" />}
          {cargoName}
        </span>
      </Bottom>
    </Item>
  );
}

const Item = styled.a`
  border: 1px solid #d7dddb;
  border-radius: 4px;
  position: relative;
  display: inline-block;
`;

const Bottom = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #000;
  margin-bottom: 12px;
  font-weight: 700;
  position: relative;

`;

const Price = styled.p`
  font-size: 16px;
  color: #f00;
  font-weight: 700;
`;

export default ProductItem;

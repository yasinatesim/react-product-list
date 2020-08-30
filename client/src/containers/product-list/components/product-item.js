import React from 'react';

import styled, { css } from 'styled-components';

// Utilities
import { priceFormat } from '../../../utils';

// Icons
import { CargoIcon } from '../../../icons';

// Components
import LikeButton from '../../../components/like-button';

function ProductItem({ image, name, price, url, cargoType, cargoName }) {
  return (
    <Item href={url}>
      <LikeButton inCard />
      <img src={image} alt={name} />
      <Bottom>
        <Title>
          <span>{name}</span>
        </Title>
        <Price>{priceFormat(price)}</Price>
        <Cargo>
          <Icon>{cargoType !== 3 && <CargoIcon width="24" fill="#f00" />}</Icon>
          <Text cargoType={cargoType}>{cargoName}</Text>
        </Cargo>
      </Bottom>
    </Item>
  );
}

/**
 * Styles
 * ------------
 */
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
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Price = styled.p`
  font-size: 16px;
  color: #f00;
  font-weight: 700;
`;

const Icon = styled.span`
  min-height: 30px;
  display: inline-block;
`;

const Cargo = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.span`
  margin-left: 4px;

  ${({ cargoType }) =>
    cargoType === 3 &&
    css`
      margin-left: 0;
    `}
    @media (min-width: 768px) and (max-width: 992px) {
      margin-left: 0;
    }
`;

export default ProductItem;

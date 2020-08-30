import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Utilities
import { priceFormat } from '../../../utils';

// Icons
import { CargoIcon } from '../../../icons';

// Components
import LikeButton from '../../../components/like-button';

function ProductItem({ id, image, name, price, url, cargoType, cargoName, liked }) {
  return (
    <Item>
      <LikeButton inCard liked={liked} productId={id} />
      <Content href={url}>
        <img src={image} alt={name} />
        <Bottom>
          <Title>
            <span>{name}</span>
          </Title>
          <Price>{priceFormat(price)}</Price>
          <Cargo>
            <Icon>{cargoType !== 3 && <CargoIcon width="22" height="22" fill="#3498db" />}</Icon>
            <Text cargoType={cargoType}>{cargoName}</Text>
          </Cargo>
        </Bottom>
      </Content>
    </Item>
  );
}

/**
 * Styles
 * ------------
 */

const Item = styled.div`
  position: relative;
`;

const Content = styled.a`
  border: 1px solid #d7dddb;
  border-radius: 4px;
  display: inline-block;

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const Bottom = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
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
  color: #3498db;
  font-weight: 700;
`;

const Icon = styled.span`
  min-height: 30px;
  display: flex;
  align-items: center;
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

ProductItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  cargoType: PropTypes.number,
  cargoName: PropTypes.string,
  liked: PropTypes.bool,
};

export default ProductItem;

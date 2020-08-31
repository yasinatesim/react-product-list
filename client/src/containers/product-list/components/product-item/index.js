import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Utilities
import { priceFormat } from '../../../../utils';

// Icons
import { CargoIcon } from '../../../../icons';

// Components
import LikeButton from '../like-button';

/**
 * This function is product item component
 * @params {String} id         - This is product id field
 * @params {String} image      - This is product iamge field
 * @params {String} name       - This is product name field
 * @params {Number} price      - This is product price field
 * @params {String} url        - This is product url field
 * @params {Number} cargoType  - This is product cargo.type field
 * @params {String} cargoName  - This is product cargo.name field
 * @params {Boolean} liked     - This is product liked field
 */
function ProductItem({ id, image, name, price, url, cargoType, cargoName, liked }) {
  return (
    <Item>
      <LikeButton liked={liked} productId={id} />
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
  border: 1px solid #d7dddb;
  transition: all 500ms;
  grid-column: span 12;

  &:hover {
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    border-color: transparent;
  }

  @media (min-width: 576px) {
    grid-column: span 6;
  }

  @media (min-width: 768px) {
    grid-column: span 4;
  }

  @media (min-width: 1200px) {
    grid-column: span 3;
  }
`;

const Content = styled.a`
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

/**
 * Props
 * ------------
 */
ProductItem.propTypes = {
  id: PropTypes.any,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  cargoType: PropTypes.any,
  cargoName: PropTypes.string,
  liked: PropTypes.bool,
};

export default ProductItem;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Context
import ProductContext from '../../../../context/product';

// icons
import { HeartIcon } from '../../../../icons';

function LikeButton({ liked, productId }) {
  const { toggleLike } = useContext(ProductContext);

  return (
    <Button onClick={() => toggleLike({ productId })} liked={liked}>
      <HeartIcon fill="#ccc" />
    </Button>
  );
}

/**
 * Styles
 * ------------
 */
const Button = styled.button`
  border-radius: 100%;
  color: #ccc;
  display: flex;
  font-size: 1rem;
  transition: all 500ms;
  border: 2px solid #ccc;
  position: absolute;
  top: 16px;
  right: 16px;

  svg {
    transition: all 500ms;
  }

  &:hover {
    border-color: #000;
    svg {
      fill: #000;
    }
  }

  ${({ liked }) =>
    liked &&
    css`
      border-color: #e74c3c;
      svg {
        fill: #e74c3c;
      }

      &:hover {
        border-color: #c0392b;
        svg {
          fill: #c0392b;
        }
      }
    `}
`;

/**
 * Props
 * ------------
 */
LikeButton.propTypes = {
  liked: PropTypes.bool,
  productId: PropTypes.any,
};

export default LikeButton;

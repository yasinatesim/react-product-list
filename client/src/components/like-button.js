import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

// icons
import { HeartIcon } from '../icons';

function LikeButton({ liked, inCard }) {
  return (
    <Button liked={liked} inCard={inCard}>
      <HeartIcon fill="#727e7c" />
    </Button>
  );
}

/**
 * Styles
 * ------------
 */
const Button = styled.button`
  outline: 0;
  background-color: #fff;
  padding: 8px;
  border-radius: 100%;
  color: #727e7c;
  display: flex;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;
  transition: all 500ms;
  border: 2px solid #727e7c;

  svg {
    transition: all 500ms;
  }

  ${({ liked }) =>
    liked &&
    css`
      svg {
        fill: #3498db;
      }
    `}

  ${({ inCard }) =>
    inCard &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
    `}

  &:hover {
    border-color: #000;
    svg {
      fill: #000;
    }
  }
`;

LikeButton.propTypes = {
  liked: PropTypes.bool,
  inCard: PropTypes.bool,
};

export default LikeButton;

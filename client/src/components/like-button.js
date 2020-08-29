import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

function LikeButton({ liked, inCard }) {
  return (
    <Button liked={liked} inCard={inCard}>
      <Icon />
    </Button>
  );
}

/**
 * Styles
 * ------------
 */
const Icon = styled.span`
  width: 18px;
  height: 16px;
  display: inline-block;
  font-size: 1.5rem;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMSAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMTAxIDQuNDE3UzguODk1LjIwNyA1LjExMS4yMDdjLTQuNDY1IDAtMTAuOTY3IDYuODQ2IDUuMDgyIDE3LjU5MkMyNS4yMzcgNy4wMyAxOS42NjUuMjAyIDE1LjUwMS4yMDJjLTQuMTYyIDAtNS40IDQuMjE1LTUuNCA0LjIxNXoiIGZpbGw9IiNGRjZFNkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')
    no-repeat center;
  background-size: 100%;
`;

const Button = styled.button`
  outline: 0;
  border: 2px solid #c7c7c7;
  background-color: #fff;
  padding: 8px;
  border-radius: 100%;
  color: #878787;
  display: flex;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 500ms;

  ${({ liked }) =>
    liked &&
    css`
      color: #ff6e6f;
      border-color: currentColor;
      filter: grayscale(0);
    `}

  ${({ inCard }) =>
    inCard &&
    css`
      position: absolute;
      top: 16px;
      right: 16px;
    `}

  &:hover {
    border-color: #c97f7f;
    filter: grayscale(50%);
  }
`;

LikeButton.propTypes = {
  liked: PropTypes.bool,
  inCard: PropTypes.bool
};

export default LikeButton;

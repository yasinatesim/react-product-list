import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

function ProductItem({}) {
  return <Button>test</Button>;
}

ProductItem.propTypes = {};

export default ProductItem;

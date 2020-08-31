import React from 'react';
import PropTypes from 'prop-types';

/**
 * This function is basic button component
 * @param {Object} children   - This is text in the button
 * @param {Function} onClick  - This is onClick trigger
 */
function Button({ children, onClick = () => {} }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

/**
 * Props
 * ------------
 */
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;

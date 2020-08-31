import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * This function is basic title component
 * @param {Object} children - This is text in the Title component
 */
function Title({children}) {
  return (
    <StyledTitle>
      <h3>{children}</h3>
    </StyledTitle>
  );
}


/**
 * Styles
 * ------------
 */
const StyledTitle = styled.div`
  grid-area: title;
  margin-bottom: 24px;
  h3 {
    position: relative;
    text-align: center;

    &::after {
      content: '';
      width: 60px;
      height: 2px;
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 8px;
      background-color: #000;
    }
  }

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

/**
 * Props
 * ------------
 */
Title.propTypes = {
  children: PropTypes.node
};


export default Title;

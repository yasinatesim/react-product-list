import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1170px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px
`;

export const Column = styled.div`
  grid-column: span 3;
`;


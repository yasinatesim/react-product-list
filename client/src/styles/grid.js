import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
`;

export const Column = styled.div`
  grid-column: span 12;

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

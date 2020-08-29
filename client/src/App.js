import React from 'react';

import GlobalStyle from './styles/global';

import ProductList from './containers/product-list';

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductList />
    </>
  );
}

export default App;

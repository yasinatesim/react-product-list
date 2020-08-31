import React from 'react';

import { ProductProvider } from './context/product';

import { GlobalStyle } from './styles';

import ProductList from './containers/product-list';

function App() {
  return (
    <ProductProvider>
      <GlobalStyle />
      <ProductList />
    </ProductProvider>
  );
}

export default App;

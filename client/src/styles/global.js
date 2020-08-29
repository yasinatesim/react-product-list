import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.4rem;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-width: 100%;
    display: block;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;

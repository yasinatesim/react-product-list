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
    color: #53605e;
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

  button {
    outline: 0;
    background-color: #fff;
    padding: 8px;
    user-select: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;

/* istanbul ignore file */
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

  .container {
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
  }
`;

export default GlobalStyle;

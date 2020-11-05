import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box
}

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #222;
    background: #E6F1F2;
    margin: 0;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 1.5em;
    line-height: 1em;
    margin: 0;
    font-weight: 800;
      }

  h4 {
    font-size: 2em;
    color: #E6F1F2;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

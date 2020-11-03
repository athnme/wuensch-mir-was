import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  box-sizing:border-box
}

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;

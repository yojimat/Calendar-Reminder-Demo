import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --color-background: #fff;
    --color-cyanBlue: #2f74b5;
    --color-lightGray: #a5a5a5;
    --color-lightWhiteBlue: #f2f2f2;
    --color-lightBlue: #0fb5e9;
    --border-color: #969696;
    --cell-hover-color: #b9b6b6;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    line-height: 1.15;
    background: var(--color-background);
  }
  *, button, input {
    font-size: 20px;
    font-family: Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
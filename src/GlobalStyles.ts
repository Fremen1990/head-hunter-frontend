import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    background-color: #222224;
  }

  #root {
    margin: 0 auto;
  }
`
export default GlobalStyles

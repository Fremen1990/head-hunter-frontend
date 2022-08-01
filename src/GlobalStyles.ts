import { createGlobalStyle } from 'styled-components'
import { appColors } from './constants/Layout/app.colors'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    font-size: 10px;
    background-color: ${appColors.backgroundColor};
  }

  #root {
    margin: 0 auto;
  }


  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`

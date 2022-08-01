import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'

export const HeaderContainer = styled.header`
   width: 100%;
   color: white;
   background: ${appColors.headerColor};
   border-bottom: 1px solid ${appColors.borderColor};
   padding: 10px 15px;

   & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      background-color: transparent;
   }
`

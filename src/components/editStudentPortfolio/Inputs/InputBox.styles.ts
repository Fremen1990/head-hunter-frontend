import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const Input = styled.input`
   border-radius: 5px;
   font-size: 1.6rem;
   background-color: ${appColors.pageContainerColor};
   border: 1px solid ${appColors.userPointColor};
   color: ${appColors.userPointColor};
   margin: 10px 0;
   padding: 5px;

   :hover {
      border-color: yellow;
   }

   &:focus {
      outline: none;
      box-shadow: 0 0 2px green;
      border-color: green;
   }
`

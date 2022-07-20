import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const PrimaryButton = styled.button`
   color: ${appColors.fontColor};
   background-color: ${appColors.buttonColor};
   border: 1px solid transparent;
   border-radius: 4px;
   padding: 5px 10px;
   margin: 5px;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      border-color: ${appColors.fontColor};
   }

   &::first-letter {
      text-transform: uppercase;
   }
`

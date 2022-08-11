import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'
import { device } from '../../../constants/mediaQueries'

export const ExpectationSection = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 10px;
   background-color: ${appColors.headerColor};

   ${device.tablet} {
      flex-direction: column;
      & div {
         width: 100%;
      }
   }

   ${device.desktop} {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      margin: 10px 0;
   }
`

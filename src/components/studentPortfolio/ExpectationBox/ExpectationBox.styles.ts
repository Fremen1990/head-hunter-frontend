import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'
import { device } from '../../../constants/mediaQueries'

export const ExpectationSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;
   background-color: ${appColors.headerColor};
   margin: 20px 0;

   ${device.tablet} {
      flex-direction: row;
      justify-content: center;
   }

   ${device.desktop} {
      display: grid;
      grid-template-columns: repeat(6, 1fr);

      margin: 10px 0;
   }
`

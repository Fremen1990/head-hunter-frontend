import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'
import { device } from '../../../constants/mediaQueries'

export const ExpectationSection = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-wrap: nowrap;
   justify-content: space-between;
   background-color: ${appColors.headerColor};
   width: 100%;
   margin: 10px 0;

   ${device.tablet} {
      flex-direction: row;
      justify-content: center;
   }
`

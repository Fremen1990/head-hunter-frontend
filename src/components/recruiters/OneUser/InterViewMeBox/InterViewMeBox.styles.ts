import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'
import { device } from '../../../../constants/mediaQueries'

export const BoxContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex-wrap: nowrap;
   padding: 5px;
   margin: 2px;
   height: 100px;
   color: ${appColors.descriptionColor};
   min-width: 100%;

   ${device.tablet} {
      min-width: 10%;
   }

   ${device.desktop} {
      min-width: 10%;
   }

   & p {
      color: ${appColors.descriptionColor};
      text-align: left;
      width: 100%;

      &::first-letter {
         text-transform: uppercase;
      }
   }

   & p:nth-child(1) {
      font-size: 1.4rem;

      ${device.desktop} {
         font-size: 1.2rem;
      }
   }

   & p:nth-child(2) {
      color: ${appColors.descriptionColorPoints};
      font-size: 1.4rem;

      & span {
         font-size: 1.5rem;
         color: ${appColors.userPointColor};
         font-weight: bold;
      }
   }
`

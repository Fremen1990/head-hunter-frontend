import styled from 'styled-components'
import { device } from '../../../constants/mediaQueries'

export const RatingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   gap: 20px;
   margin: 20px 0;

   ${device.tablet} {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
   }

   ${device.desktop} {
      justify-content: space-around;
   }
`

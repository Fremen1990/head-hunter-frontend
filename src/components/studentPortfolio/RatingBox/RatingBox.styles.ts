import styled from 'styled-components'
import { device } from '../../../constants/mediaQueries'

export const RatingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   margin: 10px 0;

   ${device.tablet} {
      flex-direction: row;
   }

   ${device.desktop} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 5px;
   }
`

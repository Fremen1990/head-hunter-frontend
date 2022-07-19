import styled from 'styled-components'
import { device } from '../../../constants/mediaQueries'

export const LogoContainer = styled.div`
   width: 40px;
   display: flex;
   justify-content: center;
   align-items: center;

   ${device.mobile} {
      width: 60px;
   }

   ${device.desktop} {
      width: 50px;
   }

   & img {
      width: 100%;
   }
`

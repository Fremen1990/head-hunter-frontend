import styled from 'styled-components'
import { device } from '../../../constants/mediaQueries'

interface Props {
   logoWidth?: string
}

export const LogoContainer = styled.div<Props>`
   width: ${(props) => props.logoWidth || '40px'};
   display: flex;
   justify-content: center;
   align-items: center;

   ${device.mobile} {
      width: ${(props) => props.logoWidth || '60px'};
   }

   ${device.desktop} {
      width: ${(props) => props.logoWidth || '89px'};
   }

   & img {
      width: 100%;
   }
`

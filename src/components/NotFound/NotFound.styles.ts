import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { NavLink } from 'react-router-dom'
import { device } from '../../constants/mediaQueries'

export const NotFoundCode = styled.h1`
   font-size: 7rem;
   text-align: center;
   color: ${appColors.buttonColor};
   background: transparent;

   ${device.mobile} {
      font-size: 4rem;
   }

   ${device.tablet} {
      font-size: 5rem;
   }
`

export const NotFoundText = styled.p`
   font-size: 6rem;
   text-align: center;
   color: ${appColors.descriptionColorPoints};
   background: transparent;

   ${device.mobile} {
      font-size: 3rem;
   }

   ${device.tablet} {
      font-size: 4rem;
   }
`

export const NavLinkStyled = styled(NavLink)`
   font-size: 5rem;
   text-align: center;
   color: ${appColors.fontColor};
   background: transparent;

   ${device.mobile} {
      font-size: 2rem;
   }

   ${device.tablet} {
      font-size: 3rem;
   }
`

export const BackOnePage = styled.a`
   font-size: 5rem;
   text-align: center;
   color: ${appColors.fontColor};
   background: transparent;
   text-decoration: underline;

   ${device.mobile} {
      font-size: 2rem;
   }

   ${device.tablet} {
      font-size: 3rem;
   }
`

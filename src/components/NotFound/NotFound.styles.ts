import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { NavLink } from 'react-router-dom'

export const NotFoundCode = styled.h1`
   font-size: 7rem;
   color: ${appColors.fontColor};
   background: transparent;
`

export const NotFoundText = styled.p`
   font-size: 6rem;
   color: ${appColors.fontColor};
   background: transparent;
`

export const NavLinkStyled = styled(NavLink)`
   font-size: 5rem;
   color: ${appColors.fontColor};
   background: transparent;
`

export const BackOnePage = styled.a`
   font-size: 5rem;
   color: ${appColors.fontColor};
   background: transparent;
   text-decoration: underline;
`

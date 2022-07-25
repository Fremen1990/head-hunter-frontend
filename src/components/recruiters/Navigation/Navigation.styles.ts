import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const NavBar = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   background: transparent;
   justify-content: flex-start;
   width: 100%;
   height: 40px;
`

export const Tab = styled.a<{ active: boolean }>`
   width: 200px;
   background: transparent;
   font-family: Catamaran, sans-serif;
   color: ${appColors.fontColor};
   font-size: 18px;
   text-align: center;
   cursor: pointer;
   ${({ active }) =>
      active &&
      `
    border-bottom: 3px solid ${appColors.buttonColor}
  `}
`

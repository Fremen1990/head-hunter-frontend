import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'

export const StudentsTabs = styled.nav`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 10px;
   background: transparent;
   justify-content: flex-start;
   width: 100%;
   height: 40px;
`

export const Tab = styled.a`
   width: 200px;
   background: transparent;
   text-align: center;
   cursor: pointer;

   &:hover {
      border-bottom: 1px solid red;
   }
`

export const Text = styled.p`
   font-family: Catamaran, sans-serif;
   color: ${appColors.fontColor};
   background: transparent;
   font-size: 18px;
`

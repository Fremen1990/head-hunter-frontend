import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'

export const StudentsTabs = styled.nav`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 10px;
   background: ${appColors.pageContainerColor};
   justify-content: flex-start;
   width: 100%;
   height: 72px;
`

export const OneTab = styled.a`
   margin-top: 18px;
   padding: 10px 20px;
   margin-bottom: 25px;
   width: 200px;
   text-align: center;
   cursor: pointer;

   &:hover {
      border-bottom: 1px solid red;
   }
`

export const Text = styled.p`
   font-family: Catamaran, sans-serif;
   color: ${appColors.fontColor};
   font-size: 18px;
`

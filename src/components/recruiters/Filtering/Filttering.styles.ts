import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'
import { device } from '../../../constants/mediaQueries'

export const FilteringContainer = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.5);
`

export const FilteringBox = styled.div`
   width: 100%;

   background-color: black;
   padding: 5px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   position: relative;

   ${device.tablet} {
      width: 70%;
   }

   ${device.desktop} {
      width: 30%;
   }

   & > div {
      display: flex;
      align-items: center;
      flex-direction: row;
      background-color: transparent;
      padding: 5px;
   }
`

export const TitleBox = styled.div`
   justify-content: flex-start;

   & p {
      margin-left: 5px;
      font-size: 3rem;
      background-color: transparent;
   }
`

export const SalaryInput = styled.label`
   background-color: transparent;
   font-size: 1.4rem;
   margin-right: 5px;

   & input {
      margin-left: 5px;
      background-color: ${appColors.backgroundColor};
      padding: 5px;
      font-size: 1.4rem;
      color: ${appColors.fontColor};
      border: 1px solid transparent;
      border-radius: 4px;
      transition: 0.2s;

      &:focus {
         border: 1px solid ${appColors.buttonColor};
      }
   }
`

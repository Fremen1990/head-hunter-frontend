import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

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
   width: 30%;
   height: 80%;
   background-color: black;
   padding: 5px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   & > div {
      display: flex;
      align-items: center;
      flex-direction: row;
      background-color: transparent;
      padding: 5px;
   }
`

export const TitleBox = styled.div`
   justify-content: space-between;

   & p {
      margin-left: 5px;
      font-size: 3rem;
      background-color: transparent;
   }

   & .clearForm {
      padding: 5px 10px;
      font-size: 1.4rem;
      color: ${appColors.fontColor};
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: rgba(30, 144, 255, 0.3);
      cursor: pointer;
      transition: 0.3s;

      &:hover {
         border-color: ${appColors.fontColor};
      }
   }
`

export const ButtonBox = styled.div`
   justify-content: flex-end;

   & .annualBtn {
      padding: 5px 10px;
      font-size: 1.4rem;
      text-transform: capitalize;
      color: ${appColors.fontColor};
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
         border-color: ${appColors.fontColor};
      }
   }
`

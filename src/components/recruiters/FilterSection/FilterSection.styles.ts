import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const FilterSectionBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 95%;
   margin: 0 auto;
   padding: 5px;
   background-color: transparent;

   & form {
      background-color: transparent;

      & label.search {
         display: flex;
         align-items: center;
         margin: 0 auto;
         width: 90%;
         border: 1px solid transparent;
         border-radius: 4px;
         background-color: transparent;

         & div {
            background-color: transparent;
            width: 25px;
         }

         & svg {
            background-color: transparent;
            margin-right: 5px;
            margin-left: 5px;
            font-size: 1.7rem;
            cursor: pointer;
            transition: 0.3s;
         }
      }
   }

   & input {
      font-size: 1.4rem;
      color: ${appColors.fontColor};
      padding: 5px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background-color: transparent;
      border-radius: 4px;
      transition: 0.3s;
      width: 90%;

      &:focus {
         border: 1px solid rgba(255, 255, 255, 0.6);
      }
   }
`

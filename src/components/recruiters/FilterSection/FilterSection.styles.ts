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

      & label {
         display: flex;
         align-items: center;
         border: 1px solid rgba(255, 255, 255, 0.2);
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

            &:hover {
               color: red;
            }
         }
      }
   }

   & input {
      font-size: 1.4rem;
      color: ${appColors.fontColor};
      padding: 5px;
      border: none;
      background-color: transparent;
      border-radius: 4px;
   }
`

import styled from 'styled-components'
import { appColors } from '../../../../../constants/Layout/app.colors'

export const StarInput = styled.div`
   background-color: transparent;
   margin-right: 5px;

   & label {
      height: 25px;
      width: 40px;
      font-size: 1.6rem;
      border-radius: 2px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
         background-color: ${appColors.buttonColor};

         & svg {
            color: ${appColors.fontColor};
         }
      }

      & svg {
         font-size: 1.6rem;
         background-color: transparent;
         margin-left: 5px;
         color: ${appColors.buttonColor};
         transition: 0.2s;
      }
   }

   & input[type='checkbox'] {
      display: none;
   }

   & input:checked + label {
      background-color: ${appColors.buttonColor};
   }

   & input:checked + label > svg {
      color: ${appColors.fontColor};
   }
`
export const ButtonInput = styled.div`
   background-color: transparent;
   margin-right: 5px;

   & label {
      height: 30px;
      font-size: 1.4rem;
      padding: 5px;
      border-radius: 2px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.2s;

      &::first-letter {
         text-transform: uppercase;
      }

      &:hover {
         background-color: ${appColors.buttonColor};

         & svg {
            color: ${appColors.fontColor};
         }
      }
   }

   & input[type='checkbox'] {
      display: none;
   }

   & input:checked + label {
      background-color: ${appColors.buttonColor};
   }

   & input:checked + label > svg {
      color: ${appColors.fontColor};
   }
`

import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

export const Form = styled.form`
  background-color: transparent;


  & h2 {
    font-size: 3rem
  }
}

& > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  background-color: transparent;

  & p {
    width: 100%;
    color: ${appColors.fontColor};
    font-size: 1.4rem;
    background-color: transparent;
  }

`

export const StarInput = styled.div`
   background-color: transparent;
   margin-right: 5px;

   & label {
      height: 30px;
      width: 40px;
      font-size: 2rem;
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
         font-size: 2rem;
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

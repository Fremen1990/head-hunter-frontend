import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   flex-wrap: wrap;
   height: 40%;
   width: 350px;

   & Button {
      font-size: 1.5rem;
      margin-top: 20px;
   }
`

export const Input = styled.input`
   width: 100%;
   padding: 5px;
   color: ${appColors.fontColor};
   font-size: 1.5rem;
   background-color: ${appColors.pageContainerColor};
   height: 40px;
   margin: 10px 0;

   &:focus {
      background-color: rgb(256, 256, 256);
      color: #000;
   }
`
export const ErrorMessage = styled.div`
   color: ${appColors.buttonColor};
   font-size: 1.4rem;
`

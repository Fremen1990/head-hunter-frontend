import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   flex-wrap: wrap;
   height: 50%;
   width: 350px;

   & Button {
      font-size: 1.5rem;
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

import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

interface Props {
   err: {} | undefined
}

export const Form = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   margin-bottom: 80px;
   padding: 20px;
   & label {
      margin: 15px 0;
   }
`

export const FormTitle = styled.p`
   font-size: 24px;
   font-weight: 600;
   background-color: rgba(255, 255, 255, 0);
`

export const Label = styled.label`
   width: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 5px;

   & > p {
      font-size: 1.6rem;
      font-weight: 550;
      margin-left: 25px;
   }
`

export const Input = styled.input<Props>`
   width: 100%;
   ${(props) => props.theme.main}
   border: 1px solid ${({ err }) =>
      err ? `${appColors.buttonColor}` : 'transparent'};
   padding: 20px 15px;
   color: ${appColors.fontColor};
   font-size: 1.5rem;
   background-color: ${appColors.pageContainerColor};
   height: 40px;
   margin: 4px 0;

   &:focus {
      background-color: rgb(256, 256, 256);
      color: #000;
   }
`

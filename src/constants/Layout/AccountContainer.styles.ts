import styled from 'styled-components'
import { appColors } from './app.colors'

export const AccountContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 60%;
   margin: 0 auto;
   border: 1px solid ${appColors.borderColor};
   background-color: ${appColors.pageContainerColor};
   color: ${appColors.fontColor};
   min-height: 100vh;

   & .container-box {
      width: 50%;
      border: 1px solid ${appColors.borderColor};
      box-shadow: 0 0 5px rgba(0, 0, 0, 1);
      min-height: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
`
export const AccountAvatar = styled.img`
   max-width: 200px;
   max-height: 200px;
   border-radius: 50%;
   margin: 40px 0;
`

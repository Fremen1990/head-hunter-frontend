import styled from 'styled-components'
import { appColors } from './app.colors'
import { device } from '../mediaQueries'

export const AccountContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80%;
   margin: 0 auto;
   border: 1px solid ${appColors.borderColor};
   background-color: ${appColors.pageContainerColor};
   color: ${appColors.fontColor};
   min-height: 89vh;

   ${device.desktop} {
      width: 60%;
   }

   & > .container-box {
      width: 90%;
      border: 1px solid ${appColors.borderColor};
      box-shadow: 0 0 5px rgba(0, 0, 0, 1);
      min-height: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 0.9rem;
      text-align: center;

      ${device.tablet} {
         width: 60%;
      }
   }
`
export const AccountAvatar = styled.img`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   margin: 40px 0;
   box-shadow: 0 0 5px rgba(0, 0, 0, 1);
`

import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'

export const AccountContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   margin: 0 auto;
   border: 1px solid ${appColors.borderColor};
   background-color: ${appColors.pageContainerColor};
   color: ${appColors.fontColor};
   min-height: 89vh;

   ${device.desktop} {
      width: 60%;
   }

   & > .container-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;
      border: 1px solid ${appColors.borderColor};
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
      min-height: 50px;
      margin-bottom: 50px;
      background-color: transparent;

      & * {
         font-size: 1.8rem;
      }
   }

   ${device.desktop} {
      width: 60%;
   }
`
export const AccountAvatar = styled.img`
   max-width: 140px;
   max-height: 140px;
   border-radius: 50%;
   margin: 40px 0;
   box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);

   ${device.desktop} {
      max-width: 190px;
      max-height: 190px;
   }
`

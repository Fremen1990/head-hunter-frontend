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
      //box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
      min-height: 85px;
      margin-bottom: 50px;
      background-color: ${appColors.backgroundColor};

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
export const UtilsMenu = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 30px;
   min-height: 200px;
   flex-wrap: wrap;
   overflow: hidden;
   background-color: transparent;

   & > a {
      width: 190px;
      height: 190px;
      border-radius: 10px;
      text-decoration: none;
   }
`
export const UtilsMenuBox = styled.button`
   width: 190px;
   height: 190px;
   cursor: pointer;
   display: flex;
   align-items: center;
   overflow: hidden;
   border: 2px solid ${appColors.headerColor};
   border-radius: 10px;
   flex-direction: column;
   justify-content: center;
   gap: 20px;

   & > p {
      font-size: 1.7rem;
      color: white;
      font-weight: 520;
   }

   & > * {
      background-color: transparent;
      font-size: 6rem;
      color: ${appColors.linksColor};
   }

   :hover {
      background-color: #19191a;
   }
`

import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'

export const Form = styled.form`
   display: flex;
   align-items: flex-start;
   flex-wrap: wrap;
`

export const AsideSection = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${appColors.pageContainerColor};
   width: 100%;

   ${device.desktop} {
      width: calc(30% - 10px);
      margin-right: 10px;
   }

   & label {
      margin: 10px 0;
      font-size: 1.4rem;
      background-color: ${appColors.pageContainerColor};
   }

   & p {
      font-size: 1.4rem;
      background-color: ${appColors.pageContainerColor};
   }

   & input {
      padding: 10px 10px;
      font-size: 1.6rem;
      margin-left: 10px;
      background-color: ${appColors.pageContainerColor};
      border: 1px solid ${appColors.userPointColor};
      border-radius: 5px;
      color: ${appColors.userPointColor};
   }

   & textarea {
      width: 90vw;
      padding: 20px;
      color: ${appColors.userPointColor};
      font-size: 1.6rem;
      background-color: ${appColors.pageContainerColor};
      ${device.desktop} {
         width: 100%;
      }
   }
`

export const MainSection = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;

   ${device.desktop} {
      width: calc(70%);
   }

   & textarea {
      color: ${appColors.userPointColor};
      font-size: 1.5rem;
      width: 100%;
      margin: 10px 0;
      padding: 5px;
   }

   & label {
      width: 100%;
   }
   & input {
      font-size: 1.6rem;
      background-color: ${appColors.pageContainerColor};
      border: 1px solid ${appColors.userPointColor};
      color: ${appColors.userPointColor};
      margin: 20px 0;
   }

   & button {
      margin-left: 10px;
      padding: 5px;
      color: ${appColors.fontColor};
      border: 1px solid ${appColors.userPointColor};
      cursor: pointer;
   }

   & p {
      font-size: 1.5rem;
   }
`

export const EditExpectationBoxContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   ${device.desktop} {
      justify-content: space-between;
   }
`

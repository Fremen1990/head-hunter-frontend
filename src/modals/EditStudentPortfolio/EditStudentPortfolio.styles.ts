import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'
import { NavLink } from 'react-router-dom'

export const BackNavLink = styled(NavLink)`
   width: 100%;
   margin: 5px 5px 0;
   padding: 5px;
   font-size: 1.5rem;
   text-align: center;
   border: 1px solid ${appColors.userPointColor};
   color: ${appColors.userPointColor};
   text-decoration: none;
   transition: 0.5s;

   ${device.desktop} {
      width: 50px;
   }

   &:hover {
      color: ${appColors.buttonColor};
      border: 1px solid ${appColors.buttonColor};
   }
`

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
      width: 80vw;
      padding: 20px;
      color: ${appColors.userPointColor};
      font-size: 1.6rem;
      background-color: ${appColors.pageContainerColor};

      ${device.desktop} {
         padding: 15px;
         height: 300px;
         width: 20vw;
      }
   }
`

export const MainSection = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   ${device.desktop} {
      width: calc(70% - 60px);
   }

   & textarea {
      color: ${appColors.userPointColor};
      font-size: 1.5rem;
      width: 90%;
      margin: 10px 0;
      padding: 5px;
   }

   & select {
      font-size: 1.6rem;
      padding: 5px;
      color: ${appColors.userPointColor};
      background-color: ${appColors.pageContainerColor};
   }

   & label {
      width: 100%;
      text-align: center;
   }

   & input {
      font-size: 1.6rem;
      background-color: ${appColors.pageContainerColor};
      border: 1px solid ${appColors.userPointColor};
      color: ${appColors.userPointColor};
      margin: 20px 0;
      padding: 5px;
   }

   & button {
      margin-left: 10px;
      padding: 5px;
      font-size: 1.6rem;
      color: ${appColors.fontColor};
      border: 1px solid ${appColors.userPointColor};
      cursor: pointer;
      transition: 0.5s;

      &::first-letter {
         text-transform: uppercase;
      }

      &:hover {
         border: 1px solid ${appColors.buttonColor};
      }
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

   ${device.tablet} {
      justify-content: center;
      flex-direction: column;
   }

   ${device.desktop} {
      flex-direction: row;
   }
`

export const BoxContainer = styled.div`
   margin: 15px;
   color: ${appColors.descriptionColor};

   ${device.desktop} {
      width: 40%;
   }
`

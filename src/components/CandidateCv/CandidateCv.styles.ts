import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { MdArrowBackIosNew } from 'react-icons/md'
import { device } from '../../constants/mediaQueries'

export const CandidateCvContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
`

export const BackButton = styled.button`
   display: flex;
   align-items: center;
   color: ${appColors.fontColor};
   border: none;
   margin: 5px 0;
   width: 60px;
   font-weight: bold;
   font-size: 16px;
   cursor: pointer;
   transition: 0.3s;

   :hover {
      color: ${appColors.buttonColor};
   }
`

export const AsideSection = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   margin-bottom: 10px;
   background-color: ${appColors.pageContainerColor};
   color: ${appColors.descriptionColor};

   ${device.desktop} {
      width: 250px;
   }

   & div {
      width: 80%;
      background-color: ${appColors.pageContainerColor};
      font-size: 1.6rem;
   }

   & h2 {
      font-size: 1.8rem;
      background-color: ${appColors.pageContainerColor};

      ${device.desktop} {
         font-size: 2.4rem;
      }
   }

   & p {
      background-color: ${appColors.pageContainerColor};
      font-size: 1.4rem;

      ${device.desktop} {
         font-size: 1.6rem;
      }
   }

   & a {
      background-color: ${appColors.pageContainerColor};
      color: ${appColors.linksColor};
      text-decoration: none;
      font-size: 1.4rem;

      ${device.desktop} {
         font-size: 1.6rem;
      }
   }

   & img {
      max-width: 150px;
      max-height: 150px;
      border-radius: 50%;
      margin: 20px 0;

      ${device.desktop} {
         width: 150px;
         height: 150px;
      }
   }

   & Button {
      width: 80%;
      font-size: 16px;
   }
`

export const MainSection = styled.main`
   padding: 0 10px;
   width: 100%;

   ${device.desktop} {
      width: calc(100% - 340px);
   }

   & a {
      text-decoration: none;
      color: ${appColors.linksColor};
   }
`

export const BackIcon = styled(MdArrowBackIosNew)`
   color: ${appColors.iconColor};
`

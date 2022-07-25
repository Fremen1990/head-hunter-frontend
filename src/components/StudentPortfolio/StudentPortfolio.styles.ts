import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'

export const UserPortfolioContainer = styled.div`
   display: flex;
   align-items: flex-start;
`
export const AsideSection = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   width: 100px;
   background-color: ${appColors.pageContainerColor};

   ${device.desktop} {
      width: 255px;
   }

   & div {
      width: 80%;
      background-color: ${appColors.pageContainerColor};
      font-size: 1.6rem;
   }

   & h2 {
      font-size: 2.4rem;
      background-color: ${appColors.pageContainerColor};
   }

   & p {
      background-color: ${appColors.pageContainerColor};
      font-size: 1.6rem;
   }

   & a {
      text-decoration: none;
      background-color: ${appColors.pageContainerColor};
      color: ${appColors.linksColor};
      font-size: 1.6rem;
   }

   & img {
      max-width: 80px;
      max-height: 80px;
      border-radius: 50%;
      margin: 20px 0;

      ${device.desktop} {
         width: 150px;
         height: 150px;
      }
   }

   & Button {
      width: 100%;

      ${device.desktop} {
         width: 80%;
      }
   }
`

export const MainSection = styled.main`
   padding: 0 10px;
   width: 250px;

   ${device.desktop} {
      width: calc(100% - 255px);
   }

   & a {
      text-decoration: none;
      color: ${appColors.linksColor};
   }
`

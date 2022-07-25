import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'

export const UserPortfolioContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
`
export const AsideSection = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   margin-bottom: 10px;
   background-color: ${appColors.pageContainerColor};

   ${device.desktop} {
      width: 300px;
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
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
      margin: 20px 0;

      ${device.desktop} {
         width: 150px;
         height: 150px;
      }
   }

   & Button {
      width: 80%;
   }
`

export const MainSection = styled.main`
   padding: 0 10px;
   width: 100%;

   ${device.desktop} {
      width: calc(100% - 300px);
   }

   & a {
      text-decoration: none;
      color: ${appColors.linksColor};
   }
`

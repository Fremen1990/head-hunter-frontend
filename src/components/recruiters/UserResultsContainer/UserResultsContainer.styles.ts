import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'
import { device } from '../../../constants/mediaQueries'

export const ResultsContainer = styled.section`
   width: 95%;
   margin: 0 auto;
   background-color: ${appColors.headerColor};
   border-top: 1px solid ${appColors.headerColor};

   & .paginationBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${device.tablet} {
         flex-direction: row;
         justify-content: center;
      }

      ${device.desktop} {
         justify-content: flex-end;
      }

      & label {
         width: 100px;

         & select {
            width: 100%;
            color: ${appColors.fontColor};
            font-size: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 4px;
            cursor: pointer;
         }
      }
   }

   .containerPagination {
      color: white;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      text-align: center;

      & a {
         display: inline-block;
         width: 20px;
         padding: 5px;
         font-size: 2rem;
         margin-left: 5px;
         margin-right: 5px;
         cursor: pointer;
      }
   }

   .prevButton a,
   .nextButton a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
   }

   .prevButton > a > svg {
      font-size: 2rem;
   }

   .nextButton > a > svg {
      font-size: 2rem;
   }

   .disabledPagination {
      font-size: 2rem;
   }

   .activePagination {
      color: red;
   }
`

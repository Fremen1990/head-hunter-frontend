import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'
import { device } from '../../../../constants/mediaQueries'

export const SearchContainer = styled.section`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color: rgba(0, 0, 0);

   ${device.tablet} {
      background-color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
   }
`

export const SearchBox = styled.div`
   position: relative;
   width: 100%;
   margin-top: 50px;
   margin-bottom: 50px;
   background-color: transparent;

   ${device.tablet} {
      width: 50%;
   }
   ${device.desktop} {
      width: 35%;
   }

   & form {
      background-color: transparent;

      & label.search {
         display: flex;
         align-items: center;
         margin: 0 auto;
         width: 90%;
         border: 1px solid rgba(255, 255, 255, 0.2);
         border-radius: 4px;
         background-color: transparent;

         & div {
            background-color: transparent;
            width: 25px;
         }

         & svg {
            background-color: transparent;
            margin-right: 5px;
            margin-left: 5px;
            font-size: 1.7rem;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
               color: red;
            }
         }
      }
   }

   & input {
      font-size: 1.4rem;
      color: ${appColors.fontColor};
      padding: 5px;
      border: none;
      background-color: transparent;
      border-radius: 4px;
   }

   & > svg {
      position: absolute;
      top: -40px;
      right: 20px;
      font-size: 3rem;
      background-color: transparent;
      color: ${appColors.buttonColor};
      transition: 0.3s;
      cursor: pointer;

      &:hover {
         transform: rotate(-180deg);
      }
   }
`

export const ResultsContainer = styled.div`
   width: 95%;
   background-color: black;
   padding: 2px;

   ${device.desktop} {
      width: 70%;
   }
`

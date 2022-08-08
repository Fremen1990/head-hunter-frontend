import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

interface Props {
   isOpen: boolean
}

export const UserContainer = styled.div<Props>`
   position: relative;
   background-color: transparent;

   & div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: transparent;

      & p {
         font-size: 1.4rem;
         background-color: transparent;
      }

      & .avatar {
         height: 45px;
         width: 45px;
         border: 1px solid white;
         border-radius: 50%;
         margin-right: 5px;
         overflow: hidden;

         & img {
            width: 110%;
         }
      }

      & > svg {
         margin: 5px;
         cursor: pointer;
         font-size: 1.4rem;
         background-color: transparent;
         transition: 0.3s;

         &:hover {
            color: ${appColors.buttonColor};
         }

         ${({ isOpen }) =>
            isOpen &&
            `
    transform: rotate(-180deg)
  `}
      }
   }

   & div:nth-child(2) {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: ${appColors.headerColor};
      width: 100%;
      padding: 5px;

      & a,
      p {
         background-color: transparent;
         text-transform: capitalize;
         padding: 5px;
         cursor: pointer;
         color: ${appColors.fontColor};
         text-decoration: none;
         font-size: 1.4rem;
         transition: 0.3s;

         &:hover {
            color: ${appColors.buttonColor};
         }
      }
   }
`

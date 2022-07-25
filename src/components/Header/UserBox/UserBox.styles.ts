import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

interface Props {
   isOpen: boolean
}

export const UserContainer = styled.div<Props>`
   position: relative;

   & div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & p {
         font-size: 1.4rem;
      }

      & .avatar {
         height: 30px;
         width: 30px;
         border: 1px solid white;
         border-radius: 50%;
         margin-right: 5px;
         overflow: hidden;
      }

      & > svg {
         margin: 5px;
         cursor: pointer;
         font-size: 1.4rem;
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

      & a {
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

import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

interface Props {
   isOpen: boolean
}

export const UserContainer = styled.div<Props>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   padding: 5px;
   width: 100%;
   background-color: ${appColors.pageContainerColor};
   border: 1px solid ${appColors.borderColor};
   margin-bottom: 10px;

   & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px;
      margin-left: 5px;
      margin-right: 5px;
      background-color: transparent;
   }
`
export const InfoBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 5px;
   background-color: transparent;

   & p {
      background-color: transparent;
   }

   & p:nth-child(1) {
      font-size: 0.8rem;
   }
`

export const UserBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-left: 10px;
   background-color: transparent;

   & p {
      background-color: transparent;
   }

   & .avatar {
      height: 30px;
      width: 30px;
      border: 1px solid white;
      border-radius: 50%;
      margin-right: 5px;
      margin-left: 5px;
      overflow: hidden;
   }
`

export const ButtonsBox = styled.div<Props>`
  & > svg {
    background-color: transparent;
    margin: 5px;
    cursor: pointer;
    transition: 0.3s;
    ${({ isOpen }) =>
       isOpen &&
       `
    transform: rotate(-180deg)
  `}
  }

  & > svg:hover {
    color: ${appColors.buttonColor};
  }
}
`
export const MoreInfoBox = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: ${appColors.headerColor};
   width: 100%;
   margin-bottom: 10px;
`

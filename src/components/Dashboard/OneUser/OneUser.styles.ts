import styled from 'styled-components'

interface Props {
   isOpen: boolean
}

export const UserContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   padding: 5px;
   width: 90%;
   margin: 0 auto;

   & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px;
      margin-left: 5px;
      margin-right: 5px;
   }
`
export const InfoBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 5px;

   & p:nth-child(1) {
      font-size: 0.8rem;
   }
`

export const AvatarBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-left: 10px;

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
    margin: 5px;
    cursor: pointer;
    ${({ isOpen }) =>
       isOpen &&
       `
    transform: rotate(-180deg)
  `}
  }
}
`

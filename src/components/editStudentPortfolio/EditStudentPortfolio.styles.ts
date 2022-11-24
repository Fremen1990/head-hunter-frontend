import styled from 'styled-components'
import { appColors } from '../../constants/Layout/app.colors'
import { device } from '../../constants/mediaQueries'
import { PageContainer } from '../../constants/Layout/Container.styles'
import { AiOutlineClose } from 'react-icons/ai'

export const EditModalContainer = styled(PageContainer)`
   border: 1px solid transparent;
   background-color: transparent;
`

export const BackButton = styled.button`
   width: 100%;
   margin: 0 auto;
   padding: 5px;
   font-size: 1.8rem;
   text-align: center;
   border: 1px solid ${appColors.userPointColor};
   color: ${appColors.userPointColor};
   cursor: pointer;
   transition: 0.5s;

   &::first-letter {
      text-transform: uppercase;
   }

   ${device.tablet} {
      width: 80%;
   }

   ${device.desktop} {
      width: 65%;
      margin-bottom: 20px;
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
      width: 35%;
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

      &::first-letter {
         text-transform: uppercase;
      }
   }
`

export const MainSection = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   ${device.desktop} {
      width: calc(100% - 35% - 10px);
   }

   & label {
      width: 100%;
      text-align: center;
   }

   & button {
      margin-left: 10px;
      padding: 5px 10px;
      border-radius: 5px;
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

  &input {

    :hover {
      border-color: yellow;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 2px green;
      border-color: green;
    }
  }

}

${device.desktop} {
  padding: 15px;
  height: 400px;
  width: 100%;
}

${device.tablet} {
  justify-content: center;
  flex-direction: column;
}

${device.desktop} {
  flex-direction: row;
}
`
export const ErrorSimpleLayoutMessage = styled.div`
   color: ${appColors.buttonColor};
   font-size: 1.4rem;
   background-color: ${appColors.pageContainerColor};
   margin-top: 10px;
   margin-left: 10px;

   &::first-letter {
      text-transform: uppercase;
   }
`

export const ErrorExtendedLayoutMessage = styled.div`
   color: ${appColors.buttonColor};
   font-size: 1.4rem;
   background-color: ${appColors.backgroundColor};

   &::first-letter {
      text-transform: uppercase;
   }
`

export const BoxContainer = styled.div`
   margin: 15px;
   color: ${appColors.descriptionColor};

   p {
      &::first-letter {
         text-transform: uppercase;
      }
   }

   input {
      :hover {
         border-color: yellow;
      }

      &:focus {
         outline: none;
         box-shadow: 0 0 2px green;
         border-color: green;
      }
   }

   ${device.desktop} {
      width: 40%;
   }
`

export const RemoveIcon = styled(AiOutlineClose)`
   margin-left: 5px;
   font-size: 2rem;
   color: ${appColors.buttonColor};
   transition: 0.3s;
   cursor: pointer;

   &:hover {
      font-size: 2.5rem;
      transform: rotate(-180deg);
   }
`

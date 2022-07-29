import styled from 'styled-components'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { appColors } from '../../../constants/Layout/app.colors'

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 0;

  & p {
    margin-left: 10px;
    font-size: 1.4rem;
    width: 90%;
`

export const GitHubContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5px;

   & a {
      margin-left: 10px;
   }
`

export const DescriptionContainer = styled.div`
   margin: 10px 0;
   width: 100%;

   & div {
      width: 100%;
   }

   & p {
      color: ${appColors.iconColor};

      &::first-letter {
         text-transform: uppercase;
      }
   }
`

export const GithubIcon = styled(AiFillGithub)`
   color: ${appColors.linksColor};
   font-size: 1.4rem;
   background-color: ${appColors.borderColor};
`
export const MailIcon = styled(IoMdMail)`
   color: ${appColors.iconColor};
   font-size: 1.4rem;
   background-color: ${appColors.borderColor};
`
export const PhoneIcon = styled(FaPhoneAlt)`
   color: ${appColors.iconColor};
   font-size: 1.4rem;
   background-color: ${appColors.borderColor};
`

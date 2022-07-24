import styled from 'styled-components'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export const RowContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   flex-wrap: wrap;
   margin: 5px 0;

   align-items: center;

   & p {
      margin-left: 10px;
   }
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
      align-self: flex-start;
      color: #4d4d4d;
   }
`

export const GithubIcon = styled(AiFillGithub)`
   color: #0b8bd4;
   background-color: #292a2b;
`
export const MailIcon = styled(IoMdMail)`
   color: #4d4d4d;
   background-color: #292a2b;
`
export const PhoneIcon = styled(FaPhoneAlt)`
   color: #4d4d4d;
   background-color: #292a2b;
`

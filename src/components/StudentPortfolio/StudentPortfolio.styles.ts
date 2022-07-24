import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'
import { device } from '../../constants/mediaQueries'

export const UserPortfolioContainer = styled.div`
   display: flex;
   align-items: flex-start;
`
export const AsideSection = styled.aside`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   width: 100px;

   background-color: #292a2b;

   ${device.desktop} {
      width: 255px;
   }

   & div {
      width: 80%;
      background-color: #292a2b;
   }

   & p {
      background-color: #292a2b;
   }

   & a {
      text-decoration: none;
      background-color: #292a2b;
      color: #0b8bd4;
   }

   & img {
      max-width: 80px;
      max-height: 80px;
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

export const MainSection = styled.main`
   background-color: #222324;
   padding: 0 10px;
   width: 250px;

   ${device.desktop} {
      width: 1176px;
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

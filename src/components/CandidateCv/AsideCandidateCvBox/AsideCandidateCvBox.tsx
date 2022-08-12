import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
   disinterestCandidate,
   HiredCandidate,
} from '../../../features/hr/hrActions'
import { Button } from '../../commons/Button/Button'
import { description } from '../../../constants/description/description'
import {
   GithubIcon,
   MailIcon,
   PhoneIcon,
   DescriptionContainer,
   GitHubContainer,
   RowContainer,
} from '../../studentPortfolio/AsideUserBox/AsideUserBox.styles'

interface Props {
   firstName: string
   lastName: string
   githubNick: string
   phone: string
   email: string
   desc: string
}

export const AsideCandidateCvBox = ({
   firstName,
   lastName,
   githubNick,
   phone,
   email,
   desc,
}: Props) => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const navigate = useNavigate()
   const { hired, disinterest } = description.buttons
   const { aboutMe } = description.studentPortfolio

   const handleDisinterest = async (studentId: string) => {
      try {
         await dispatch(disinterestCandidate({ studentId }))
      } finally {
         navigate(-1)
      }
   }

   const handleHired = async (studentId: string) => {
      try {
         await dispatch(HiredCandidate({ studentId }))
      } finally {
         navigate(-1)
      }
   }

   return (
      <>
         <img
            src={
               githubNick
                  ? `https://avatars.githubusercontent.com/${githubNick}`
                  : '/assets/default_avatar/GHLogo.png'
            }
            alt="gitHub avatar"
         />
         <h2>
            {firstName} {lastName}
         </h2>
         <GitHubContainer
            as="a"
            href={`https://github.com/${githubNick}`}
            target="_blank"
            rel="noopener noreferrer"
         >
            <GithubIcon />
            {githubNick}
         </GitHubContainer>
         <RowContainer>
            <PhoneIcon /> <p>{phone}</p>
         </RowContainer>
         <RowContainer>
            <MailIcon /> <p>{email}</p>
         </RowContainer>
         <DescriptionContainer>
            <p>{aboutMe}</p>
            <div>{desc}</div>
         </DescriptionContainer>
         {id && (
            <>
               <Button
                  buttonTitle={disinterest}
                  method={() => handleDisinterest(id)}
               />
               <Button buttonTitle={hired} method={() => handleHired(id)} />
            </>
         )}
      </>
   )
}

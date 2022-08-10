import React from 'react'
import {
   DescriptionContainer,
   GitHubContainer,
   GithubIcon,
   MailIcon,
   PhoneIcon,
   RowContainer,
} from './AsideCandidateCvBox.styles'
import { Button } from '../../commons/Button/Button'
import { description } from '../../../constants/description/description'

export const AsideCandidateCvBox = () => {
   const githubNick = 'nickdogithuba'
   const { hired } = description.buttons
   const { aboutMe } = description.studentPortfolio
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
         <h2>Imie Nazwisko</h2>
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
            <PhoneIcon /> <p>telefon</p>
         </RowContainer>
         <RowContainer>
            <MailIcon /> <p>email</p>
         </RowContainer>
         <DescriptionContainer>
            <p>{aboutMe}</p>
            <div>opis</div>
         </DescriptionContainer>
         {/* {role === 'hr' ? ( */}
         {/*    <Button buttonTitle={disinterest} method={handleDisinterests} /> */}
         {/* ) : null} */}
         <Button buttonTitle={hired} />
      </>
   )
}

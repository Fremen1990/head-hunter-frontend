import React from 'react'
import { Button } from '../commons/Button/Button'
import {
   AsideSection,
   DescriptionContainer,
   GitHubContainer,
   GithubIcon,
   MailIcon,
   MainSection,
   PhoneIcon,
   RowContainer,
   UserPortfolioContainer,
} from './StudentPortfolio.styles'

const loremText =
   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n' +
   '                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'

export const StudentPortfolio = () => {
   return (
      <UserPortfolioContainer>
         <AsideSection>
            <img
               src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
               alt="avatar profilu użytkownika"
            />
            <p>Jan Kowalski</p>
            <GitHubContainer>
               <GithubIcon />
               <a href="https://github.com/">jankowalski</a>
            </GitHubContainer>
            <RowContainer>
               {' '}
               <PhoneIcon /> <p>+48 393 393 393</p>
            </RowContainer>
            <RowContainer>
               <MailIcon /> <p>test@przyklad.com</p>
            </RowContainer>
            <DescriptionContainer>
               <p>O mnie</p>
               <div>{loremText}</div>
            </DescriptionContainer>
            <Button buttonTitle="Brak zaintersowania" />
            <Button buttonTitle="Zatrudniony" />
         </AsideSection>
         <MainSection />
      </UserPortfolioContainer>
   )
}

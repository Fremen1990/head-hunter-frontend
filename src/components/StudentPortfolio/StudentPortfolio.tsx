import React from 'react'
import { Button } from '../commons/Button/Button'
import {
   AsideSection,
   ClipIcon,
   DescriptionContainer,
   DescriptionSection,
   ExpectationContainer,
   GitHubContainer,
   GithubIcon,
   LinksSection,
   MailIcon,
   MainSection,
   PhoneIcon,
   RatingContainer,
   RowContainer,
   SubtitleSection,
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
         <MainSection>
            <SubtitleSection>Oceny</SubtitleSection>
            <RatingContainer>
               <div>Sekcja Ocen</div>
            </RatingContainer>
            <SubtitleSection>
               Oczekiwanie w stosunku do zatrudnienia
            </SubtitleSection>
            <ExpectationContainer>
               <div className="container">
                  <h2>Preferowane miejsce pracy</h2>
                  <p>Biuro</p>
               </div>
               <div className="container">
                  <h2>Docelowe miasto, gdzie chce pracować kandydat</h2>
                  <p>Biuro</p>
               </div>
               <div className="container">
                  <h2>Oczekiwany typ kontraktu</h2>
                  <p>Biuro</p>
               </div>
               <div className="container">
                  <h2>Oczekiwane wynagrodzenie miesięczne netto</h2>
                  <p>Biuro</p>
               </div>
               <div className="container">
                  <h2>
                     Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                  </h2>
                  <p>Biuro</p>
               </div>
               <div className="container">
                  <h2>Komercyjne doświadczenie w programowaniu</h2>
                  <p>Biuro</p>
               </div>
            </ExpectationContainer>
            <SubtitleSection>Edukacja</SubtitleSection>
            <DescriptionSection>
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
               erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet.
            </DescriptionSection>
            <SubtitleSection>Kursy</SubtitleSection>
            <DescriptionSection>
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
               erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet.
            </DescriptionSection>
            <SubtitleSection>Doświadczenie zawodowe</SubtitleSection>
            <DescriptionSection>
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
               erat, sed diam voluptua. At vero eos et accusam et justo duo
               dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet.
            </DescriptionSection>
            <SubtitleSection>Portfolio</SubtitleSection>
            <LinksSection>
               <ClipIcon />
               <a href="https://github.com/">https://github.com/</a>
            </LinksSection>
            <SubtitleSection> Projekt w zespole Scrumowym</SubtitleSection>
            <LinksSection>
               <ClipIcon />
               <a href="https://github.com/">https://github.com/</a>
            </LinksSection>
            <LinksSection>
               <ClipIcon />
               <a href="https://github.com/">https://github.com/</a>
            </LinksSection>
            <SubtitleSection>Projekt na zaliczenie</SubtitleSection>
            <LinksSection>
               <ClipIcon />
               <a href="https://github.com/">https://github.com/</a>
            </LinksSection>
         </MainSection>
      </UserPortfolioContainer>
   )
}

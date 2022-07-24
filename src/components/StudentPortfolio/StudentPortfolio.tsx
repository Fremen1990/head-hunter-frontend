import React from 'react'
import {
   AsideSection,
   DescriptionSection,
   ExpectationContainer,
   MainSection,
   RatingContainer,
   UserPortfolioContainer,
} from './StudentPortfolio.styles'
import { LinksBox } from './LinksBox/LinksBox'
import { AsideUserBox } from './AsideUserBox/AsideUserBox'
import { SubtitlesSection } from './SubtitlesSection/SubtitlesSection'

export const loremText =
   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n' +
   '                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'

export const StudentPortfolio = () => {
   return (
      <UserPortfolioContainer>
         <AsideSection>
            <AsideUserBox
               name="jankowalski"
               phone="+48 393 393 393"
               email="test@przyklad.com"
               desc={`${loremText}`}
            />
         </AsideSection>
         <MainSection>
            <SubtitlesSection text="Oceny" />
            <RatingContainer>
               <div>Sekcja Ocen</div>
            </RatingContainer>
            <SubtitlesSection text={'Oczekiwanie w stosunku do zatrudnienia'} />
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
            <SubtitlesSection text={'Edukacja'} />
            <DescriptionSection>{loremText}</DescriptionSection>
            <SubtitlesSection text={'Kursy'} />
            <DescriptionSection>{loremText}</DescriptionSection>
            <SubtitlesSection text={'Doświadczenie zawodowe'} />
            <DescriptionSection>{loremText}</DescriptionSection>
            <SubtitlesSection text={'Portfolio'} />
            <LinksBox link="https://github.com" />
            <SubtitlesSection text={' Projekt w zespole Scrumowym'} />
            <LinksBox link="https://github.com" />
            <LinksBox link="https://github.com" />
            <SubtitlesSection text={' Projekt na zaliczenie'} />
            <LinksBox link="https://github.com" />
         </MainSection>
      </UserPortfolioContainer>
   )
}

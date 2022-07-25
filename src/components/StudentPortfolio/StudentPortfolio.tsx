import React from 'react'
import {
   AsideSection,
   MainSection,
   UserPortfolioContainer,
} from './StudentPortfolio.styles'
import { LinksBox } from './LinksBox/LinksBox'
import { AsideUserBox } from './AsideUserBox/AsideUserBox'
import { DescriptionBox } from './DescriptionBox/DescriptionBox'
import { RatingBox } from './RatingBox/RatingBox'
import { ExpectationBox } from './ExpectationBox/ExpectationBox'

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
            <RatingBox />
            <ExpectationBox />
            <DescriptionBox text="Edukacja" desc={loremText} />
            <DescriptionBox text="Kursy" desc={loremText} />
            <DescriptionBox text="Doświadczenie zawodowe" desc={loremText} />
            <LinksBox text={'Portfolio'} link="https://github.com" />
            <LinksBox
               text="Projekt w zespole scrumowym"
               link="https://github.com"
            />
            <LinksBox link="https://github.com" />
            <LinksBox
               text={' Projekt na zaliczenie'}
               link="https://github.com"
            />
         </MainSection>
      </UserPortfolioContainer>
   )
}

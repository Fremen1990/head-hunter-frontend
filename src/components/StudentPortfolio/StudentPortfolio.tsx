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
import { description } from '../../constants/description/description'

export const loremText =
   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n' +
   '                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'

export const StudentPortfolio = () => {
   const {
      education,
      courses,
      experience,
      portfolio,
      groupProject,
      ownProject,
   } = description.studentPortfolio

   return (
      <UserPortfolioContainer>
         <AsideSection>
            <AsideUserBox
               name="jankowalski"
               phone="+48 393 393 393"
               email="przykladowyemail@gmail.com"
               desc={`${loremText}`}
            />
         </AsideSection>
         <MainSection>
            <RatingBox />
            <ExpectationBox />
            <DescriptionBox text={education} desc={loremText} />
            <DescriptionBox text={courses} desc={loremText} />
            <DescriptionBox text={experience} desc={loremText} />
            <LinksBox text={portfolio} link="https://github.com" />
            <LinksBox text={groupProject} link="https://github.com" />
            <LinksBox link="https://github.com" />
            <LinksBox text={ownProject} link="https://github.com" />
         </MainSection>
      </UserPortfolioContainer>
   )
}

import React from 'react'
import {
   AsideSection,
   BackButton,
   BackIcon,
   CandidateCvContainer,
   MainSection,
} from './CandidateCv.styles'
import { useNavigate } from 'react-router-dom'
import { description } from '../../constants/description/description'
import { AsideCandidateCvBox } from './AsideCandidateCvBox/AsideCandidateCvBox'
import { DescriptionCandidateCvBox } from './DescriptionCandidateCvBox/DescriptionCandidateCvBox'
import { RatingCandidateCvBox } from './RatingCandidateCvBox/RatingCandidateCvBox'
import { ExpectationCandidateBox } from './ExpectationCandidateBox/ExpectationCandidateBox'
import { LinksCandidateBox } from './LinksCadidateBox/LinksCandidateBox'

export const CandidateCv = () => {
   const navigate = useNavigate()

   const { backFromModal } = description.studentPortfolio

   return (
      <CandidateCvContainer>
         <BackButton onClick={() => navigate(-1)}>
            <BackIcon />
            {backFromModal}
         </BackButton>
         <AsideSection>
            <AsideCandidateCvBox />
         </AsideSection>
         <MainSection>
            <RatingCandidateCvBox></RatingCandidateCvBox>
            <ExpectationCandidateBox></ExpectationCandidateBox>
            <DescriptionCandidateCvBox></DescriptionCandidateCvBox>
            <DescriptionCandidateCvBox></DescriptionCandidateCvBox>
            <DescriptionCandidateCvBox></DescriptionCandidateCvBox>
            <LinksCandidateBox></LinksCandidateBox>
            <LinksCandidateBox></LinksCandidateBox>
            <LinksCandidateBox></LinksCandidateBox>
         </MainSection>
      </CandidateCvContainer>
   )
}

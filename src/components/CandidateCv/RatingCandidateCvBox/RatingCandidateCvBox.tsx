import React from 'react'
import { SubtitlesCandidateSection } from '../SubtitlesCandidateSection/SubtitlesCandidateSection'
import { RatingContainer } from './RatingCandidateCvBox.styles'
import { RatingViewBox } from './RatingViewBox/RatingViewBox'

export const RatingCandidateCvBox = () => {
   return (
      <>
         <SubtitlesCandidateSection />
         <RatingContainer>
            <RatingViewBox />
            <RatingViewBox />
            <RatingViewBox />
            <RatingViewBox />
         </RatingContainer>
      </>
   )
}

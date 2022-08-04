import React from 'react'
import { RatingContainer } from './RatingBox.styles'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { RatingViewBox } from './RatingViewBox/RatingViewBox'
import { description } from '../../../constants/description/description'

export const RatingBox = () => {
   const { rating } = description.studentPortfolio
   const {
      courseEvaluation,
      activityAssessment,
      codeEvaluation,
      scrumAssessment,
   } = description.userInterview

   return (
      <>
         <SubtitlesSection text={rating} />
         <RatingContainer>
            <RatingViewBox rating={3} title={courseEvaluation} />
            <RatingViewBox rating={5} title={activityAssessment} />
            <RatingViewBox rating={2} title={codeEvaluation} />
            <RatingViewBox rating={4} title={scrumAssessment} />
         </RatingContainer>
      </>
   )
}

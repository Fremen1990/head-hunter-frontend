import React from 'react'
import { RatingContainer } from './RatingBox.styles'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { RatingViewBox } from './RatingViewBox/RatingViewBox'
import { description } from '../../../constants/description/description'
import { studentsInterface } from '../../../pages/Hr.page'

interface Props {
   ratingStars: number[]
}

export const RatingBox = ({ ratingStars }: Props) => {
   const { rating } = description.studentPortfolio
   const [
      courseCompletion,
      courseEngagement,
      projectDegree,
      teamProjectDegree,
   ] = ratingStars

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
            <RatingViewBox
               ratingStars={Number(courseCompletion)}
               title={courseEvaluation}
            />
            <RatingViewBox
               ratingStars={Number(courseEngagement)}
               title={activityAssessment}
            />
            <RatingViewBox
               ratingStars={Number(projectDegree)}
               title={codeEvaluation}
            />
            <RatingViewBox
               ratingStars={Number(teamProjectDegree)}
               title={scrumAssessment}
            />
         </RatingContainer>
      </>
   )
}

import React from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { RatingContainer } from './RatingCandidateCvBox.styles'
import { RatingViewBox } from './RatingViewBox/RatingViewBox'
import { description } from '../../../constants/description/description'

interface Props {
   ratingStars: number[]
}

export const RatingCandidateCvBox = ({ ratingStars }: Props) => {
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

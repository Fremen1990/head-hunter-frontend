import React from 'react'
import {
   RateHeading,
   RatingContainer,
   RatingViewBoxContainer,
   StarContainer,
} from './RatingViewBox.styles'
import StarRatings from 'react-star-ratings'
import { appColors } from '../../../../constants/Layout/app.colors'

interface Props {
   title: string
   ratingStars: number
}

export const RatingViewBox = ({ title, ratingStars }: Props) => (
   <RatingViewBoxContainer>
      <RateHeading>{title}</RateHeading>
      <RatingContainer>
         <p>
            <span>{ratingStars}</span>/5
         </p>
         <StarContainer>
            <StarRatings
               rating={ratingStars}
               starRatedColor="red"
               starEmptyColor={appColors.iconColor}
               starDimension="20px"
               numberOfStars={5}
               name="rating"
            />
         </StarContainer>
      </RatingContainer>
   </RatingViewBoxContainer>
)

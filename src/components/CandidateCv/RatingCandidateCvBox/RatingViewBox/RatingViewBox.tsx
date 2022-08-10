import React from 'react'
import {
   RateHeading,
   RatingContainer,
   RatingViewBoxContainer,
   StarContainer,
} from './RatingViewBox.styles'
import StarRatings from 'react-star-ratings'
import { appColors } from '../../../../constants/Layout/app.colors'

export const RatingViewBox = () => (
   <RatingViewBoxContainer>
      <RateHeading>Tytul</RateHeading>
      <RatingContainer>
         <p>
            <span>5</span>/5
         </p>
         <StarContainer>
            <StarRatings
               rating={3}
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

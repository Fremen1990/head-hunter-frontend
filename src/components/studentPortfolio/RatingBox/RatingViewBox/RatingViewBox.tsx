import React from 'react'
import StarRatings from 'react-star-ratings'
import {
   RatingContainer,
   RatingViewBoxContainer,
   StarContainer,
   RateHeading,
} from './RatingViewBox.styles'
import { appColors } from '../../../../constants/Layout/app.colors'

interface Props {
   title: string
   rating: number
}

export const RatingViewBox = (props: Props) => {
   return (
      <RatingViewBoxContainer>
         <RateHeading>{props.title}</RateHeading>
         <RatingContainer>
            <p>
               <span>{props.rating}</span>/5
            </p>
            <StarContainer>
               <StarRatings
                  rating={props.rating}
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
}

import React from 'react'
import StarRatings from 'react-star-ratings'
import {
   RatingContainer,
   RatingViewBoxContainer,
   StarContainer,
} from './RatingViewBox.styles'

interface Props {
   title: string
   rating: number
}

export const RatingViewBox = (props: Props) => {
   return (
      <RatingViewBoxContainer>
         <h2>{props.title}</h2>
         <RatingContainer>
            <p>
               <span>{props.rating}</span>/5
            </p>
            <StarContainer>
               <StarRatings
                  rating={props.rating}
                  starRatedColor="red"
                  starDimension="20px"
                  numberOfStars={5}
                  name="rating"
               />
            </StarContainer>
         </RatingContainer>
      </RatingViewBoxContainer>
   )
}

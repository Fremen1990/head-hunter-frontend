import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

export const RatingViewBoxContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex-wrap: wrap;
   width: 164px;
   gap: 10px;
   margin: 5px 40px 10px 0;
  color: ${appColors.descriptionColor};

  & h2 {
    font-size: 1.4rem;
    color: ${appColors.descriptionColor};
    margin-bottom: 10px;

    &::first-letter {
      text-transform: uppercase;
    }
  
   & p {
      font-size: 1.4rem;
      color: ${appColors.descriptionColor};
   }
`

export const RateHeading = styled.h2`
   color: ${appColors.descriptionColor}!important;
`

export const RatingContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

   & p {
      color: ${appColors.descriptionColor};
      font-size: 1.6rem;
   }

   & span {
      color: ${appColors.userPointColor};
      font-size: 1.6rem;
      margin-right: 5px;
   }
`

export const StarContainer = styled.div`
   margin-left: 10px;

   & .star-container {
      padding: 0 !important;
   }
`

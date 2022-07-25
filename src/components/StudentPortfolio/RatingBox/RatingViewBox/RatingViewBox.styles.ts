import styled from 'styled-components'

export const RatingViewBoxContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   width: 164px;
   gap: 10px;

   & p {
      font-size: 14px;
      color: #cfcfcf;
      flex-wrap: wrap;
   }
`
export const RatingContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 10px;

   & p {
      color: #cfcfcf;
      font-size: 16px;
   }

   & span {
      color: #f7f7f7;
      margin-right: 5px;
   }
`

export const StarContainer = styled.div`
   line-height: 33px;

   & .star-container {
      padding: 0 !important;
   }
`

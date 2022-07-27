import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const BoxContainer = styled.div`
   padding: 5px;
   margin: 10px 0;

   & p {
      font-size: 1.2rem;
   }

   & input {
      width: 90%;
      font-size: 1.6rem;
      border-radius: 5px;
      color: ${appColors.userPointColor};
   }
`

import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const Select = styled.select`
   font-size: 1.6rem;
   padding: 5px;
   border-radius: 5px;
   color: ${appColors.userPointColor};
   background-color: ${appColors.pageContainerColor};

   & option {
      font-size: 1.4rem;
   }
`

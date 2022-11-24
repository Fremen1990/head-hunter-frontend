import styled from 'styled-components'
import { BsPaperclip } from 'react-icons/bs'
import { appColors } from '../../../constants/Layout/app.colors'

export const ClipIcon = styled(BsPaperclip)`
   font-size: 2rem;
`

export const LinksSection = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   color: ${appColors.linksColor};

   & a {
      font-size: 1.6rem;
      color: ${appColors.linksColor};
   }
`

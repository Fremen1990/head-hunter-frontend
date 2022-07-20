import styled from 'styled-components'
import { appColors } from './app.colors'

export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 1200px;
   margin: 20px auto;
   border: 1px solid ${appColors.borderColor};
   padding: 5px;
   background-color: ${appColors.pageContainerColor};
   color: ${appColors.fontColor};
`

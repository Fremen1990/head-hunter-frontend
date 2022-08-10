import styled from 'styled-components'
import { Button } from '../../../commons/Button/Button'

export const ImportButtonsContainer = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
   justify-content: center;
   padding: 20px;
   width: 50%;
`

export const ImportContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   padding-top: 20px;
`

export const ImportButton = styled(Button)`
   background-color: green;
   font-size: 16px;
`

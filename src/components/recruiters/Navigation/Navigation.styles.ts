import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

interface Props {
   active: boolean
}

export const NavBar = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   background: transparent;
   justify-content: flex-start;
   padding: 5px;
   width: 100%;
`

export const Button = styled.button<Props>`
   width: 200px;
   background: transparent;
   font-family: Catamaran, sans-serif;
   color: ${appColors.fontColor};
   font-size: 1.7rem;
   text-align: center;
   cursor: pointer;
   border: 2px solid transparent;
   border-bottom-color: ${(props) =>
      props.active ? `${appColors.buttonColor}` : 'transparent'};

   &:first-letter {
      text-transform: uppercase;
   }

   &:hover {
      border-bottom: 2px solid ${appColors.buttonColor};
   }
`

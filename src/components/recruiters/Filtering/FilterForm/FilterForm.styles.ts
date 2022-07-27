import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

export const Form = styled.form`
  background-color: transparent;

  & h2 {
    font-size: 3rem
  }
}

& > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  background-color: transparent;

  & p {
    width: 100%;
    color: ${appColors.fontColor};
    font-size: 1.4rem;
    background-color: transparent;
  }
`

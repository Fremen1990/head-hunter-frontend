import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

export const Form = styled.form`
  background-color: transparent;

  & p {
    margin-right: 2px;
    font-size: 2rem
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

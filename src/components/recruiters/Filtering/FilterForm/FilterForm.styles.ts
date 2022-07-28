import styled from 'styled-components'
import { appColors } from '../../../../constants/Layout/app.colors'

export const Form = styled.form`
  background-color: transparent;

  & p {
    margin-right: 2px;
    font-size: 2rem
  }

  & p:first-letter {
    text-transform: uppercase;
  }
}

& > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  background-color: transparent;

  & div.internshipBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;

    & label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      background-color: transparent;
      font-size: 1.4rem;
      padding: 3px;
      cursor: pointer;

      & input[type='radio' ] {
        appearance: none;
        background-color: transparent;
        width: 1.15rem;
        height: 1.15rem;
        border: 0.15rem solid ${appColors.borderColor};
        border-radius: 50%;
        margin-right: 5px;
        transition: 0.3s;

        &:checked {
          background-color: ${appColors.buttonColor};
        }
      }
    }
  }

  & p {
    width: 100%;
    color: ${appColors.fontColor};
    font-size: 1.4rem;
    background-color: transparent;
  }

`

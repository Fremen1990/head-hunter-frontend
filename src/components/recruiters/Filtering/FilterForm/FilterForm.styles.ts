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
export const ButtonBox = styled.div`
   justify-content: flex-end;
   margin-top: 20px;

   & .annualBtn {
      padding: 5px 10px;
      font-size: 1.4rem;
      text-transform: capitalize;
      color: ${appColors.fontColor};
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
         border-color: ${appColors.fontColor};
      }
   }
`
export const ClearBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 5px;
  padding: 5px 10px;
  font-size: 1.4rem;
  color: ${appColors.fontColor};
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: rgba(30, 144, 255, 0.3);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: ${appColors.fontColor};
  }
}
`

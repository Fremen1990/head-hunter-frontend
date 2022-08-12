import styled from 'styled-components'
import { device } from '../../../constants/mediaQueries'
import { appColors } from '../../../constants/Layout/app.colors'

export const TextArea = styled.textarea`
  width: 95%;
  height: 160px;
  margin: 10px;
  border: 2px solid ${appColors.fontColor};
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 10px;
  color: ${appColors.userPointColor};
  background-color: transparent;

  :hover {
    border-color: yellow;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px green;
    border-color: green;
  }

  ${device.desktop} {
    height: 200px;
  }
}

`

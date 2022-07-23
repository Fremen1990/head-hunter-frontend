import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { appColors } from '../../constants/Layout/app.colors'

import { device } from '../../constants/mediaQueries'

interface Props {
   err: {} | undefined
}

export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   height: 50%;
   padding: 5px;
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px;

   & button {
      align-self: flex-end;
   }
`

export const Input = styled.input<Props>`
   width: 150px;
   ${(props) => props.theme.main}
   border: 1px solid ${({ err }) =>
      err ? `${appColors.buttonColor}` : 'transparent'};
   padding: 5px;
   color: ${appColors.fontColor};
   background-color: ${appColors.pageContainerColor};
   height: 40px;
   margin: 10px 0;

   ${device.tablet} {
      width: 250px;
   }

   ${device.desktop} {
      width: 350px;
   }

   &:focus {
      background-color: rgb(256, 256, 256);
      color: #000;
   }
`

export const ForgetPasswordLink = styled(NavLink)`
   color: ${appColors.fontColor};
   align-self: flex-end;
   margin-bottom: 10px;
   padding: 0 10px;
   text-decoration: none;
`

export const InputWrap = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   user-select: none;

   & div {
      position: absolute;
      width: 80px;
      height: 35px;
      left: -100px;
      top: 13px;
      text-align: start;
      font-size: 8px;
      padding: 6px 5px;
      background: ${appColors.buttonColor};
      color: ${appColors.fontColor};
      border-radius: 6px;

      ${device.tablet} {
         width: 150px;
         left: -170px;
         font-size: 12px;
      }

      ${device.desktop} {
         width: 200px;
         left: -220px;
         font-size: 14px;
      }

      &:after {
         content: '';
         border-left: 15px solid ${appColors.buttonColor};
         border-top: 15px solid transparent;
         border-bottom: 15px solid transparent;
         position: absolute;
         right: -13.5px;
         top: 2.5px;
      }
   }
`

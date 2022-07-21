import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Props {
   err: {} | undefined
}

export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   width: 50vw;
   height: 50vh;
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 350px;
   padding: 10px;

   & p {
      color: white;
      align-self: flex-start;
   }

   & button {
      color: #f7f7f7;
      border: none;
      font-size: 1rem;
      padding: 5px 15px;
      margin: 5px;
      background-color: #e02735;
      cursor: pointer;
      align-self: flex-end;
   }
`

export const Input = styled.input<Props>`
   width: 350px;
   ${(props) => props.theme.main}
   border: 1px solid ${({ err }) => (err ? 'red' : 'transparent')};
   padding: 5px;
   color: #f7f7f7;
   background-color: #292a2b;
   height: 40px;
   margin: 10px 0;

   &:focus {
      background-color: rgb(256, 256, 256);
      color: #000;
   }
`

export const ForgetPasswordLink = styled(NavLink)`
   color: #f7f7f7;
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
      width: 200px;
      height: 35px;
      left: -220px;
      top: 13px;
      font-size: 12px;
      padding: 8px 5px;
      background: #e02735;
      color: #fff;
      border-radius: 6px;

      &:after {
         content: '';
         border-left: 15px solid #e02735;
         border-top: 15px solid transparent;
         border-bottom: 15px solid transparent;
         position: absolute;
         right: -14px;
         top: 2.5px;
      }
   }
`

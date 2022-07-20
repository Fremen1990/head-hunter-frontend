import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

   & input {
      width: 350px;
      border: none;
      padding: 5px;
      color: #f7f7f7;
      background-color: #292a2b;
      height: 40px;
      margin: 10px 0;

      &:focus {
         background-color: rgb(256, 256, 256);
         color: #000;
      }
   }

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
      background-color: red;
      cursor: pointer;
      align-self: flex-end;
   }
`

export const ForgetPasswordLink = styled(NavLink)`
   color: #f7f7f7;
   align-self: flex-end;
   margin-bottom: 10px;
   padding: 0 10px;
   text-decoration: none;
`

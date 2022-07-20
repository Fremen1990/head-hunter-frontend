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
   margin-top: 5px;
   width: 90%;
   padding: 10px;

   & input {
      width: 100%;
      border: none;
      padding: 5px;
      color: #e1e1fe;
      background-color: rgba(255, 255, 255, 0.15);
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
      color: white;
      border: none;
      font-size: 1rem;
      padding: 5px 15px;
      margin: 5px;
      background-color: red;
      cursor: pointer;
   }
`

export const ForgetPasswordLink = styled(NavLink)`
   color: white;
   align-self: flex-end;
   margin-bottom: 10px;
   padding: 0 10px;
   text-decoration: none;
`

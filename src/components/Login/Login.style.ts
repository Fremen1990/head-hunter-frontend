import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../constants/mediaQueries'

export const LoginContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
   width: 250px;
   color: white;

   ${device.mobile} {
      width: 350px;
   }

   ${device.desktop} {
      width: 400px;
   }

   & img {
      width: 35%;
   }
`
export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 5px;
   width: 100%;
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
`
export const SectionContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;
   width: 100%;

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
export const RegisterLink = styled(Link)`
   color: white;
   margin-left: 5px;
   text-decoration: underline;
`
export const ForgetPasswordLink = styled(Link)`
   color: white;
   align-self: flex-end;
   margin-bottom: 10px;
   padding: 0 10px;
   text-decoration: none;
`

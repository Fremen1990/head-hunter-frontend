import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { Logo } from '../components/commons/Logo/Logo'
import { Button } from '../components/commons/Button/Button'
import { description } from '../constants/description/description'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HomePage = () => {
   const Shaky = styled.button`
      font-size: 24px;
      font-weight: 800;

      &:hover {
         animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
         transform: translate3d(0, 0, 0);
         perspective: 1000px;
      }
   `
   // if not logged in this page, if logged in there will be header, and three big buttons:  HR STUDENT ADMIN and only one will be availalbe based on logged on role
   return (
      <LoginPageContainer>
         <Logo logoWidth={'50vh'} />

         <Shaky>
            <NavLink to="/login">
               <Button buttonTitle={description.buttons.logIn} />
            </NavLink>
         </Shaky>
      </LoginPageContainer>
   )
}

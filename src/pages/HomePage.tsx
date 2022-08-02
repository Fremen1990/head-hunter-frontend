import React from 'react'
// eslint-disable-next-line no-unused-vars
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { Logo } from '../components/commons/Logo/Logo'
import { Button } from '../components/commons/Button/Button'
import { description } from '../constants/description/description'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { useSelector } from 'react-redux'

export const HomePage = () => {
   const { role } = useSelector((state) => state.user)

   const Shaky = styled.button`
      border-radius: 10px;

      &:hover {
         animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
         transform: translate3d(0, 0, 0);
         perspective: 1000px;
      }
   `
   return (
      <>
         <Header />
         <LoginPageContainer style={{ height: '90vh' }}>
            <Logo logoWidth={'50vh'} />
            <Shaky>
               <NavLink
                  to={
                     role === 'student'
                        ? '/user'
                        : role === 'hr'
                        ? '/hr'
                        : role === 'admin'
                        ? '/admin'
                        : '/login'
                  }
               >
                  <Button
                     style={{ fontSize: 24 }}
                     buttonTitle={
                        role === 'student'
                           ? 'Go to Student Page'
                           : role === 'hr'
                           ? 'Go to candidates list'
                           : role === 'admin'
                           ? 'Go to admin command ceter'
                           : description.buttons.logIn
                     }
                  />
               </NavLink>
            </Shaky>
         </LoginPageContainer>
      </>
   )
}

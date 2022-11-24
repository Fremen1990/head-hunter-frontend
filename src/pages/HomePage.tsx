import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { Button } from '../components/commons/Button/Button'
import { description } from '../constants/description/description'
import { NavLink } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { useAppSelector } from '../app/hooks'
import { HomeLogo, Shaky } from '../constants/Layout/HomePage.styles'
import { RootState } from '../app/store'

export const HomePage = () => {
   const { role } = useAppSelector((state: RootState) => state.user)

   return (
      <>
         <Header />

         <LoginPageContainer style={{ height: '90vh' }}>
            <HomeLogo data-cy="home-logo">
               <img
                  src="/assets/home_logo/Mega.png"
                  alt="MegaK Logo"
                  style={{ height: '25vh' }}
               />
               <img
                  src="/assets/home_logo/Head_Hunter.png"
                  alt="Head Hunter text"
               />
               <img src="/assets/home_logo/goal.png" alt="viewfinder" />
            </HomeLogo>
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
                     style={{ fontSize: '24px' }}
                     buttonTitle={
                        role === 'student'
                           ? 'Strona Studenta'
                           : role === 'hr'
                           ? 'Strona Rekrutera'
                           : role === 'admin'
                           ? 'Centrum Zarządzania Wszechświatem 👽'
                           : description.buttons.logIn
                     }
                  />
               </NavLink>
            </Shaky>
         </LoginPageContainer>
      </>
   )
}

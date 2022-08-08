import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { Button } from '../components/commons/Button/Button'
import { description } from '../constants/description/description'
import { NavLink } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { useAppSelector } from '../app/hooks'
import { UserState } from '../features/user/userSlice'
import { HomeLogo, Shaky } from '../constants/Layout/HomePage.styles'

export const HomePage = () => {
   const { role } = useAppSelector((state: UserState) => state.user)

   return (
      <>
         {role ? <Header /> : null}
         <LoginPageContainer
            style={role ? { height: '90vh' } : { height: '100vh' }}
         >
            <HomeLogo>
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
                     style={{ fontSize: 24 }}
                     buttonTitle={
                        role === 'student'
                           ? 'Go to Student Page'
                           : role === 'hr'
                           ? 'Go to candidates list'
                           : role === 'admin'
                           ? 'Go to admin command center'
                           : description.buttons.logIn
                     }
                  />
               </NavLink>
            </Shaky>
         </LoginPageContainer>
      </>
   )
}

import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
// import { Logo } from '../components/commons/Logo/Logo'
import { Button } from '../components/commons/Button/Button'
import { description } from '../constants/description/description'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { useSelector } from 'react-redux'
// import { appColors } from '../constants/Layout/app.colors'

export const HomePage = () => {
   // @ts-ignore
   const { role } = useSelector((state) => state.user)

   const Shaky = styled.button`
      border-radius: 10px;

      &:hover {
         animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
         transform: translate3d(0, 0, 0);
         perspective: 1000px;
      }
   `

   const HomeLogo = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
   `

   return (
      <>
         {role ? <Header /> : null}
         <LoginPageContainer
            style={role ? { height: '90vh' } : { height: '100vh' }}
         >
            {/* <Logo logoWidth={'50vh'} /> */}
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

import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { Logo } from '../components/commons/Logo/Logo'
import { Activation } from '../components/Activation/Activation'

export const ActivationPage = () => (
   <LoginPageContainer>
      <Logo logoWidth={'124px'} />
      <Activation />
   </LoginPageContainer>
)

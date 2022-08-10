import React from 'react'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { LoginForm } from '../components/UserForm/Login.form'
import { Logo } from '../components/commons/Logo/Logo'

export const LoginPage = () => (
   <LoginPageContainer>
      <Logo logoWidth={'124px'} />
      <LoginForm />
   </LoginPageContainer>
)

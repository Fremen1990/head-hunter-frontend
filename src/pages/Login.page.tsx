import React from 'react'
import { LoginPageContainer } from '../components/Login/Login.style'
import { LoginForm } from '../components/UserForm/Login.form'
import { Logo } from '../components/Header/Logo/Logo'

export interface ILoginPageProps {}

export const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
   return (
      <LoginPageContainer>
         <Logo />
         <LoginForm />
      </LoginPageContainer>
   )
}

import React from 'react'
import { Logo } from '../components/commons/Logo/Logo'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { ForgotPasswordForm } from '../components/UserForm/ForgotPassword.form'

export const ForgotPasswordPage = () => {
   return (
      <LoginPageContainer>
         <Logo logoWidth={'124px'} />
         <ForgotPasswordForm />
      </LoginPageContainer>
   )
}

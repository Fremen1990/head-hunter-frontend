import React from 'react'
import { ChangePasswordLogo } from '../components/commons/Logo/Logo'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { ForgotPasswordForm } from '../components/UserForm/ForgotPassword.form'

export const ForgotPasswordPage = () => {
   return (
      <LoginPageContainer>
         <ChangePasswordLogo logoWidth={'300px'} />
         <ForgotPasswordForm />
      </LoginPageContainer>
   )
}

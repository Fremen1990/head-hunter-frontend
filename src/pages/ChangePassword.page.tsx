import React from 'react'
import { ChangePasswordLogo } from '../components/commons/Logo/Logo'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { ChangePasswordForm } from '../components/UserForm/ChangePassword.form'

export const ChangePasswordPage = () => {
   return (
      <LoginPageContainer>
         <ChangePasswordLogo logoWidth={'300px'} />
         <ChangePasswordForm />
      </LoginPageContainer>
   )
}

import React from 'react'
import { Logo } from '../components/commons/Logo/Logo'
import { LoginPageContainer } from '../components/UserForm/Login/Login.styles'
import { ChangePasswordForm } from '../components/UserForm/ChangePassword.form'

export const ChangePasswordPage = () => {
   return (
      <LoginPageContainer>
         <Logo logoWidth={'124px'} />
         <ChangePasswordForm />
      </LoginPageContainer>
   )
}

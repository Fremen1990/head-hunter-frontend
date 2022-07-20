import React from 'react'
import { ForgetPasswordLink, Form, FormContainer } from './Form.styles'

export const LoginForm = () => {
   return (
      <FormContainer>
         <Form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Hasło" />
            <ForgetPasswordLink to="#">Zapomniałeś hasła?</ForgetPasswordLink>
            <button>Zaloguj się</button>
         </Form>
      </FormContainer>
   )
}

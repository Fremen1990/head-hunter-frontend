import React from 'react'
import ContainerElement from '../components/Container'

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
   return (
      <ContainerElement>
         <label>Login</label>
         <input type="email" />
         <input type="password" />
      </ContainerElement>
   )
}

export default LoginPage

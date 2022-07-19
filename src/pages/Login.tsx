import React, { ChangeEvent, FormEvent, useState } from 'react'
import ContainerElement from '../components/Container'
import {
   ForgetPasswordLink,
   FormContainer,
   LoginContainer,
   RegisterLink,
   SectionContainer,
} from '../components/Login/Login.style'

export interface ILoginPageProps {}

export const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   const handleClick = async (e: FormEvent) => {
      e.preventDefault()
      setEmail('')
      setPassword('')
   }

   return (
      <ContainerElement>
         <LoginContainer>
            <img
               src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
               alt="logo"
            />
            <FormContainer onSubmit={handleClick}>
               <input
                  type="email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     setEmail(e.target.value)
                  }
                  value={email}
                  placeholder="E-mail"
                  required
               />
               <input
                  type="password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     setPassword(e.target.value)
                  }
                  value={password}
                  placeholder="Hasło"
                  required
               />
               <ForgetPasswordLink to="#">
                  Zapomniałeś hasła?
               </ForgetPasswordLink>
               <SectionContainer>
                  <div>
                     <span>Nie masz konta?</span>
                     <RegisterLink to="#">Zarejestruj się</RegisterLink>
                  </div>
                  <button>Zaloguj się</button>
               </SectionContainer>
            </FormContainer>
         </LoginContainer>
      </ContainerElement>
   )
}
export default LoginPage

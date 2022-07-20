import React from 'react'
import { ForgetPasswordLink, Form, FormContainer } from './Form.styles'
import { useForm } from 'react-hook-form'

type Login = {
   email: string
   password: string
}

export const LoginForm = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm<Login>()

   const onSubmit = (data: Login) => {
      console.log(data)
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="email"
               {...register('email', { required: 'To pole jest wymagane' })}
               placeholder="E-mail"
            />
            <p>{errors.email?.message}</p>
            <input
               type="password"
               {...register('password', { required: 'To pole jest wymagane' })}
               placeholder="Hasło"
            />
            <p>{errors.password?.message}</p>
            <ForgetPasswordLink to="#">Zapomniałeś hasła?</ForgetPasswordLink>
            <button>Zaloguj się</button>
         </Form>
      </FormContainer>
   )
}

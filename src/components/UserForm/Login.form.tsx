import React from 'react'
import { ForgetPasswordLink, Form, FormContainer } from './Form.styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Login = {
   email: string
   password: string
}

export const LoginForm = () => {
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm<Login>()

   const onSubmit = (data: Login) => {
      if (data.email && data.password) {
         navigate('/')
      }
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="email"
               {...register('email', {
                  required: 'Email jest wymagany',
                  pattern: {
                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'Podaj swój adres email',
                  },
               })}
               placeholder="E-mail"
            />
            <p>{errors.email?.message}</p>

            <input
               type="password"
               {...register('password', { required: 'Hasło jest wymagane' })}
               placeholder="Hasło"
            />
            <p>{errors.password?.message}</p>
            <ForgetPasswordLink to="#">Zapomniałeś hasła?</ForgetPasswordLink>
            <button>Zaloguj się</button>
         </Form>
      </FormContainer>
   )
}

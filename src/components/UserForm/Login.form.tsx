import React from 'react'
import {
   ForgetPasswordLink,
   Form,
   FormContainer,
   Input,
   InputWrap,
} from './Form.styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { emailValidate } from '../../constants/validation'
import { Button } from '../commons/Button/Button'

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
         navigate('/user')
      }
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrap>
               <Input
                  err={errors.email}
                  type="email"
                  {...register('email', {
                     required: 'Email jest wymagany',
                     pattern: {
                        value: emailValidate,
                        message: 'Podaj swój adres email',
                     },
                  })}
                  placeholder="E-mail"
               />
               {errors.email && <div>{errors.email.message}</div>}
            </InputWrap>
            <InputWrap>
               <Input
                  err={errors.password}
                  type="password"
                  {...register('password', { required: 'Hasło jest wymagane' })}
                  placeholder="Hasło"
               />
               {errors.password && <div>{errors.password.message}</div>}
            </InputWrap>
            <ForgetPasswordLink to="#">Zapomniałeś hasła?</ForgetPasswordLink>
            <Button buttonTitle="Zaloguj się" />
         </Form>
      </FormContainer>
   )
}

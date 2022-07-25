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
import { description } from '../../constants/description/description'

type Login = {
   email: string
   password: string
}

export const LoginForm = () => {
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, password },
      },
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
                  err={email}
                  type="email"
                  {...register('email', {
                     required: `${description.form.requiredEmail}`,
                     pattern: {
                        value: emailValidate,
                        message: `${description.form.messageEmail}`,
                     },
                  })}
                  placeholder={description.inputsFields.emailPlaceholder}
               />
               {email && <div>{email.message}</div>}
            </InputWrap>
            <InputWrap>
               <Input
                  err={password}
                  type="password"
                  {...register('password', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={description.inputsFields.passwordPlaceholder}
               />
               {password && <div>{password.message}</div>}
            </InputWrap>
            <ForgetPasswordLink to="#">
               {description.buttons.forgotPass}
            </ForgetPasswordLink>
            <Button buttonTitle={description.buttons.logIn} />
         </Form>
      </FormContainer>
   )
}

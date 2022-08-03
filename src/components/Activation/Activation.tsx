import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../commons/Button/Button'
import { ErrorMessage, Form, Input } from './Activation.styles'
import { description } from '../../constants/description/description'
import { emailValidate } from '../../constants/validation'

type ActivationType = {
   email: string
   password: string
}

export const Activation = () => {
   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, password },
      },
   } = useForm<ActivationType>()

   const navigate = useNavigate()

   const submit = () => {
      navigate('/hr')
   }

   return (
      <>
         <Form onSubmit={handleSubmit(submit)}>
            <Input
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
            {email && <ErrorMessage>{email.message}</ErrorMessage>}

            <Input
               type="text"
               {...register('password', {
                  required: `${description.form.requiredPass}`,
               })}
               placeholder={description.inputsFields.passwordPlaceholder}
            />
            {password && <ErrorMessage>{password.message}</ErrorMessage>}
            <Button buttonTitle={description.buttons.confirmDate} />
         </Form>
      </>
   )
}

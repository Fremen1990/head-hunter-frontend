import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../commons/Button/Button'
import { Form, Input } from './Activation.styles'
import { description } from '../../constants/description/description'

type ActivationType = {
   email: string
   password: string
}

export const Activation = () => {
   const { handleSubmit } = useForm<ActivationType>()

   const navigate = useNavigate()

   const submit = () => {
      navigate('/hr')
   }

   return (
      <>
         <Form onSubmit={handleSubmit(submit)}>
            <Input
               type="email"
               placeholder={description.inputsFields.emailPlaceholder}
            />

            <Input
               type="text"
               placeholder={description.inputsFields.passwordPlaceholder}
            />
            <Button buttonTitle="Potwierdz dane" />
         </Form>
      </>
   )
}

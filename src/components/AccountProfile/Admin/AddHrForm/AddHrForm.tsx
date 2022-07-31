import React from 'react'
import { useForm } from 'react-hook-form'
import { emailValidate } from '../../../../constants/validation'
import { description } from '../../../../constants/description/description'
import { Form, FormTitle, Input, Label } from './AddHrForm.styles'
import { Button } from '../../../commons/Button/Button'

interface formInterface {
   email: string
   fullName: string
   company: string
   maxReservedStudents: number
}

export const AddHrForm = () => {
   const {
      register,
      formState: {
         errors: { email, fullName, company, maxReservedStudents },
      },
   } = useForm<formInterface>()

   const sendForm = (e: any) => {
      e.preventDefault()
   }

   return (
      <Form onSubmit={sendForm}>
         <FormTitle>Dodaj nowego HR</FormTitle>

         <Label>
            <p>Adres e-mail:</p>
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
            />
            {email && <div>{email.message}</div>}
         </Label>
         <Label>
            <p>Imię i nazwisko:</p>
            <Input
               err={fullName}
               type="text"
               {...register('fullName', {
                  required: `${description.form.requiredFullName}`,
               })}
            />
            {fullName && <div>{fullName.message}</div>}
         </Label>
         <Label>
            <p>Nazwa firmy:</p>
            <Input
               err={company}
               type="text"
               {...register('company', {
                  required: `${description.form.requiredCompany}`,
               })}
            />
            {company && <div>{company.message}</div>}
         </Label>
         <Label>
            <p>Maks. liczba osób, jakie może dodać do rozmowy jednocześnie:</p>
            <Input
               err={maxReservedStudents}
               type="number"
               min="1"
               max="999"
               {...register('maxReservedStudents', {
                  required: `${description.form.requiredMaxReservedStudents}`,
               })}
            />
            {maxReservedStudents && <div>{maxReservedStudents.message}</div>}
         </Label>
         <Button buttonTitle="Dodaj nowego HR" />
      </Form>
   )
}

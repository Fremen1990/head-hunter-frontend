import React from 'react'
import { useForm } from 'react-hook-form'
import { emailValidate } from '../../../../constants/validation'
import { description } from '../../../../constants/description/description'
import { Form, FormTitle, Input, InputWrap, Label } from './AddHrForm.styles'
import { Button } from '../../../commons/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RiCloseCircleFill as CloseIcon } from 'react-icons/ri'

interface formInterface {
   email: string
   fullName: string
   company: string
   maxReservedStudents: number
}

export const AddHrForm = () => {
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, fullName, company, maxReservedStudents },
      },
   } = useForm<formInterface>()

   const sendForm = (data: formInterface) => {
      if (
         data.email &&
         data.company &&
         data.fullName &&
         data.maxReservedStudents
      ) {
         navigate('/')
      }
   }

   return (
      <Form onSubmit={handleSubmit(sendForm)}>
         <FormTitle>Dodaj nowego HR</FormTitle>
         <Label>
            <p>Adres e-mail:</p>
            <InputWrap>
               <Input
                  err={email}
                  type="email"
                  {...register('email', {
                     required: `${description.form.requiredField}`,
                     pattern: {
                        value: emailValidate,
                        message: `${description.form.messageEmail}`,
                     },
                  })}
               />
               {email && (
                  <div>
                     <CloseIcon className="close-icon" /> {email.message}
                  </div>
               )}
            </InputWrap>
         </Label>
         <Label>
            <p>Imię i nazwisko:</p>
            <InputWrap>
               <Input
                  err={fullName}
                  type="text"
                  {...register('fullName', {
                     required: `${description.form.requiredField}`,
                  })}
               />
               {fullName && (
                  <div>
                     <CloseIcon className="close-icon" /> {fullName.message}
                  </div>
               )}
            </InputWrap>
         </Label>
         <Label>
            <p>Nazwa firmy:</p>
            <InputWrap>
               <Input
                  err={company}
                  type="text"
                  {...register('company', {
                     required: `${description.form.requiredField}`,
                  })}
               />
               {company && (
                  <div>
                     <CloseIcon className="close-icon" /> {company.message}
                  </div>
               )}
            </InputWrap>
         </Label>
         <Label>
            <p>
               Maks. liczba osób, jakie może dodać do {'"Do rozmowy"'}{' '}
               jednocześnie:
            </p>
            <InputWrap>
               <Input
                  err={maxReservedStudents}
                  type="number"
                  {...register('maxReservedStudents', {
                     required: `${description.form.requiredField}`,
                     min: {
                        value: 1,
                        message: `${description.form.messageMaxReservedStudents}`,
                     },
                     max: {
                        value: 999,
                        message: `${description.form.messageMaxReservedStudents}`,
                     },
                  })}
               />

               {maxReservedStudents && (
                  <div>
                     <CloseIcon className="close-icon" />{' '}
                     {maxReservedStudents.message}
                  </div>
               )}
            </InputWrap>
         </Label>
         <Button buttonTitle={description.buttons.addHr} />
      </Form>
   )
}

import React from 'react'
import { useForm } from 'react-hook-form'
import { emailValidate } from '../../../../constants/validation'
import { description } from '../../../../constants/description/description'

interface formInterface {
   email: string
   fullName: string
   company: string
   maxReservedStudents: number
}

export const AddHumanResources = () => {
   const {
      register,
      formState: {
         errors: { email, fullName, company, maxReservedStudents },
      },
   } = useForm<formInterface>()

   return (
      <form>
         <label>
            <p>Adres e-mail:</p>
            <input
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
         </label>
         <label>
            <p>Imię i nazwisko:</p>
            <input
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
            {fullName && <div>{fullName.message}</div>}
         </label>
         <label>
            <p>Nazwa firmy:</p>
            <input
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
            {company && <div>{company.message}</div>}
         </label>
         <label>
            <p>Maks. liczba osób, jakie może dodać do rozmowy jednocześnie:</p>
            <input
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
            {maxReservedStudents && <div>{maxReservedStudents.message}</div>}
         </label>
         <button />
      </form>
   )
}

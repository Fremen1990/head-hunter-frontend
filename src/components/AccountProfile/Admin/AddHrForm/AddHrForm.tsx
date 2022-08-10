import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { description } from '../../../../constants/description/description'
import {
   Form,
   FormTitle,
   Input,
   InputWrap,
   Label,
   LabelScore,
} from './AddHrForm.styles'
import { Button } from '../../../commons/Button/Button'
import { useDispatch } from 'react-redux'
import { addOneHr } from '../../../../features/admin/adminActions'

export const AddHrForm = () => {
   const { handleSubmit } = useForm<any>()

   const dispatch = useDispatch()

   const initialForm = {
      email: '',
      pwd: '',
      fullName: '',
      company: '',
      maxReservedStudents: 0,
   }

   const [form, setForm] = useState<any>(initialForm)

   const updateForm = (key: string, value: string | number) => {
      setForm((form) => ({
         ...form,
         [key]: value,
      }))
   }

   const sendForm = async () => {
      await dispatch(await addOneHr(form))
      await setForm(initialForm)
   }

   return (
      <Form onSubmit={handleSubmit(sendForm)}>
         <FormTitle>Dodaj nowego HR</FormTitle>

         <Label>
            <FormTitle>*Adres e-mail</FormTitle>
            <InputWrap>
               <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('email', e.target.value)
                  }
                  placeholder="company@domain.com"
                  value={form.email}
                  type="email"
                  title="email"
               />
            </InputWrap>
         </Label>

         <Label>
            <p>*Hasło</p>
            <InputWrap>
               <Input
                  placeholder="strong-password123!@#$!"
                  value={form.pwd}
                  type="text"
                  title="pwd"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('pwd', e.target.value)
                  }
               />
            </InputWrap>
         </Label>

         <Label>
            <p>*Pełna nazwa</p>
            <InputWrap>
               <Input
                  placeholder="HR Full Name"
                  value={form.fullName}
                  title="company"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('fullName', e.target.value)
                  }
                  type="text"
               />
            </InputWrap>
         </Label>

         <Label>
            <p>*Nazwa firmy</p>
            <InputWrap>
               <Input
                  placeholder="Company Name S.A."
                  value={form.company}
                  title="company"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('company', e.target.value)
                  }
                  type="text"
               />
            </InputWrap>
         </Label>

         <LabelScore>
            <p>*Maksymalna liczba studentów do rezerwacji</p>
            <InputWrap>
               <Input
                  value={form.maxReservedStudents}
                  title="maxReservedStudents"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('maxReservedStudents', e.target.value)
                  }
                  type="number"
                  min="0"
                  max="999"
               />
            </InputWrap>
         </LabelScore>
         <Button buttonTitle={description.buttons.addHr} />
      </Form>
   )
}

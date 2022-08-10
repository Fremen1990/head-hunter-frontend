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
   LabelScoreWrap,
} from './AddStudentForm.styles'
import { Button } from '../../../commons/Button/Button'
import { useDispatch } from 'react-redux'
import { addOneStudent } from '../../../../features/admin/adminActions'

interface HrInterface {
   email: string
   fullName: string
   company: string
   maxReservedStudents: number
}

export const AddStudentForm = () => {
   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, fullName, company, maxReservedStudents },
      },
   } = useForm<HrInterface>()

   const dispatch = useDispatch()

   const initialForm = {
      email: '',
      pwd: '',
      role: 'student',
      courseCompletion: 0,
      courseEngagement: 0,
      projectDegree: 0,
      teamProjectDegree: 0,
      bonusProjectUrls: [],
   }

   const [form, setForm] = useState<any>(initialForm)

   const updateForm = (key: string, value: string | number) => {
      setForm((form) => ({
         ...form,
         [key]: value,
      }))
   }

   const sendForm = async () => {
      await dispatch(await addOneStudent(form))
      await setForm(initialForm)
   }

   return (
      <Form onSubmit={handleSubmit(sendForm)}>
         <FormTitle>Dodaj nowego Studenta</FormTitle>

         <Label>
            <FormTitle>*Adres e-mail</FormTitle>
            <InputWrap>
               <Input
                  placeholder="student@domain.com"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('email', e.target.value)
                  }
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
                  placeholder="StrongPassword1234!@#$"
                  value={form.pwd}
                  err={fullName}
                  type="text"
                  title="pwd"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('pwd', e.target.value)
                  }
               />
            </InputWrap>
         </Label>

         <Label>
            <p>*Rola</p>
            <InputWrap>
               <Input
                  value="student"
                  title="role"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('role', e.target.value)
                  }
                  err={fullName}
                  type="text"
                  placeholder="student"
               />
            </InputWrap>
         </Label>

         <LabelScoreWrap>
            <LabelScore>
               <p>*Ocena kursu</p>
               <InputWrap>
                  <Input
                     value={form.courseCompletion}
                     title="courseCompletion"
                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('courseCompletion', e.target.value)
                     }
                     err={maxReservedStudents}
                     type="number"
                     min="0"
                     max="5"
                  />
               </InputWrap>
            </LabelScore>

            <LabelScore>
               <p>*Ocena zaangażowania</p>
               <InputWrap>
                  <Input
                     value={form.courseEngagement}
                     title="courseEngagement"
                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('courseEngagement', e.target.value)
                     }
                     err={maxReservedStudents}
                     type="number"
                     min="0"
                     max="5"
                  />
               </InputWrap>
            </LabelScore>

            <LabelScore>
               <p>*Ocena projektu</p>
               <InputWrap>
                  <Input
                     value={form.projectDegree}
                     title="projectDegree"
                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('projectDegree', e.target.value)
                     }
                     err={maxReservedStudents}
                     type="number"
                     min="0"
                     max="5"
                  />
               </InputWrap>
            </LabelScore>

            <LabelScore>
               <p>*Ocena grupy</p>
               <InputWrap>
                  <Input
                     value={form.teamProjectDegree}
                     title="teamProjectDegree"
                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('teamProjectDegree', e.target.value)
                     }
                     err={maxReservedStudents}
                     type="number"
                     min="0"
                     max="5"
                  />
               </InputWrap>
            </LabelScore>
         </LabelScoreWrap>

         <Label>
            <p>*Bonus project URLs</p>
            <InputWrap>
               <Input
                  placeholder="https://github.com/Fremen1990/head-hunter-frontend"
                  value={form.bonusProjectUrls}
                  title="bonusProjectUrls"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('bonusProjectUrls', Array(e.target.value))
                  }
                  err={fullName}
                  type="text"
               />
            </InputWrap>
         </Label>
         <Button buttonTitle={description.buttons.addStudent} />
      </Form>
   )
}

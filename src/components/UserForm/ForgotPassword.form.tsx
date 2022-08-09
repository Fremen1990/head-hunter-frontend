import React from 'react'
import { Form, FormContainer, Input, InputWrap } from './Form.styles'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'
import { description } from '../../constants/description/description'
import { Button } from '../commons/Button/Button'
import { emailValidate } from '../../constants/patterns/pattern_validation'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { sendResetLink } from '../../features/user/userActions'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordForm = () => {
   const { isFetching, errorMessage } = useAppSelector(
      (state: UserState) => state.user
   )

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email },
      },
   } = useForm()

   const onSubmit = async (data: any) => {
      const { email } = data
      if (email) {
         // @ts-ignore
         await dispatch(sendResetLink({ email }))
         navigate('/auth/change-password')
      }
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <p style={{ color: 'red' }}> {errorMessage}</p>}
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
            </InputWrap>

            <Button
               buttonTitle={
                  isFetching ? 'loading...' : description.buttons.sentResetToken
               }
            />
         </Form>
      </FormContainer>
   )
}

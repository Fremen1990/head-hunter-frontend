import React from 'react'
import {
   ForgetPasswordText,
   Form,
   FormContainer,
   Input,
   InputWrap,
} from './Form.styles'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'
import { description } from '../../constants/description/description'
import { Button } from '../commons/Button/Button'
import { emailValidate } from '../../constants/patterns/pattern_validation'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { sendResetLink } from '../../features/user/userActions'

export const ForgotPasswordForm = () => {
   const { isFetching, errorMessage, success } = useAppSelector(
      (state: UserState) => state.user
   )

   const dispatch = useDispatch()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email },
      },
   } = useForm()

   const onSubmit = async (data: any) => {
      const { email } = data
      // @ts-ignore
      dispatch(sendResetLink({ email }))
   }

   if (success) {
      setTimeout(() => {
         window.location.href = '/auth/change-password'
      }, 2000)
   }

   return (
      <FormContainer>
         <ForgetPasswordText>
            Zapomniałeś hasła? Zresetuj je podając swój adres e-mail
         </ForgetPasswordText>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
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

            <Button
               buttonTitle={
                  isFetching ? 'loading...' : description.buttons.sentResetToken
               }
            />
         </Form>
      </FormContainer>
   )
}

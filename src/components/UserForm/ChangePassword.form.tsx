import React from 'react'
import { Form, FormContainer, Input, InputWrap } from './Form.styles'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'
import { description } from '../../constants/description/description'
import { Button } from '../commons/Button/Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { changePassword } from '../../features/user/userActions'
import { emailValidate } from '../../constants/patterns/pattern_validation'

export const ChangePasswordForm = () => {
   const { isFetching, errorMessage, success } = useAppSelector(
      (state: UserState) => state.user
   )

   const dispatch = useDispatch()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, resetPasswordToken, newPwd, newPwdConfirm },
      },
   } = useForm()

   const onSubmit = async (data: any) => {
      const { email, resetPasswordToken, newPwd, newPwdConfirm } = data
      if (email && resetPasswordToken && newPwd && newPwdConfirm) {
         // @ts-ignore
         dispatch(
            changePassword({ email, resetPasswordToken, newPwd, newPwdConfirm })
         )
      }
   }

   if (success) {
      setTimeout(() => {
         window.location.href = '/login'
      }, 2000)
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate={false}>
            {success && (
               <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>
            )}
            {errorMessage && (
               <p style={{ color: 'red', textAlign: 'center' }}>
                  {errorMessage}
               </p>
            )}
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

            <InputWrap>
               <Input
                  err={resetPasswordToken}
                  type="string"
                  {...register('resetPasswordToken', {
                     required: `${description.form.requiredToken}`,
                  })}
                  placeholder={description.inputsFields.tokenPlaceholder}
               />
            </InputWrap>

            <InputWrap>
               <Input
                  err={newPwd}
                  type="password"
                  {...register('newPwd', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={description.inputsFields.newPasswordPlaceholder}
               />
               {newPwd && <div>{newPwd.message}</div>}
            </InputWrap>

            <InputWrap>
               <Input
                  err={newPwdConfirm}
                  type="password"
                  {...register('newPwdConfirm', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={
                     description.inputsFields.newPasswordConfirmPlaceholder
                  }
               />
               {newPwdConfirm && <div>{newPwdConfirm.message}</div>}
            </InputWrap>
            <Button
               buttonTitle={
                  isFetching ? 'loading...' : description.buttons.changePwd
               }
            />
         </Form>
      </FormContainer>
   )
}

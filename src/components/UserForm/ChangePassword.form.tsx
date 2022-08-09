import React from 'react'
import { Form, FormContainer, Input, InputWrap } from './Form.styles'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'
import { description } from '../../constants/description/description'
import { Button } from '../commons/Button/Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { changePassword } from '../../features/user/userActions'

export const ChangePasswordForm = () => {
   const { isFetching, errorMessage } = useAppSelector(
      (state: UserState) => state.user
   )

   const dispatch = useDispatch()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { resetPasswordToken, newPwd, newPwdConfirm },
      },
   } = useForm()

   const onSubmit = async (data: any) => {
      const { resetPasswordToken, newPwd, newPwdConfirm } = data
      if (resetPasswordToken && newPwd && newPwdConfirm) {
         // @ts-ignore
         await dispatch(
            changePassword({ resetPasswordToken, newPwd, newPwdConfirm })
         )
      }
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <p style={{ color: 'red' }}> {errorMessage}</p>}

            <InputWrap>
               <Input
                  err={resetPasswordToken}
                  type="string"
                  {...register('resetPasswordToken', {
                     required: `Token jest wymagany`,
                  })}
                  placeholder={`token`}
               />
            </InputWrap>

            <InputWrap>
               <Input
                  err={newPwd}
                  type="password"
                  {...register('newPwd', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={description.inputsFields.passwordPlaceholder}
               />
            </InputWrap>

            <InputWrap>
               <Input
                  err={newPwdConfirm}
                  type="password"
                  {...register('newPwdConfirm', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={description.inputsFields.passwordPlaceholder}
               />
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

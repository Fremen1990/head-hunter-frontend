import React, { SyntheticEvent } from 'react'
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
   const { isFetching, errorMessage, status } = useAppSelector(
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

   // const onSubmit = async (data: any) => {
   //    const { email } = data
   //    if (email) {
   //       // @ts-ignore
   //       await dispatch(sendResetLink({ email }))
   //       navigate('/auth/change-password')
   //    } else {
   //       console.log('User not found')
   //    }
   // }

   // const onSubmit = async (data: any, e: any) => {
   //    const {email} = await data
   //    if(e.status === 404) {
   //       console.log("dupa")
   //    } else if (email) {
   //       // @ts-ignore
   //       await dispatch(sendResetLink({ email }))
   //       navigate('/auth/change-password')
   //    }
   // }

   const onSubmit = async (data: any) => {
      const { email } = data
      // @ts-ignore
      dispatch(sendResetLink({ email }))
   }

   return (
      <FormContainer>
         <h1 style={{ fontSize: '38px', color: 'white' }}>
            Potrzebny jest twój adres e-mail na który wyślemy token
         </h1>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate={false}>
            {errorMessage && <p style={{ color: 'red' }}> {errorMessage}</p>}
            {status && <p style={{ color: 'red' }}> {status}</p>}
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
                  placeholder="Twój adres e-mail"
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

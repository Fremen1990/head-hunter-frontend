import React from 'react'
import {
   ForgetPasswordLink,
   Form,
   FormContainer,
   Input,
   InputWrap,
} from './Form.styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { emailValidate } from '../../constants/patterns/pattern_validation'
import { Button } from '../commons/Button/Button'
import { description } from '../../constants/description/description'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../features/user/userActions'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'

type Login = {
   email: string
   password: string
}

export const LoginForm = () => {
   // const { isFetching, errorMessage, id } = useSelector((state) => state.user)
   const { isFetching, errorMessage, id } = useAppSelector(
      (state: UserState) => state.user
   )

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: {
         errors: { email, password },
      },
   } = useForm<Login>()

   const onSubmit = async (data: Login) => {
      const { email, password } = data
      if (email && password) {
         dispatch(userLogin({ email, pwd: password }))
      }
   }

   if (id) {
      navigate('/')
   }

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
               {email && <div>{email.message}</div>}
            </InputWrap>
            <InputWrap>
               <Input
                  err={password}
                  type="password"
                  {...register('password', {
                     required: `${description.form.requiredPass}`,
                  })}
                  placeholder={description.inputsFields.passwordPlaceholder}
               />
               {password && <div>{password.message}</div>}
            </InputWrap>
            <ForgetPasswordLink to="#">
               {description.buttons.forgotPass}
            </ForgetPasswordLink>

            <Button
               buttonTitle={
                  isFetching ? 'loading...' : description.buttons.logIn
               }
            />
         </Form>
      </FormContainer>
   )
}

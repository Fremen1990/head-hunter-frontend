import React, { useEffect } from 'react'
import {
   ForgetPasswordLink,
   Form,
   FormContainer,
   Input,
   InputWrap,
} from './Form.styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { emailValidate } from '../../constants/validation'
import { Button } from '../commons/Button/Button'
import { description } from '../../constants/description/description'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/user/userActions'

type Login = {
   email: string
   password: string
}

export const LoginForm = () => {
   // eslint-disable-next-line no-unused-vars
   const { loading, userInfo, error } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const successMessage = () =>
      toast.success('Login Successful 👍', {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      })

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
         // @ts-ignore
         dispatch(userLogin({ email, pwd: password }))
         successMessage()
         setTimeout(() => {
            navigate('/user')
         }, 2000)
      }
   }

   // redirect authenticated user to profile screen
   useEffect(() => {
      if (userInfo) {
         navigate('/user-profile')
      }
   }, [navigate, userInfo])

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <InputWrap>
               <Input
                  value="student@test.com"
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
                  value="Password123!"
                  placeholder={description.inputsFields.passwordPlaceholder}
               />
               {password && <div>{password.message}</div>}
            </InputWrap>
            <ForgetPasswordLink to="#">
               {description.buttons.forgotPass}
            </ForgetPasswordLink>

            <Button
               buttonTitle={loading ? 'loading...' : description.buttons.logIn}
            />

            <ToastContainer
               position="top-center"
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
         </Form>
      </FormContainer>
   )
}

import React, { ChangeEvent, useState } from 'react'
import { SubtitlesSection } from '../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { Button } from '../commons/Button/Button'
import { InputTextBox } from './Inputs/InputTextBox/InputTextBox'
import { SelectBox } from './SelectBox/SelectBox'
import { NumberInputBox } from './Inputs/NumberInputBox/NumberInputBox'
import { TextAreaBox } from './TextAreaBox/TextAreaBox'
import { UrlBox } from './UrlBox/UrlBox'
import { FormCVInterface } from '../../types/formInterface'
import { description } from '../../constants/description/description'

import {
   AsideSection,
   BackButton,
   EditExpectationBoxContainer,
   EditModalContainer,
   Form,
   MainSection,
} from './EditStudentPortfolio.styles'
import {
   canTakeApprenticeshipOptions,
   expectedContractTypeOptions,
   expectedTypeOfWork,
} from '../../constants/secletOptions'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userUpdateProfile } from '../../features/user/userActions'
import { useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'
import { Spinner } from '../commons/Spinner/Spinner'
import { toast } from 'react-toastify'
import { TextArea } from './TextAreaBox/TextAreaBox.styles'

export const EditStudentPortfolio = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { userDetails } = useAppSelector((state: RootState) => state.user)

   const [portfolioUrls, setPortfolioUrls] = useState<string>('')
   const [projectUrls, setProjectUrls] = useState<string>('')
   const [form, setForm] = useState<FormCVInterface>({
      studentStatus: userDetails.studentStatus,
      canTakeApprenticeship: userDetails.canTakeApprenticeship,
      expectedContractType: userDetails.expectedContractType,
      expectedSalary: userDetails.expectedSalary,
      expectedTypeOfWork: userDetails.expectedTypeOfWork,
      monthsOfCommercialExp: userDetails.monthsOfCommercialExp,
      targetWorkCity: userDetails.targetWorkCity,
      firstName: userDetails?.firstName,
      lastName: userDetails.lastName,
      githubUserName: userDetails.githubUserName,
      tel: userDetails.tel,
      bio: userDetails.bio,
      education: userDetails.education,
      courses: userDetails.courses,
      workExperience: userDetails.workExperience,
      portfolioUrls: userDetails.portfolioUrls,
      projectUrls: userDetails.projectUrls,
   })

   const {
      handleSubmit,
      register,
      formState: {
         errors: {
            firstName,
            lastName,
            githubUserName,
            tel,
            expectedSalary,
            targetWorkCity,
            monthsOfCommercialExp,
         },
      },
   } = useForm()

   const handlePortfolioClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      setPortfolioUrls('')
      setForm((form) => ({
         ...form,
         portfolioUrls: [...form.portfolioUrls, portfolioUrls],
      }))
   }

   const handleProjectClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      setProjectUrls('')
      setForm((form) => ({
         ...form,
         projectUrls: [...form.projectUrls, projectUrls],
      }))
   }

   const updateForm = (key: string, value: string | number) => {
      setForm((form) => ({
         ...form,
         [key]: value,
      }))
   }

   const updatePortfolioForm = (e: ChangeEvent<HTMLInputElement>) => {
      setPortfolioUrls(e.target.value)
   }

   const updateProjectChange = (e: ChangeEvent<HTMLInputElement>) => {
      setProjectUrls(e.target.value)
   }

   const [loading, setLoading] = useState(false)
   const submit = () => {
      dispatch(userUpdateProfile(form))
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
         toast.success('Profil uzupełniony! 💪')
         navigate('/user/profile')
      }, 1000)
   }

   const {
      aboutMe,
      educationDescribe,
      coursesDescribe,
      experienceDescribe,
      expectation,
   } = description.studentPortfolio
   const {
      preferWork,
      contractType,
      practice,
      targetPlace,
      experience,
      targetSalary,
   } = description.userInterview

   const { backToProfile } = description.buttons

   const {
      githubNickDesc,
      lastNameDesc,
      firstNameDesc,
      telDesc,
      firstNameErrorMessage,
      githubNickErrorMessage,
      lastNameErrorMessage,
      telErrorMessage,
      targetWorkCityErrorMessage,
      expectedSalaryErrorMessage,
      monthsOfCommercialExpErrorMessage,
   } = description.editCv

   const { addProjectBtn, sendFormBtn } = description.editCv
   return (
      <EditModalContainer>
         <Form onSubmit={handleSubmit(submit)}>
            <BackButton onClick={() => navigate('/user')}>
               {backToProfile}
            </BackButton>
            <AsideSection>
               <InputTextBox
                  value={form.firstName}
                  placeholder="Imię"
                  title={firstNameDesc}
                  layout="simple"
                  error={firstName}
                  validation={register('firstName', {
                     maxLength: {
                        value: 18,
                        message: firstNameErrorMessage,
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('firstName', e.target.value)
                  }
               />
               <InputTextBox
                  value={form.lastName}
                  placeholder="Nazwisko"
                  title={lastNameDesc}
                  layout="simple"
                  error={lastName}
                  validation={register('lastName', {
                     maxLength: {
                        value: 30,
                        message: lastNameErrorMessage,
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('lastName', e.target.value)
                  }
               />
               <InputTextBox
                  value={form.githubUserName}
                  placeholder="GitHub User Name"
                  title={githubNickDesc}
                  layout="simple"
                  error={githubUserName}
                  validation={register('githubUserName', {
                     maxLength: {
                        value: 60,
                        message: githubNickErrorMessage,
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('githubUserName', e.target.value)
                  }
               />
               <InputTextBox
                  value={form.tel}
                  placeholder="Numer telefonu"
                  title={telDesc}
                  layout="simple"
                  error={tel}
                  validation={register('tel', {
                     maxLength: {
                        value: 20,
                        message: telErrorMessage,
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('tel', e.target.value)
                  }
               />
               <label>
                  <p>{aboutMe}</p>
                  <TextArea
                     value={form.bio}
                     placeholder="Napisz coś o sobie..."
                     cols={25}
                     name="bio"
                     onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        updateForm('bio', e.target.value)
                     }
                  />
               </label>
            </AsideSection>
            <MainSection>
               <label>
                  <SubtitlesSection text={expectation} />
                  <EditExpectationBoxContainer>
                     <InputTextBox
                        value={form.targetWorkCity}
                        placeholder="Docelowe miasto"
                        title={targetPlace}
                        layout="extended"
                        error={targetWorkCity}
                        validation={register('targetWorkCity', {
                           maxLength: {
                              value: 30,
                              message: targetWorkCityErrorMessage,
                           },
                        })}
                        method={(e: ChangeEvent<HTMLInputElement>) =>
                           updateForm('targetWorkCity', e.target.value)
                        }
                     />
                     <InputTextBox
                        value={form.expectedSalary}
                        placeholder="Oczekiwania finansowe"
                        title={targetSalary}
                        layout="extended"
                        error={expectedSalary}
                        validation={register('expectedSalary', {
                           maxLength: {
                              value: 5,
                              message: expectedSalaryErrorMessage,
                           },
                        })}
                        method={(e: ChangeEvent<HTMLInputElement>) =>
                           updateForm('expectedSalary', e.target.value)
                        }
                     />
                     <SelectBox
                        title={preferWork}
                        options={expectedTypeOfWork}
                        method={(e: ChangeEvent<HTMLSelectElement>) =>
                           updateForm('expectedTypeOfWork', e.target.value)
                        }
                     />
                     <SelectBox
                        title={contractType}
                        options={expectedContractTypeOptions}
                        method={(e: ChangeEvent<HTMLSelectElement>) =>
                           updateForm('expectedContractType', e.target.value)
                        }
                     />
                     <NumberInputBox
                        value={form.monthsOfCommercialExp}
                        title={experience}
                        layout="extended"
                        error={monthsOfCommercialExp}
                        validation={register('monthsOfCommercialExp', {
                           maxLength: {
                              value: 11,
                              message: monthsOfCommercialExpErrorMessage,
                           },
                        })}
                        method={(e: ChangeEvent<HTMLInputElement>) =>
                           updateForm(
                              'monthsOfCommercialExp',
                              Number(e.target.value)
                           )
                        }
                     />
                     <SelectBox
                        title={practice}
                        options={canTakeApprenticeshipOptions}
                        method={(e: ChangeEvent<HTMLSelectElement>) =>
                           updateForm('canTakeApprenticeship', e.target.value)
                        }
                     />
                  </EditExpectationBoxContainer>
               </label>
               <TextAreaBox
                  placeholder="Opisz swoją edukację"
                  value={form.education}
                  title={educationDescribe}
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('education', e.target.value)
                  }
               />
               <TextAreaBox
                  placeholder="Wymień kursy które ukończyłeś/ukończyłaś"
                  value={form.courses}
                  title={coursesDescribe}
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('courses', e.target.value)
                  }
               />
               <TextAreaBox
                  placeholder="Opisz swoje doświadczenie zawodowe"
                  value={form.workExperience}
                  title={experienceDescribe}
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('workExperience', e.target.value)
                  }
               />
               <UrlBox
                  text="Portfolio"
                  urlBoxArray={form.portfolioUrls}
                  value={portfolioUrls}
                  inputMethod={updatePortfolioForm}
                  btnMethod={handlePortfolioClick}
                  btnText={addProjectBtn}
               />
               <UrlBox
                  text="Projekt zaliczeniowy"
                  urlBoxArray={form.projectUrls}
                  value={projectUrls}
                  btnText={addProjectBtn}
                  btnMethod={handleProjectClick}
                  inputMethod={updateProjectChange}
               />
               <Button buttonTitle={sendFormBtn} />
            </MainSection>
         </Form>
         {loading && <Spinner />}
      </EditModalContainer>
   )
}

import React, { ChangeEvent, useState } from 'react'
import { SubtitlesSection } from '../StudentPortfolio/SubtitlesSection/SubtitlesSection'
import { Button } from '../commons/Button/Button'
import { InputTextBox } from './InputTextBox/InputTextBox'
import { SelectBox } from './SelectBox/SelectBox'
import { NumberInputBox } from './NumberInputBox/NumberInputBox'
import { TextAreaBox } from './TextAreaBox/TextAreaBox'
import { UrlBox } from './UrlBox/UrlBox'
import { FormCVInterface } from '../../constants/types/formInterface'
import { description } from '../../constants/description/description'
import { PageContainer } from '../../constants/Layout/Container.styles'
import {
   Form,
   MainSection,
   AsideSection,
   EditExpectationBoxContainer,
   BackButton,
} from './EditStudentPortfolio.styles'
import {
   canTakeApprenticeshipOptions,
   expectedContractTypeOptions,
   expectedTypeWorkOptions,
} from '../../constants/secletOptions'
import { useForm } from 'react-hook-form'
import { emailValidate } from '../../constants/validation'

export const EditStudentPortfolio = () => {
   const [portfolioUrls, setPortfolioUrls] = useState<string>('')
   const [projectUrls, setProjectUrls] = useState<string>('')
   const [form, setForm] = useState<FormCVInterface>({
      canTakeApprenticeship: 'Nie',
      expectedContractType: 'Brak preferencji',
      expectedSalary: '',
      expectedTypeWork: 'Bez znaczenia',
      monthsOfCommercialExp: 0,
      targetWorkCity: '',
      email: '',
      firstName: '',
      lastName: '',
      githubUserName: '',
      tel: '',
      bio: '',
      education: '',
      courses: '',
      workExperience: '',
      portfolioUrls: [],
      projectUrls: [],
   })

   const {
      handleSubmit,
      register,
      formState: {
         errors: {
            firstName,
            lastName,
            githubUserName,
            email,
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

   const submit = () => {
      console.log(form)
   }

   const { aboutMe } = description.studentPortfolio
   const {
      preferWork,
      contractType,
      practice,
      targetPlace,
      experience,
      targetSalary,
   } = description.userInterview

   const { addProjectBtn, sendFormBtn } = description.editCv
   return (
      <PageContainer>
         <Form onSubmit={handleSubmit(submit)}>
            <BackButton>Wróc</BackButton>
            <AsideSection>
               <InputTextBox
                  title="Imię"
                  layout="simple"
                  error={firstName}
                  validation={register('firstName', {
                     maxLength: {
                        value: 18,
                        message: 'Imię może mieć maksymalnie 18 znaków',
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('firstName', e.target.value)
                  }
               />
               <InputTextBox
                  title="Nazwisko"
                  layout="simple"
                  error={lastName}
                  validation={register('lastName', {
                     maxLength: {
                        value: 30,
                        message: 'Nazwisko może mieć maksymalnie 30 znaków',
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('lastName', e.target.value)
                  }
               />
               <InputTextBox
                  title="Nick na githubie"
                  layout="simple"
                  error={githubUserName}
                  validation={register('githubUserName', {
                     maxLength: {
                        value: 60,
                        message: 'Nazwisko może mieć maksymalnie 60 znaków',
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('githubUserName', e.target.value)
                  }
               />
               <InputTextBox
                  title="E-mail"
                  layout="simple"
                  error={email}
                  validation={register('emial', {
                     pattern: {
                        value: emailValidate,
                        message: 'Email musi zawierać @',
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('email', e.target.value)
                  }
               />
               <InputTextBox
                  title="Telefon:"
                  layout="simple"
                  error={tel}
                  validation={register('tel', {
                     maxLength: {
                        value: 15,
                        message: 'Telefon może mieć maksymalnie 15 znaków',
                     },
                  })}
                  method={(e: ChangeEvent<HTMLInputElement>) =>
                     updateForm('tel', e.target.value)
                  }
               />
               <label>
                  <p>{aboutMe}</p>
                  <textarea
                     name="bio"
                     onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        updateForm('bio', e.target.value)
                     }
                  />
               </label>
            </AsideSection>
            <MainSection>
               <label>
                  <SubtitlesSection text="Oczekiwanie w stosunku do zatrudnienia" />
                  <EditExpectationBoxContainer>
                     <InputTextBox
                        title={targetPlace}
                        layout="extended"
                        error={targetWorkCity}
                        validation={register('targetWorkCity', {
                           maxLength: {
                              value: 30,
                              message:
                                 'Docelowe miasto może mieć maksymalnie 30 znaków',
                           },
                        })}
                        method={(e: ChangeEvent<HTMLInputElement>) =>
                           updateForm('targetWorkCity', e.target.value)
                        }
                     />
                     <InputTextBox
                        title={targetSalary}
                        layout="extended"
                        error={expectedSalary}
                        validation={register('expectedSalary', {
                           maxLength: {
                              value: 5,
                              message:
                                 'Wynagrodzenie może mieć maksymalnie 5 znaków',
                           },
                        })}
                        method={(e: ChangeEvent<HTMLInputElement>) =>
                           updateForm('expectedSalary', e.target.value)
                        }
                     />
                     <SelectBox
                        title={preferWork}
                        options={expectedTypeWorkOptions}
                        method={(e: ChangeEvent<HTMLSelectElement>) =>
                           updateForm('expectedTypeWork', e.target.value)
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
                        title={experience}
                        layout="extended"
                        error={monthsOfCommercialExp}
                        validation={register('monthsOfCommercialExp', {
                           maxLength: {
                              value: 11,
                              message:
                                 'Doświadczenie w programowaniu może mieć maksymalnie 11 znaków',
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
                  title="Edukacja"
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('education', e.target.value)
                  }
               />
               <TextAreaBox
                  title="Kursy"
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('courses', e.target.value)
                  }
               />
               <TextAreaBox
                  title="Doświadczenie zawodowe"
                  method={(e: ChangeEvent<HTMLTextAreaElement>) =>
                     updateForm('workExperience', e.target.value)
                  }
               />
               <UrlBox
                  urlBoxArray={form.portfolioUrls}
                  value={portfolioUrls}
                  inputMethod={updatePortfolioForm}
                  btnMethod={handlePortfolioClick}
                  btnText={addProjectBtn}
               />
               <UrlBox
                  urlBoxArray={form.projectUrls}
                  value={projectUrls}
                  btnText={addProjectBtn}
                  btnMethod={handleProjectClick}
                  inputMethod={updateProjectChange}
               />
               <Button buttonTitle={sendFormBtn} />
            </MainSection>
         </Form>
      </PageContainer>
   )
}

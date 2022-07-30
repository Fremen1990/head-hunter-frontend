import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import {
   Form,
   MainSection,
   AsideSection,
   EditExpectationBoxContainer,
} from './EditStudentPortfolio.styles'
import { description } from '../../constants/description/description'
import { SubtitlesSection } from '../StudentPortfolio/SubtitlesSection/SubtitlesSection'
import { Button } from '../commons/Button/Button'
import { Header } from '../Header/Header'
import { PageContainer } from '../../constants/Layout/Container.styles'
import { InputTextBox } from './InputTextBox/InputTextBox'
import { SelectBox } from './SelectBox/SelectBox'
import { NumberInputBox } from './NumberInputBox/NumberInputBox'
import { TextAreaBox } from './TextAreaBox/TextAreaBox'

interface formInterface {
   email: string
   firstName: string
   lastName: string
   githubUserName: string
   tel: string
   bio: string
   education: string
   expectedTypeWork: string
   targetWorkCity: string
   expectedContractType: string
   expectedSalary: string
   canTakeApprenticeship: string
   monthsOfCommercialExp: number
   courses: string
   workExperience: string
   portfolioUrls: string[]
   projectUrls: string[]
}

export const EditStudentPortfolio = () => {
   const [portfolioUrls, setPortfolioUrls] = useState<string>('')
   const [projectUrls, setProjectUrls] = useState<string>('')
   const [form, setForm] = useState<formInterface>({
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

   const updateForm = (key: string, value: string) => {
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

   const submit = (e: SyntheticEvent) => {
      e.preventDefault()
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

   return (
      <>
         <Header />
         <PageContainer>
            <Form onSubmit={submit}>
               <AsideSection>
                  <InputTextBox
                     layout="simple"
                     title="Imię"
                     method={(e) => updateForm('firstName', e.target.value)}
                  />
                  <InputTextBox
                     layout="simple"
                     title="Nazwisko"
                     method={(e) => updateForm('lastName', e.target.value)}
                  />
                  <InputTextBox
                     layout="simple"
                     title="Nick na githubie"
                     method={(e) =>
                        updateForm('githubUserName', e.target.value)
                     }
                  />
                  <InputTextBox
                     layout="simple"
                     title="E-mail"
                     method={(e) => updateForm('email', e.target.value)}
                  />
                  <InputTextBox
                     layout="simple"
                     title="Telefon:"
                     method={(e) => updateForm('tel', e.target.value)}
                  />
                  <label>
                     <p>{aboutMe}</p>
                     <textarea
                        name="bio"
                        onChange={(e) => updateForm('bio', e.target.value)}
                     />
                  </label>
               </AsideSection>
               <MainSection>
                  <label>
                     <SubtitlesSection text="Oczekiwanie w stosunku do zatrudnienia " />
                     <EditExpectationBoxContainer>
                        <InputTextBox
                           layout="extended"
                           method={(e) =>
                              updateForm('targetWorkCity', e.target.value)
                           }
                           title={targetPlace}
                        />
                        <InputTextBox
                           layout="extended"
                           method={(e) =>
                              updateForm('expectedSalary', e.target.value)
                           }
                           title={targetSalary}
                        />
                        <SelectBox
                           title={preferWork}
                           method={(e) =>
                              updateForm('expectedTypeWork', e.target.value)
                           }
                           options={[
                              { value: 'Bez znaczenia', text: 'Bez znaczenia' },
                              { value: 'Na miejscu', text: 'Na miejscu' },
                              {
                                 value: 'Gotowość do przeprawadzki',
                                 text: 'Gotowość do przeprawadzki',
                              },
                              {
                                 value: 'Wyłącznie zdalnie',
                                 text: 'Wyłącznie zdalnie',
                              },
                              { value: 'Hybrydowo', text: 'Hybrydowo' },
                           ]}
                        />
                        <SelectBox
                           title={contractType}
                           method={(e) =>
                              updateForm('expectedContractType', e.target.value)
                           }
                           options={[
                              { value: 'Brak', text: 'Brak preferecji' },
                              { value: 'UoP', text: 'Tylko Umowa o pracę' },
                              { value: 'b2v', text: 'Możliwe B2B' },
                              {
                                 value: 'UZ/UoD',
                                 text: 'Możliwe umowa o zlecenie/umowa o dzieło',
                              },
                           ]}
                        />
                        <NumberInputBox
                           layout="extended"
                           method={(e) =>
                              updateForm(
                                 'monthsOfCommercialExp',
                                 e.target.value
                              )
                           }
                           title={experience}
                        />
                        <SelectBox
                           title={practice}
                           options={[
                              { value: 'nie', text: 'Nie' },
                              { value: 'tak', text: 'Tak' },
                           ]}
                           method={(e) =>
                              updateForm(
                                 'canTakeApprenticeship',
                                 e.target.value
                              )
                           }
                        />
                     </EditExpectationBoxContainer>
                  </label>
                  <TextAreaBox
                     method={(e) => updateForm('education', e.target.value)}
                     title="Edukacja"
                  />
                  <TextAreaBox
                     title="Kursy"
                     method={(e) => updateForm('courses', e.target.value)}
                  />
                  <TextAreaBox
                     title="Doświadczenie zawodowe"
                     method={(e) =>
                        updateForm('workExperience', e.target.value)
                     }
                  />
                  <label>
                     <SubtitlesSection text="Portfolio" />
                     {form.portfolioUrls.map(
                        (project: string, index: number) => (
                           <p key={index}>{project}</p>
                        )
                     )}
                     <input
                        type="text"
                        name="portfolioUrls"
                        value={portfolioUrls}
                        onChange={(e) => updatePortfolioForm(e)}
                     />
                     <button onClick={(e) => handlePortfolioClick(e)}>
                        Dodaj nowy projekt
                     </button>
                  </label>
                  <label>
                     <SubtitlesSection text="Projekt na zaliczenie" />
                     {form.projectUrls.map((project: string, index: number) => (
                        <p key={index}>{project}</p>
                     ))}
                     <input
                        type="text"
                        name="projectUrls"
                        value={projectUrls}
                        onChange={(e) => updateProjectChange(e)}
                     />
                     <button onClick={handleProjectClick}>
                        Dodaj nowy projekt
                     </button>
                  </label>
                  <Button buttonTitle="Wyślij zmiany" />
               </MainSection>
            </Form>
         </PageContainer>
      </>
   )
}

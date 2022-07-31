import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import {
   Form,
   MainSection,
   AsideSection,
   EditExpectationBoxContainer,
   ModalContainer,
   BackButton,
} from './EditStudentPortfolio.styles'
import { description } from '../../constants/description/description'
import { SubtitlesSection } from '../../components/StudentPortfolio/SubtitlesSection/SubtitlesSection'
import { Button } from '../../components/commons/Button/Button'
import { Header } from '../../components/Header/Header'
import { PageContainer } from '../../constants/Layout/Container.styles'
import { InputTextBox } from './InputTextBox/InputTextBox'
import { SelectBox } from './SelectBox/SelectBox'
import { NumberInputBox } from './NumberInputBox/NumberInputBox'
import { TextAreaBox } from './TextAreaBox/TextAreaBox'
import {
   canTakeApprenticeshipOptions,
   expectedContractTypeOptions,
   expectedTypeWorkOptions,
} from '../../constants/secletOptions'

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

   const { addProjectBtn, sendFormBtn } = description.editCv
   return (
      <ModalContainer>
         <Header />
         <PageContainer>
            <Form onSubmit={submit}>
               <BackButton>Wróc</BackButton>
               <AsideSection>
                  <InputTextBox
                     title="Imię"
                     layout="simple"
                     method={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('firstName', e.target.value)
                     }
                  />
                  <InputTextBox
                     title="Nazwisko"
                     layout="simple"
                     method={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('lastName', e.target.value)
                     }
                  />
                  <InputTextBox
                     title="Nick na githubie"
                     layout="simple"
                     method={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('githubUserName', e.target.value)
                     }
                  />
                  <InputTextBox
                     title="E-mail"
                     layout="simple"
                     method={(e: ChangeEvent<HTMLInputElement>) =>
                        updateForm('email', e.target.value)
                     }
                  />
                  <InputTextBox
                     title="Telefon:"
                     layout="simple"
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
                           method={(e: ChangeEvent<HTMLInputElement>) =>
                              updateForm('targetWorkCity', e.target.value)
                           }
                        />
                        <InputTextBox
                           title={targetSalary}
                           layout="extended"
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
                           method={(e: ChangeEvent<HTMLInputElement>) =>
                              updateForm(
                                 'monthsOfCommercialExp',
                                 e.target.value
                              )
                           }
                        />
                        <SelectBox
                           title={practice}
                           options={canTakeApprenticeshipOptions}
                           method={(e: ChangeEvent<HTMLSelectElement>) =>
                              updateForm(
                                 'canTakeApprenticeship',
                                 e.target.value
                              )
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                           updatePortfolioForm(e)
                        }
                     />
                     <button onClick={handlePortfolioClick}>
                        {addProjectBtn}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                           updateProjectChange(e)
                        }
                     />
                     <button onClick={handleProjectClick}>
                        {addProjectBtn}
                     </button>
                  </label>
                  <Button buttonTitle={sendFormBtn} />
               </MainSection>
            </Form>
         </PageContainer>
      </ModalContainer>
   )
}

import React, { useState } from 'react'
import {
   Form,
   MainSection,
   AsideSection,
   EditExpectationBoxContainer,
} from './EditStudentPortfolio.styles'
import { description } from '../../constants/description/description'
import { SubtitlesSection } from '../StudentPortfolio/SubtitlesSection/SubtitlesSection'
import { EditExpectationBox } from './EditExpectationBox/EditExpectationBox'
import { Button } from '../commons/Button/Button'
import { Header } from '../Header/Header'
import { PageContainer } from '../../constants/Layout/Container.styles'

// const portfolioProjects: string[] = ['http:github', 'http:github'];

export const EditStudentPortfolio = () => {
   // const {preferWork} = description.userInterview
   const { aboutMe } = description.studentPortfolio

   const [title, setTitle] = useState('')
   const [portfolioProjects, setPortfolioProjects] = useState<string[]>([])

   const handleClick = (e: any) => {
      e.preventDefault()
      setPortfolioProjects((portfolioProjects) => [...portfolioProjects, title])
      console.log(portfolioProjects)
   }

   const {
      preferWork,
      targetPlace,
      contractType,
      targetSalary,
      practice,
      experience,
   } = description.userInterview

   return (
      <>
         <Header />
         <PageContainer>
            <Form>
               <AsideSection>
                  <label>
                     <p>Imię:</p>
                     <input type="text" />
                  </label>
                  <label>
                     <p>Nazwisko:</p>
                     <input type="text" />
                  </label>
                  <label>
                     <p>Nick na githubie:</p>
                     <input type="text" />
                  </label>
                  <label>
                     <p>Telefon:</p>
                     <input type="text" />
                  </label>
                  <label>
                     <p>{aboutMe}</p>
                     <textarea />
                  </label>
                  <Button buttonTitle="Wyślij zmiany" />
               </AsideSection>
               <MainSection>
                  <label>
                     <SubtitlesSection text="Oczekiwanie w stosunku do zatrudnienia" />
                     <EditExpectationBoxContainer>
                        <EditExpectationBox title={preferWork} />
                        <EditExpectationBox title={targetPlace} />
                        <EditExpectationBox title={contractType} />
                        <EditExpectationBox title={targetSalary} />
                        <EditExpectationBox title={practice} />
                        <EditExpectationBox title={experience} />
                     </EditExpectationBoxContainer>
                  </label>
                  <label>
                     <SubtitlesSection text="Edukacja" />
                     <textarea />
                  </label>
                  <label>
                     <SubtitlesSection text="Kursy" />
                     <textarea />
                  </label>
                  <label>
                     <SubtitlesSection text="Doświadczenie zawodowe" />
                     <textarea />
                  </label>
                  <label>
                     <SubtitlesSection text="Portfolio" />
                     {portfolioProjects.map(
                        (project: string, index: number) => (
                           <p key={index}>{project}</p>
                        )
                     )}
                     <input
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                     />
                     <button onClick={(e) => handleClick(e)}>
                        Dodaj nowy projekt
                     </button>
                  </label>
               </MainSection>
            </Form>
         </PageContainer>
      </>
   )
}

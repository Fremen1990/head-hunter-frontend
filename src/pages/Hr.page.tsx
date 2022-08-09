import React, { useEffect, useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'
import { FilterSection } from '../components/recruiters/FilterSection/FilterSection'
import { useDispatch } from 'react-redux'
import { fetchHrCandidates, fetchHrInterviews } from '../features/hr/hrActions'
import { useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'

export const HrPage = () => {
   const [available, setAvailable] = useState([])
   const [interview, setInterview] = useState([])
   const [filterState, setFilterState] = useState({
      value: 'availableStudents',
   })
   const dispatch = useDispatch()
   const { isFetching } = useAppSelector((state) => state.hr)

   const updateFilter = (value: string) => {
      if (value !== filterState.value) {
         setFilterState({ value })
      }
   }

   const updateStudentsTab = async () => {
      if (filterState.value === 'availableStudents') {
         const availableStudents = await dispatch(fetchHrCandidates())
         setAvailable(availableStudents.payload)
      } else {
         const interviewStudents = await dispatch(fetchHrInterviews())
         setInterview(interviewStudents.payload)
      }
   }

   useEffect(() => {
      updateStudentsTab()
   }, [filterState])

   return (
      <>
         <Header />
         <PageContainer>
            <NavigationBar filterState={updateFilter} />
            <FilterSection />
            {filterState.value === 'availableStudents' ? (
               <UserResultsContainer
                  layout={'simple'}
                  students={available}
                  refreshStudents={updateStudentsTab}
               />
            ) : (
               <UserResultsContainer
                  layout={'extended'}
                  students={interview}
                  refreshStudents={updateStudentsTab}
               />
            )}
         </PageContainer>
      </>
   )
}

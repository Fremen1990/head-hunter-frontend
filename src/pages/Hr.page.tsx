import React, { useEffect, useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'
import { FilterSection } from '../components/recruiters/FilterSection/FilterSection'
import { useDispatch } from 'react-redux'
import { fetchHrCandidates } from '../features/hr/hrActions'

export const HrPage = () => {
   const [available, setAvailable] = useState([])
   const [interview, setInterview] = useState([])
   const [filterState, setFilterState] = useState({
      value: 'availableStudents',
   })
   const dispatch = useDispatch()
   const updateFilter = (value: string) => setFilterState({ value })

   useEffect(() => {
      ;(async () => {
         const data = await dispatch(fetchHrCandidates())
         setAvailable(data.payload)
      })()
   }, [filterState])

   return (
      <>
         <Header />
         <PageContainer>
            <NavigationBar filterState={updateFilter} />
            <FilterSection />
            {filterState.value === 'availableStudents' ? (
               <UserResultsContainer layout={'simple'} students={available} />
            ) : (
               <UserResultsContainer layout={'extended'} students={available} />
            )}
         </PageContainer>
      </>
   )
}

import React, { useEffect } from 'react'
import { CandidateCv } from '../components/CandidateCv/CandidateCv'
import { Header } from '../components/Header/Header'
import styled from 'styled-components'
import { api } from '../utils/axios'
import { Spinner } from '../components/commons/Spinner/Spinner'
import { useAppSelector } from '../app/hooks'

export const CandidateCvPage = () => {
   const { isFetching } = useAppSelector((state) => state.hr)

   const CandidateContainer = styled.div`
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
   `

   const CandidateCvContainer = styled.div`
      max-width: 1450px;
      margin: 26px;
   `
   useEffect(() => {
      ;(async () => {
         try {
            const res = await api.get(
               '/student/4fff930d-aea3-405c-99b4-f673f04e2c53'
            )
            const data = await res.data
            console.log(data)
         } catch (e) {
            console.log((e as Error).message)
         }
      })()
   }, [])

   return (
      <>
         <Header />
         <CandidateContainer>
            <CandidateCvContainer>
               <CandidateCv />
            </CandidateCvContainer>
         </CandidateContainer>
         {isFetching && <Spinner />}
      </>
   )
}

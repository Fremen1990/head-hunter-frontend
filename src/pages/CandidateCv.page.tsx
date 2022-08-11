import React, { useEffect, useState } from 'react'
import { CandidateCv } from '../components/CandidateCv/CandidateCv'
import { Header } from '../components/Header/Header'
import styled from 'styled-components'
import { api } from '../utils/axios'
import { Spinner } from '../components/commons/Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { device } from '../constants/mediaQueries'

export const CandidateCvPage = () => {
   const [loading, setLoading] = useState(true)
   const [candidate, setCandidate] = useState({})
   const { id } = useParams()
   const CandidateContainer = styled.div`
      width: 100%;
      align-items: center;
      justify-content: center;

      ${device.desktop} {
         display: flex;
      }
   `

   const CandidateCvContainer = styled.div`
      max-width: 1450px;
      margin: 26px;
   `
   const fetchData = async () => {
      try {
         const res = await api.get(`/student/${id}`)
         const data = await res.data
         setCandidate(data)
         setLoading(false)
      } catch (e) {
         console.log((e as Error).message)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   if (loading) {
      return <Spinner />
   }

   return (
      <>
         <Header />
         <CandidateContainer>
            <CandidateCvContainer>
               <CandidateCv candidate={candidate} />
            </CandidateCvContainer>
         </CandidateContainer>
      </>
   )
}

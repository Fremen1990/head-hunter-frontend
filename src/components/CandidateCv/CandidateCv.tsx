import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Spinner } from '../commons/Spinner/Spinner'

export const CandidateCv = () => {
   const { isFetching } = useAppSelector((state) => state.hr)

   return (
      <>
         <h1>candiddate cv</h1>
         {isFetching && <Spinner />}
      </>
   )
}

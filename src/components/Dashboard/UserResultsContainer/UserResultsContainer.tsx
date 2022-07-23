import React from 'react'
import { ResultsContainer } from './UserResultsContainer.styles'
import { OneUser } from '../OneUser/OneUser'

export const UserResultsContainer = () => {
   return (
      <ResultsContainer>
         <OneUser layout={'simple'} />
         <OneUser layout={'simple'} />
         <OneUser layout={'simple'} />
         <OneUser layout={'extended'} />
         <OneUser layout={'extended'} />
         <OneUser layout={'extended'} />
      </ResultsContainer>
   )
}

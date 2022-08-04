import React from 'react'
import { SpinnerContainer } from './Spinner.styles'

export const Spinner = () => {
   return (
      <SpinnerContainer>
         <div className="loading">
            <div className="arc"></div>
            <div className="arc"></div>
            <div className="arc"></div>
         </div>
         <div className={'loading_text'}>LOADING</div>
      </SpinnerContainer>
   )
}

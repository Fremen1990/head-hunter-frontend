import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NotFound } from '../components/NotFound/NotFound'
import './notAuthorized.css'

export const NotAuthorized = () => {
   return (
      <>
         <Header />
         <PageContainer style={{ height: '90vh' }}>
            <div className="neon">403</div>
            <div className="door-frame">
               <div className="door">
                  <div className="rectangle"></div>
                  <div className="handle"></div>
                  <div className="window">
                     <div className="eye"></div>
                     <div className="eye eye2"></div>
                     <div className="leaf"></div>
                  </div>
               </div>
            </div>
         </PageContainer>
      </>
   )
}

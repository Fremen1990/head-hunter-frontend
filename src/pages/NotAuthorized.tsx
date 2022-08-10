import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import './notAuthorized.css'
import { HomeButton } from '../components/NotFound/NotFoundBox/NotFoundBox.style'
import { NavLink } from 'react-router-dom'

export const NotAuthorized = () => (
   <>
      <Header />
      <PageContainer style={{ height: '85vh' }}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               // width: '60vw',
            }}
         >
            <div className="neon-vertical" style={{}}>
               Not
            </div>
            <div>
               <div>
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
               </div>

               <NavLink to="/">
                  <HomeButton>
                     <p>Home</p>
                  </HomeButton>
               </NavLink>
            </div>
            <div className="neon-vertical">Authorized</div>
         </div>
      </PageContainer>
   </>
)

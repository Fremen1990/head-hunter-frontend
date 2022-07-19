import React from 'react'
import LogoElement from '../components/Logo'

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <LogoElement>
         <img
            src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
            alt=""
         />
         <h1 style={{ fontSize: 70 }}>Head Hunter</h1>
         <img src="/headhynterlogo.png" width="100" alt="Nest Logo" />
      </LogoElement>
   )
}

export default Home

import React from 'react'
import { NavLink } from 'react-router-dom'
import { GlowEffect } from '../GlowEffect'
import {
   HomeButton,
   ErrorMessage,
   NotFoundContainer,
   PathWrapper,
   Samurai,
   Text404,
} from './NotFoundBox.style'
import { pathSVG } from '../../../constants/pathSVG'

interface Props {
   description: string
   to: string
   linkText: string
}

export const NotFoundBox = ({ description, to, linkText }: Props) => {
   return (
      <>
         <NotFoundContainer>
            <Samurai width="250pt" height="250pt" viewBox="0 0 900 900">
               <PathWrapper transform="translate(0,900) scale(0.1,-0.1)">
                  <path className="samurai-helmet" d={pathSVG.samuraiHelmet} />
                  <path className="samurai-body" d={pathSVG.samuraiBody} />
               </PathWrapper>
            </Samurai>
            <GlowEffect filterId="samurai-glow" stdDeviation="80" />

            <Text404 viewBox="0 0 700 250">
               <PathWrapper>
                  <path className="four-1" d={pathSVG.fourSVG_1} />
                  <path className="zero-1" d={pathSVG.zeroSVG_1} />
                  <path className="four-2" d={pathSVG.fourSVG_2} />
               </PathWrapper>
            </Text404>
            <GlowEffect filterId="text404-glow" stdDeviation="5" />

            <ErrorMessage>{description}</ErrorMessage>

            <NavLink to={to}>
               <HomeButton>
                  <p>{linkText}</p>
               </HomeButton>
            </NavLink>
         </NotFoundContainer>
      </>
   )
}

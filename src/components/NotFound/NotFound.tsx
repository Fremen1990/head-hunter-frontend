import React from 'react'
import { NavLink } from 'react-router-dom'
import { GlowEffect } from './GlowEffect'
import {
   ErrorMessage,
   NotFoundBox,
   PathWrapper,
   Samurai,
   Text404,
} from './NotFound.style'
import { pathSVG } from './pathSVG'

interface Props {
   header: string
   description: string
   to: string
   linkText: string
}

export const NotFound = ({ header, description, to, linkText }: Props) => {
   return (
      <>
         <NotFoundBox>
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

            <ErrorMessage>Page Not Found</ErrorMessage>
         </NotFoundBox>
      </>
   )
}

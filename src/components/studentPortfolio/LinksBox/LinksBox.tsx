import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { ClipIcon, LinksSection } from './LinksBox.styles'

interface Props {
   text?: string
   link?: string
}

export const LinksBox = ({ link, text }: Props) => {
   return (
      <>
         {text === undefined ? null : <SubtitlesSection text={text} />}
         {link === undefined ? null : (
            <LinksSection>
               <ClipIcon />
               <a href={`${link}`}>{link}</a>
            </LinksSection>
         )}
      </>
   )
}

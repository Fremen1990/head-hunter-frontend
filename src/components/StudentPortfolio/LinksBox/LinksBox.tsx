import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { LinksSection, ClipIcon } from './LinksBox.styles'

interface Props {
   text?: string
   link?: string
}

export const LinksBox = (props: Props) => {
   return (
      <>
         {props.text === undefined ? null : (
            <SubtitlesSection text={props.text} />
         )}
         {props.link === undefined ? null : (
            <LinksSection>
               <ClipIcon />
               <a href={`${props.link}`}>{props.link}</a>
            </LinksSection>
         )}
      </>
   )
}

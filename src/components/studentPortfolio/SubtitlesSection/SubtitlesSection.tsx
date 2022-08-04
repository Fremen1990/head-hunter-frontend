import React from 'react'
import { SubtitleSection } from './SubtitlesSection.styles'

interface Props {
   text: string
}

export const SubtitlesSection = (props: Props) => {
   return (
      <>
         <SubtitleSection>{props.text}</SubtitleSection>
      </>
   )
}

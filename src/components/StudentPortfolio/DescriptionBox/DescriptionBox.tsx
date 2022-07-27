import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { DescriptionSection } from './DescriptionBox.styles'

interface Props {
   text: string
   desc: string
}

export const DescriptionBox = (props: Props) => {
   return (
      <>
         <SubtitlesSection text={props.text} />
         <DescriptionSection>{props.desc}</DescriptionSection>
      </>
   )
}

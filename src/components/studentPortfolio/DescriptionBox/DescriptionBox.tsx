import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { DescriptionSection } from './DescriptionBox.styles'

interface Props {
   text: string
   desc: string
}

export const DescriptionBox = ({ desc, text }: Props) => (
   <>
      <SubtitlesSection text={text} />
      <DescriptionSection>{desc}</DescriptionSection>
   </>
)

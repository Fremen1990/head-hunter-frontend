import React from 'react'
import { SubtitlesCandidateSection } from '../SubtitlesCandidateSection/SubtitlesCandidateSection'
import { DescriptionSection } from './DescriptionCandidateCvBox.styles'

interface Props {
   text: string
   desc: string
}

export const DescriptionCandidateCvBox = ({ text, desc }: Props) => (
   <>
      <SubtitlesCandidateSection text={text} />
      <DescriptionSection>{desc}</DescriptionSection>
   </>
)

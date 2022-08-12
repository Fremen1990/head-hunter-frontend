import React from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { DescriptionSection } from './DescriptionCandidateCvBox.styles'

interface Props {
   text: string
   desc: string
}

export const DescriptionCandidateCvBox = ({ text, desc }: Props) => (
   <>
      <SubtitlesSection text={text} />
      <DescriptionSection>{desc}</DescriptionSection>
   </>
)

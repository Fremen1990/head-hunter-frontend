import React from 'react'
import { SubtitleSection } from './SubtitlesCandidateSection.styles'

interface Props {
   text: string
}

export const SubtitlesCandidateSection = ({ text }: Props) => (
   <SubtitleSection>{text}</SubtitleSection>
)

import React from 'react'
import { SubtitleSection } from './SubtitlesSection.styles'

interface Props {
   text: string
}

export const SubtitlesSection = ({ text }: Props) => (
   <SubtitleSection>{text}</SubtitleSection>
)

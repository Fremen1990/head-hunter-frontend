import React from 'react'
import { SubtitlesSection } from '../../StudentPortfolio/SubtitlesSection/SubtitlesSection'

interface Props {
   title: string
   method: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaBox = ({ title, method }: Props) => {
   return (
      <label>
         <SubtitlesSection text={title} />
         <textarea onChange={method} />
      </label>
   )
}

import React from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'

interface Props {
   title: string
   method: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
   value: string
   placeholder: string
}

export const TextAreaBox = ({ title, method, value, placeholder }: Props) => {
   return (
      <label>
         <SubtitlesSection text={title} />
         <textarea
            onChange={method}
            rows={4}
            style={{ resize: 'none' }}
            value={value}
            placeholder={placeholder}
         />
      </label>
   )
}

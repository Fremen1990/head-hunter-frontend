import React, { ChangeEvent } from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'

interface Props {
   urlBoxArray: string[]
   value: string
   inputMethod: (e: ChangeEvent<HTMLInputElement>) => void
   btnMethod: (e: React.MouseEvent<HTMLElement>) => void
   btnText: string
}

export const UrlBox = ({
   urlBoxArray,
   value,
   inputMethod,
   btnMethod,
   btnText,
}: Props) => (
   <label>
      <SubtitlesSection text="Projekt na zaliczenie" />
      {urlBoxArray.map((project: string) => (
         <p key={project}>{project}</p>
      ))}
      <input
         type="text"
         name="projectUrls"
         value={value}
         onChange={inputMethod}
      />
      <button onClick={btnMethod}>{btnText}</button>
   </label>
)

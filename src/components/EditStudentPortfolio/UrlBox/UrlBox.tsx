import React, { ChangeEvent } from 'react'
import { SubtitlesSection } from '../../StudentPortfolio/SubtitlesSection/SubtitlesSection'

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
}: Props) => {
   return (
      <label>
         <SubtitlesSection text="Projekt na zaliczenie" />
         {urlBoxArray.map((project: string, index: number) => (
            <p key={index}>{project}</p>
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
}

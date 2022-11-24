import React, { ChangeEvent } from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { LinksBox } from '../../studentPortfolio/LinksBox/LinksBox'
import { Input } from '../Inputs/InputBox.styles'

interface Props {
   urlBoxArray: string[]
   value: string
   inputMethod: (e: ChangeEvent<HTMLInputElement>) => void
   btnMethod: (e: React.MouseEvent<HTMLElement>) => void
   removeMethod: (arg: string) => void
   btnText: string
   text: string
}

export const UrlBox = ({
   urlBoxArray,
   value,
   inputMethod,
   btnMethod,
   removeMethod,
   btnText,
   text,
}: Props) => (
   <label>
      <SubtitlesSection text={text} />
      <LinksBox link={urlBoxArray} edit removeMethod={removeMethod} />

      <Input
         type="text"
         name="projectUrls"
         value={value}
         onChange={inputMethod}
      />

      <button onClick={btnMethod}>{btnText}</button>
      {/* <button onClick={() => {}}>Wyczyść</button> */}
   </label>
)

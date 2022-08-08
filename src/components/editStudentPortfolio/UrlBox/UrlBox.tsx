import React, { ChangeEvent } from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import styled from 'styled-components'
import { LinksBox } from '../../studentPortfolio/LinksBox/LinksBox'

interface Props {
   urlBoxArray: string[]
   value: string
   inputMethod: (e: ChangeEvent<HTMLInputElement>) => void
   btnMethod: (e: React.MouseEvent<HTMLElement>) => void
   btnText: string
   text: string
}

const InputUrls = styled.input`
   :hover {
      border-color: yellow;
   }

   &:focus {
      outline: none;
      box-shadow: 0px 0px 2px green;
      border-color: green;
   }
`

export const UrlBox = ({
   urlBoxArray,
   value,
   inputMethod,
   btnMethod,
   btnText,
   text,
}: Props) => (
   <label>
      <SubtitlesSection text={text} />
      <LinksBox link={urlBoxArray} edit />

      <InputUrls
         type="text"
         name="projectUrls"
         value={value}
         onChange={inputMethod}
      />

      <button onClick={btnMethod}>{btnText}</button>
      {/* <button onClick={() => {}}>Wyczyść</button> */}
   </label>
)

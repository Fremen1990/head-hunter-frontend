import React from 'react'
import { LinksSection, ClipIcon } from './LinksBox.styles'

interface Props {
   link: string
}

export const LinksBox = (props: Props) => {
   return (
      <LinksSection>
         <ClipIcon />
         <a href={`${props.link}`}>{props.link}</a>
      </LinksSection>
   )
}

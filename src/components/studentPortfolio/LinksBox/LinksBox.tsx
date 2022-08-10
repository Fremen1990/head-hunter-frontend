import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { ClipIcon, LinksSection } from './LinksBox.styles'

interface Props {
   text?: string
   link?: string[]
   edit: boolean
}

export const LinksBox = ({ link, text, edit }: Props) => {
   return (
      <>
         {text === undefined ? null : <SubtitlesSection text={text} />}
         {link === undefined
            ? null
            : link.map((oneLink, i) => (
                 <LinksSection
                    key={i}
                    style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                    }}
                 >
                    <ClipIcon />
                    <a
                       style={{ color: '#0B8BD4' }}
                       href={`${oneLink}`}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                       {oneLink}
                    </a>
                 </LinksSection>
              ))}
      </>
   )
}

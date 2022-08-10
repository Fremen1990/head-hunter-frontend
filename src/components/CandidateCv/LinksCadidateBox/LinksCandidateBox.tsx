import React from 'react'
import { ClipIcon, LinksSection } from './LinksCandidateBox.styles'
import { SubtitlesCandidateSection } from '../SubtitlesCandidateSection/SubtitlesCandidateSection'

interface Props {
   text?: string
   link?: string[]
}

export const LinksCandidateBox = ({ text, link }: Props) => (
   <>
      {text === undefined ? null : <SubtitlesCandidateSection text={text} />}
      {link === undefined
         ? null
         : link.map((oneLink, i) => (
              <LinksSection key={i}>
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

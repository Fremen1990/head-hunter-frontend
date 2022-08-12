import React from 'react'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { ClipIcon, LinksSection } from './LinksCandidateBox.styles'

interface Props {
   text?: string
   link?: string[]
}

export const LinksCandidateBox = ({ text, link }: Props) => (
   <>
      {text === undefined ? null : <SubtitlesSection text={text} />}
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

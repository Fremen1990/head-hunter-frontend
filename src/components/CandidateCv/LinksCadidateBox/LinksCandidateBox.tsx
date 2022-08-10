import React from 'react'
import { ClipIcon, LinksSection } from './LinksCandidateBox.styles'
import { SubtitlesCandidateSection } from '../SubtitlesCandidateSection/SubtitlesCandidateSection'

export const LinksCandidateBox = () => (
   <>
      <SubtitlesCandidateSection />
      <LinksSection>
         <ClipIcon />
         <a
            style={{ color: '#0B8BD4' }}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
         >
            github.com
         </a>
      </LinksSection>
   </>
)

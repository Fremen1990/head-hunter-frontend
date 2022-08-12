import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { ClipIcon, LinksSection } from './LinksBox.styles'
import { RemoveIcon } from '../../editStudentPortfolio/EditStudentPortfolio.styles'

interface Props {
   text?: string
   link?: string[]
   edit?: boolean
   removeMethod?: any
}

export const LinksBox = ({ link, text, edit, removeMethod }: Props) => {
   const handleClick = (project) => {
      removeMethod(project)
   }
   return (
      <>
         {text === undefined ? null : <SubtitlesSection text={text} />}
         {link === undefined
            ? null
            : link.map((oneLink) => (
                 <LinksSection key={oneLink}>
                    <ClipIcon />

                    <a
                       href={`${oneLink}`}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                       {oneLink}
                    </a>
                    {edit && (
                       <RemoveIcon onClick={() => handleClick(oneLink)} />
                    )}
                 </LinksSection>
              ))}
      </>
   )
}

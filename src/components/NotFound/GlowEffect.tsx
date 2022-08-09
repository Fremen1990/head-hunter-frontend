import React from 'react'

interface Props {
   filterId: string
   stdDeviation: string
}

export const GlowEffect = ({ filterId, stdDeviation }: Props) => (
   <svg width="0" height="0">
      <defs>
         <filter id={filterId}>
            <feGaussianBlur stdDeviation={stdDeviation} />
            <feMerge>
               <feMergeNode in="coloredBlur" />
               <feMergeNode in="SourceGraphic" />
            </feMerge>
         </filter>
      </defs>
   </svg>
)

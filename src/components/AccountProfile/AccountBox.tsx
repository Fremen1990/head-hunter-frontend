import React from 'react'

interface Props {
   accountName: string
}

export const AccountBox = ({ accountName }: Props) => (
   <div className="container-box">
      <h2 style={{ background: 'transparent' }}>Witaj, {accountName}</h2>
      <p style={{ background: 'transparent' }}>
         Dzisaj jest {new Date().toLocaleDateString()}
      </p>
   </div>
)

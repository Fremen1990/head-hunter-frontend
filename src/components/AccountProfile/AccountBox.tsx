import React from 'react'

interface Props {
   accountName: string
}

export const AccountBox = ({ accountName }: Props) => (
   <div className="container-box">
      <h2>Witaj, {accountName}</h2>
      <p>Dzisaj jest {new Date().toLocaleDateString()}</p>
   </div>
)

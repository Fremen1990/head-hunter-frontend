import React from 'react'

interface Props {
   accountName: string
}

export const AccountBox = (props: Props) => (
   <div className="container-box">
      <h2>Witaj, {props.accountName}</h2>
      <p>Dzisaj jest {new Date().toLocaleDateString()}</p>
   </div>
)

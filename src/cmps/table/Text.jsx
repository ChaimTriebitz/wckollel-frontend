import React from 'react'

export const Text = ({ header, row }) => {
   
   return (
      <p>{row[header.internal_name]}</p>
   )
}

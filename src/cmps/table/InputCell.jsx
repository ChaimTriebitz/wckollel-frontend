import React, { useState } from 'react'
import { Input } from '../inputs/Input'
import { update } from '../../controllers'

export const InputCell = ({ row, header }) => {
   const [value, setValue] = useState(row[header.internal_name])
   const handleChange = (e) => setValue(e.target.value)
   const handleBlur = () => {

      update.schedule(row._id, { [header.internal_name]: value })
   }


   return (
      <Input
         value={value}
         field={header}
         handleChange={handleChange}
         handleBlur={handleBlur}
      />
   )
}

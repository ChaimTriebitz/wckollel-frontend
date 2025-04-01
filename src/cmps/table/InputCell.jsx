import React, { useState } from 'react'
import { Input } from '../inputs/Input'
import { update } from '../../controllers'
import { toastMsg } from '../../functions/msgEvent'

export const InputCell = ({ row, header }) => {
   const [value, setValue] = useState(row[header.internal_name])
   const handleChange = (name, value) => setValue(value)
   const handleBlur = () => {
      update.schedule(row._id, { [header.internal_name]: value })
         .catch((err) => toastMsg.error(err.response.data.error))
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

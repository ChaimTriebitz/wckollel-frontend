import React from 'react'
import { objects, strings } from '../../functions'

export const Date = ({ header, row }) => {
   const { internal_name, type } = header
   let value = objects.getDeepValue(row, internal_name)
   switch (type) {
      case 'time':
         value = strings.ampm(value)
         break
      case 'date':
         value = strings.monthday(value)
         break
   }
   return (
      <p>{value}</p>
   )
}

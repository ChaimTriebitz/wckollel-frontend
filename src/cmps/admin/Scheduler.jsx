import React, { useEffect } from 'react'
import { useForm, useGlobalState } from '../../hooks'
import { FIELDS, HEADERS } from '../../data'
import { create, get } from '../../controllers'
import { ACTIONS } from '../../state'
import { Input, Inputs, Table } from '../../cmps'
import { toastMsg } from '../../functions/msgEvent'
import { objects } from '../../functions'

export const Scheduler = () => {
   const { schedules, dispatch } = useGlobalState()
   
   const {
      values,
      handleChange,
      changedValues,
      isValuesChanged,
      restart
   } = useForm()

   const handleSave = (e) => {
      e.preventDefault()
      create.schedule(values)
      .then((res)=>toastMsg.success(res.data.message))
   }


   return (
      <div className='scheduler column'>
         <form onSubmit={handleSave} className='form'>
            {
               FIELDS.scheduler.map(header =>
                  <Inputs
                     key={header.internal_name}
                     value={values[header.internal_name]}
                     field={header}
                     handleChange={handleChange}
                  />
               )
            }

            <button className='btn success'>submit</button>
         </form>
      </div>
   )
}

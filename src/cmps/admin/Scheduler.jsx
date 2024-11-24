import React, { useEffect } from 'react'
import { useForm, useGlobalState } from '../../hooks'
import { FIELDS, HEADERS } from '../../data'
import { Input } from '../inputs/Input'
import { create, get } from '../../controllers'
import { Table } from '../Table'
import { ACTIONS } from '../../state'

export const Scheduler = () => {
   const { schedules, dispatch } = useGlobalState()
   const {
      values,
      handleChange,
      changedValues,
      isValuesChanged,
      restart
   } = useForm(FIELDS.scheduler.map(field => ({ [field.internal_name]: null })))

   useEffect(() => {
      get.schedules().then((res) => dispatch({ type: ACTIONS.SET, entity: 'schedules', payload: res.data }))
   }, [])

   const handleSave = (e) => {
      e.preventDefault()
      create.schedule(values)
   }
   console.log(schedules);

   return (
      <div className='scheduler'>
         <form onSubmit={handleSave} className='form'>
            {
               FIELDS.scheduler.map(header =>
                  <Input
                     key={header.internal_name}
                     value={values[header.internal_name]}
                     field={header}
                     handleChange={handleChange}
                  />
               )
            }
            <button className='btn success'>submit</button>
         </form>
         <Table headers={HEADERS.scheduler} rows={schedules} />
      </div>
   )
}

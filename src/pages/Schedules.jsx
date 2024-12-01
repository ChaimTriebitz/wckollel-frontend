import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { Table } from '../cmps'
import { HEADERS } from '../data'

export const Schedules = () => {
   const { schedules } = useGlobalState()
   console.log(schedules);
   
   return (
      <div className='main'>
         <Table headers={HEADERS.schedules} rows={schedules} />
      </div>
   )
}

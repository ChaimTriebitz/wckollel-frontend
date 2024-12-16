import React, { useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { Select, Table } from '../cmps'
import { HEADERS } from '../data'
import { dates } from '../functions'

export const Schedules = () => {
   const { schedules } = useGlobalState()
   const week = dates.getWeekStartingSunday()
   const month = week[0].month === week[6].month ? week[0].month: week[0].month + '/' + week[6].month

   return (
      <div className='main schedule'>
         <h3>{week[0].day}-{week[6].day} {month}</h3>
         <Table headers={HEADERS.schedules} rows={schedules} />
      </div>
   )
}

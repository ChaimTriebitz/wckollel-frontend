import React, { useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { Select, Table } from '../cmps'
import { HEADERS } from '../data'
import { dates } from '../functions'

export const Schedules = () => {

   const { schedules } = useGlobalState()
   const weeks = [1, 2, 3, 4]
   const schedulesByWeeks = weeks.map(week => ({ id: week, days: dates.getWeeksAhead(week), schedules: schedules.filter(s => s.week === week) }))

   return (
      <div className='main schedule'>
         {
            schedulesByWeeks.map(week => {
               const { days, schedules, id } = week
               const [sunday, saturday] = [days[0], days[6]]
               const month = sunday.month === saturday.month ? sunday.month : sunday.month + '/' + saturday.month

               return (
                  <div className='week' key={id}>
                     <h3> {sunday.day} - {saturday.day} | {month}</h3>
                     <Table
                        headers={HEADERS.schedules}
                        rows={schedules}
                     />
                  </div>
               )
            })
         }
      </div>
   )
}

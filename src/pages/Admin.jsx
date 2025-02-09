import React, { useEffect } from 'react'
import { useGlobalState } from '../hooks';
import { AddRow, Table } from '../cmps';
import { HEADERS } from '../data';
import { dates } from '../functions';
import { ls } from '../config';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
   const { schedules } = useGlobalState()
   const user = localStorage.getItem(ls.user)
   const navigate = useNavigate()

   const weeks = [1, 2, 3, 4]
   const schedulesByWeeks = weeks.map(week => ({ id: week, days: dates.getWeeksAhead(week), schedules: schedules.filter(s => s.week === week) }))

   useEffect(() => {
      if (!user) navigate('/auth')
   }, [])

   return (
      <main className='main admin'>
         <AddRow />
         {
            schedulesByWeeks.map(week => {
               const { days, schedules, id } = week
               const [sunday, saturday] = [days[0], days[6]]
               const month = sunday.month === saturday.month ? sunday.month : sunday.month + '/' + saturday.month

               return (
                  <div className='week' key={id}>
                     <h3> {sunday.day} - {saturday.day} | {month}</h3>
                     <Table
                        headers={HEADERS.scheduler}
                        rows={schedules}
                     />
                  </div>
               )
            })
         }
      </main>
   )
}

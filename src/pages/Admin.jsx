import React, { useEffect } from 'react'
import { useGlobalState, useLogInUser } from '../hooks';
import { AddRow, Login, Register, Scheduler, Table } from '../cmps';
import { DATA, FIELDS, HEADERS } from '../data';
import { svgs } from '../assets/svgs';
import { dates } from '../functions';

export const Admin = () => {
   const { loggedInUser, dispatch, schedules } = useGlobalState()

   const weeks = [1, 2, 3, 4]
   const schedulesByWeeks = weeks.map(week => ({ id: week, days: dates.getWeeksAhead(week), schedules: schedules.filter(s => s.week === week) }))
   // console.log(schedulesByWeeks);

   const login = useLogInUser()

   useEffect(() => {
      login()
   }, [])
// console.log(schedules);

   return (
      <main className='main admin'>
         {!loggedInUser && <Login />}
         {loggedInUser &&
            <AddRow />
         }
         {
            loggedInUser &&
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

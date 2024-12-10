import React from 'react'
import { useGlobalState } from '../hooks';
import { AddRow, Login, Register, Scheduler, Table } from '../cmps';
import { DATA, FIELDS, HEADERS } from '../data';
import { svgs } from '../assets/svgs';
import { dates } from '../functions';

export const Admin = () => {
   const { loggedInUser, dispatch, schedules } = useGlobalState()
   const week = dates.getWeekStartingSunday()
   console.log('week', week);
   console.log('schedules', schedules);
   const rows = week.map(d => ({ date: d, schedules: schedules.filter(s => dates.isSameDate(s.date, d.date)) }))
   console.log(rows);

   const handleClick = () => {

   }

   return (
      <main className='main admin'>
         {
            rows.map(r =>
               <div className='day'>
                  <h3>{r.date.option_display}</h3>
                  <AddRow date={r.date.date}/>
                  <Table
                     headers={HEADERS.scheduler}
                     rows={r.schedules}
                  />
               </div>

            )
         }
      </main>
   )
}

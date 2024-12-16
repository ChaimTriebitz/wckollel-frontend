import React, { useEffect } from 'react'
import { useGlobalState, useLogInUser } from '../hooks';
import { AddRow, Login, Register, Scheduler, Table } from '../cmps';
import { DATA, FIELDS, HEADERS } from '../data';
import { svgs } from '../assets/svgs';
import { dates } from '../functions';

export const Admin = () => {
   const { loggedInUser, dispatch, schedules } = useGlobalState()
   const week = dates.getWeekStartingSunday()
   console.log('week', week);
   console.log(loggedInUser);

   const login = useLogInUser()

   useEffect(() => {
      login()
   }, [])

   return (
      <main className='main admin'>
         {!loggedInUser && <Login />}
         {loggedInUser && <AddRow />}
         {loggedInUser && <Table
            headers={HEADERS.scheduler}
            rows={schedules}
         />}
      </main>
   )
}

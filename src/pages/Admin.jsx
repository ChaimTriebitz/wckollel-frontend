import React from 'react'
import { useGlobalState } from '../hooks';
import { Login, Register, Scheduler, Table } from '../cmps';
import { DATA, FIELDS, HEADERS } from '../data';

export const Admin = () => {
   const { loggedInUser, dispatch, schedules } = useGlobalState()
   const baba = FIELDS.scheduler.map(field => ({ [field.internal_name]: null }))
   // console.log(baba);

   return (
      <main className='main admin'>

         {/* {!loggedInUser && <Login />} */}
         {<Scheduler />}
         <Table headers={HEADERS.scheduler} rows={schedules} />

      </main>
   )
}

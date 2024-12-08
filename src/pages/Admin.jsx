import React from 'react'
import { useGlobalState } from '../hooks';
import { AddRow, Login, Register, Scheduler, Table } from '../cmps';
import { DATA, FIELDS, HEADERS } from '../data';
import { svgs } from '../assets/svgs';

export const Admin = () => {
   const { loggedInUser, dispatch, schedules } = useGlobalState()
   const baba = FIELDS.scheduler.map(field => ({ [field.internal_name]: null }))
   // console.log(baba);
   const handleClick = () => {

   }

   return (
      <main className='main admin'>

         {/* {!loggedInUser && <Login />} */}
         {/* {<Scheduler />} */}
         <AddRow />
         <Table headers={HEADERS.scheduler} rows={schedules} />

      </main>
   )
}

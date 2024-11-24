import React from 'react'
import { useGlobalState } from '../hooks';
import { Login, Register } from '../cmps';
import { DATA, FIELDS } from '../data';
import { Scheduler } from '../cmps/admin/Scheduler';

export const Admin = () => {
   const { loggedInUser, dispatch } = useGlobalState()
   const baba = FIELDS.scheduler.map(field => ({ [field.internal_name]: null }))
   // console.log(baba);

   return (
      <main className='main'>

         {/* {!loggedInUser && <Login />} */}
         {!loggedInUser && <Scheduler />}
      </main>
   )
}

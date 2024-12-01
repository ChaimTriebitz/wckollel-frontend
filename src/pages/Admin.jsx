import React from 'react'
import { useGlobalState } from '../hooks';
import { Login, Register, Scheduler } from '../cmps';
import { DATA, FIELDS } from '../data';

export const Admin = () => {
   const { loggedInUser, dispatch } = useGlobalState()
   const baba = FIELDS.scheduler.map(field => ({ [field.internal_name]: null }))
   // console.log(baba);

   return (
      <main className='main admin'>

         {/* {!loggedInUser && <Login />} */}
         {<Scheduler />}
      </main>
   )
}

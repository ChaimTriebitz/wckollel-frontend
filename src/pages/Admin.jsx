import React from 'react'
import { useGlobalState } from '../hooks';
import { Login } from '../cmps';
import { DATA } from '../data';

export const Admin = () => {
   const { loggedInUser, dispatch } = useGlobalState()

   return (
      <main className='main'>
         {!loggedInUser && <Login />}
      </main>
   )
}

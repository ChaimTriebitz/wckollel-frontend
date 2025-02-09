import React, { useEffect } from 'react'
import { Login } from '../cmps'
import { useNavigate } from 'react-router-dom'
import { ls } from '../config'

export const Auth = () => {
   const navigate = useNavigate()
   const user = localStorage.getItem(ls.user)
   useEffect(() => {
      if (user) navigate('/admin')
   }, [])
   return (
      <main className='main auth'>
         <Login />
      </main>
   )
}

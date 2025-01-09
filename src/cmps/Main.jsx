import { Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { get } from '../controllers'
import { About, Admin, Donations, Home, Schedules } from '../pages'

export const Main = () => {

   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/schedules' element={<Schedules />} />
         {/* <Route path='/donations' element={<Donations />} /> */}
         <Route path='/admin' element={<Admin />} />
      </Routes>
   )
}

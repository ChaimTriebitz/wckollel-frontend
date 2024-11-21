import { Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { get } from '../controllers'
import { About, Donations, Home, Schedules } from '../pages'

export const Main = () => {
   // useEffect(() => {
   //    get.zmanim().then((data) => console.log(data)
   //    )
   // }, [])
   return (
      <main className='main cmp'>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/schedules' element={<Schedules />} />
            <Route path='/donations' element={<Donations />} />
         </Routes>
      </main>
   )
}

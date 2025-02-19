import { Route, Routes } from 'react-router-dom'

import { About, Admin, Auth, Donations, DonationThanks, Home, Schedules } from '../pages'

export const Main = () => {

   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/schedules' element={<Schedules />} />
         <Route path='/donations' element={<Donations />} />
         <Route path='/donations/thank-you' element={<DonationThanks />} />
         <Route path='/admin' element={<Admin />} />
         <Route path='/auth' element={<Auth />} />
      </Routes>
   )
}

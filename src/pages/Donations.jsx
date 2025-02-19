import React from 'react'
import { DonationForm } from '../cmps'
import x from '../assets/imgs/wckollel-log.png'

export const Donations = () => {

   return (
      <main className='main donations'>
         <h1>Support wckollel Community</h1>
         <img src={x} alt="" />
         <DonationForm />
      </main>
   )
}

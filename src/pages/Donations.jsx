import React from 'react'
import {  DonationAmount, DonationForm } from '../cmps'
import x from '../assets/imgs/wckollel-log.png'

export const Donations = () => {

   return (
      <main className='main donations'>
         <h1>Support Wckollel Community</h1>
         {/* <img src={x} alt="" /> */}
         <DonationAmount/>
         <DonationForm />
      </main>
   )
}

import React from 'react'
import { DonationForm } from '../cmps'
import x from '../assets/gifs/payment-proccess.gif'

export const Donations = () => {

   return (
      <main className='main'>
         <h1>donations</h1>
         <img src={x} alt="" />
         <DonationForm />
      </main>
   )
}

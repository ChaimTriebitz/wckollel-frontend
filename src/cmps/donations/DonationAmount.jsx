import React, { useEffect } from 'react'
import { FIELDS } from '../../data'
import { useForm, useGlobalState } from '../../hooks'
import { ACTIONS } from '../../state'
import { Inputs } from '../inputs/Inputs'

export const DonationAmount = () => {
   const { dispatch, donation } = useGlobalState()
   const { values, handleChange } = useForm({ amount: 0 })

   useEffect(() => {
      dispatch({ type: ACTIONS.SET, entity: 'donation', payload: { ...donation, amount: values.amount } })
   }, [values])

   return (
      <div className='donation-amount'>
         <div className="btns">
            {
               FIELDS.donations.amount.options.map((option) =>
                  <button
                     key={option.id}
                     className={`btn ${values.amount === option.option_value ? 'active' : ''}`}
                     onClick={() => handleChange('amount', option.option_value)}
                  >{option.option_display}</button>
               )
            }
         </div>

         <Inputs
            value={values.amount}
            field={FIELDS.donations.custom_amount}
            handleChange={handleChange}
         />
         {/* {values.amount<1&&<h4>Please choose Amount</h4> } */}
      </div>
   )
}

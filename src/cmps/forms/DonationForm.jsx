import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FIELDS, URLS } from '../../data';
import { useCollectjs, useForm } from '../../hooks';
import { objects } from '../../functions';
import { Input } from '../inputs/Input';

export const DonationForm = () => {
   const { values, handleChange, restart, changedValues, isValuesChanged } = useForm(objects.filterFields({}, FIELDS.donations.map(v => v.internal_name)))

   useEffect(() => {
      window.CollectJS.configure({
         variant: 'lightbox',
         callback: (token) => {
            // console.log(token);
            // handleFinishSubmit(token)
         }
      });
   }, [])

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');


// console.log(values);


   const handleFinishSubmit = async (response) => {
      // console.log(response);

      const { token } = response;
      const data = {
         ...values,
         token,
      };

      // console.log(data);
      

      const res = await axios.post(`${URLS.base}${URLS.donations.donate}`, data)
      // console.log(res);


      setIsSubmitting(false);
      setAlertMessage('The form was submitted. Check the console to see the output data.');
   };

   const handleSubmit = (e) => {

      e.preventDefault();
      if (window.CollectJS) {
         window.CollectJS.startPaymentRequest();
      } else {
         console.error('CollectJS is not loaded.');
      }
   };

   return (
      <div className="donation-form">
         <h1>Donation Form</h1>
         {alertMessage && <div className="alert">{alertMessage}</div>}
         <form className='form' onSubmit={handleSubmit}>
            {
               FIELDS.donations.map((field) =>
                  <Input
                     value={values[field.internal_name]}
                     field={field}
                     handleChange={handleChange}
                     key={field.internal_name}
                  />
               )
            }
            {/* <div className='input'>
               <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
               />
            </div>
            <div className='input'>
               <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
               />
            </div>
            <div className='input'>
               <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
               />
            </div> */}
            <button type='submit' >Insert Card Info</button>
         </form>
      </div>
   );
};


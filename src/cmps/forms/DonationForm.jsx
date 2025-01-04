import React, { useState, useEffect } from 'react';

export const DonationForm = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      amount: '',
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');

   useEffect(() => {
      if (window.CollectJS) {
         console.log(window.CollectJS);
         
         window.CollectJS.configure({
            variant: 'lightbox',
            styleSniffer: true,
            callback: (token) => {
               console.log('tok',token);
               handleFinishSubmit(token);
            },
            fields: {
               ccnumber: {
                  placeholder: 'Card Number',
                  selector: '#ccnumber',
               },
               ccexp: {
                  placeholder: 'MM/YY',
                  selector: '#ccexp',
               },
               cvv: {
                  placeholder: 'CVV',
                  selector: '#cvv',
               },
            },
         });
      }
   }, []);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleFinishSubmit = (response) => {
      console.log(response);
      
      const { token } = response;
      const submissionData = {
         ...formData,
         token,
      };

      console.log(submissionData);
      setIsSubmitting(false);
      setAlertMessage('The form was submitted. Check the console to see the output data.');
   };

   const handleSubmit = (e) => {
      console.log(window.CollectJS.startPaymentRequest);
      
      // e.preventDefault();
      setIsSubmitting(true);
      window.CollectJS.startPaymentRequest();
      if (window.CollectJS) {
      } else {
         console.error('CollectJS is not loaded.');
         setIsSubmitting(false);
      }
   };

   return (
      <div className="donation-form">
         <h1>Donation Form</h1>
         {alertMessage && <div className="alert">{alertMessage}</div>}
         <form className='form' >
            <div className='input'>
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
            </div>
            <div id="ccnumber" className='input'/>
            <div id="ccexp" className='input'/>
            <div id="cvv" className='input'/>
            <button id='payButton' onClick={handleSubmit} type="submit" >
               Submit
            </button>
         </form>
      </div>
   );
};


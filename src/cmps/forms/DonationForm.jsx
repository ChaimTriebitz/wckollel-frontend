import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
import { URLS } from '../../data';
import { useForm } from '../../hooks';

export const DonationForm = () => {
   const { values, handleChange } = useForm({ name: '', email: '', amount: '' })
   const formValuesRef = useRef(values);
   const [tokenizer, setTokenizer] = useState(null);
   const [message, setMessage] = useState('');

   useEffect(() => {
      formValuesRef.current = values; // Keep the latest values
   }, [values]);

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://app.fluidpay.com/tokenizer/tokenizer.js"; // Use live script
      script.async = true;

      script.onload = () => {
         const instance = new window.Tokenizer({
            apikey: process.env.REACT_APP_FLUIDPAY_PUBLIC_KEY, // Replace with live API key
            container: "#card-container",
            submission: handleSubmission,
            settings: {
               styles: {
                  'body': {
                     'color': '#ffffff',
                  },
                  'input': {
                     'font-size': '1.5em',
                     'color': '#ffffff',
                     'border-radius': '15px',
                     'background-color': '#30475E',
                     'border': 'none',
                     'padding-top': '0.25em',
                     'padding': '5px 10px',
                     'min-height': '35px'

                  },
                  '.fieldset.cc': {
                     'margin-bottom': '10px'
                  },
                  '.card .cc .cc-icon': {
                     'margin-left': '10px'
                  },
                  '.payment .cvv input': {
                     // 'border': 'solid 1px #ffffff',
                  },
                  '.card .cc input': {
                     'padding': '6px 6px 6px 50px'
                  }
               }
            },
            validCard: (card) => {
               console.log('bababab');
               
               console.log(card)
               // card.isValid // Boolean
               // card.bin // Object of bin data
         
               // If lookupFees is enabled in the options, then you will also receive the following:
               // card.ServiceFee uint - ServiceFee is applicable, to be added to the requested amount.
               // card.PaymentAdjustment.value 
               // card.PaymentAdjustment.type
               // card.RequestedAmount uint - this is the base amount of the transaction, any service fee/surcharge should be added to this
               // card.Surcharge uint - this is the amount to be surcharged.
               // card.Disclosure string - this is the surcharge text to be presented to the card holder
         
               // If you need to check if surchargable
               // Pass state and card bin data
         
            },
            
         });

         setTokenizer(instance);
      };

      document.body.appendChild(script);

      return () => {
         document.body.removeChild(script);
      };
   }, []);


   const handleSubmission = async (res) => {
      console.log(res);
      
      if (res?.token) {
         try {
            const { name, email, amount } = formValuesRef.current;
            const response = await axios.post(`${URLS.base}${URLS.donations.donate}`, {
               token: res.token,
               amount: parseFloat(amount) * 100, // Amount in cents
               name: name,
               email: email,
            });

            console.log(response.data.data);
            if (response.data.data.id) {

               setMessage("Transaction successful! Thank you for your donation.");
            } else {
               setMessage("Failed to process the transaction.");
            }
         } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again.");
         }
      } else {
         console.error("Error tokenizing payment:", res);
         setMessage("Failed to tokenize payment. Please check your details.");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (tokenizer) {
         tokenizer.submit(); // Trigger the submit method of the Tokenizer instance
      } else {
         setMessage("Payment system is not initialized yet.");
      }
   };

   return (
      <form className='form donation' onSubmit={handleSubmit}>
         {/* <h4>Personal Details</h4> */}

         <input
            type="text"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            name='name'
            required
         />
         <input
            type="email"
            name='email'
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
         />
         <input
            name='amount'
            type="number"
            placeholder="Donation Amount (USD)"
            value={values.amount}
            onChange={handleChange}
            required
         />
         <h4>Card Details</h4>
         <div
            id="card-container"
            style={{ overflow: 'hidden' }}
         ></div>

         <button style={{ opacity: tokenizer ? 1 : 0.8 }} className='btn success' type="submit">Donate</button>
         <p>{message}</p>
      </form>
   );
};

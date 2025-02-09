import { useEffect, useRef, useState } from "react";
import { FIELDS } from '../../data';
import { useForm } from '../../hooks';
import { apikeys, urls } from '../../config';
import { Inputs } from '../../cmps';
import { create } from '../../controllers';
import { objects } from '../../functions';

export const DonationForm = () => {
   const { values, handleChange } = useForm(objects.filterFields({}, FIELDS.donations.map(f => f.internal_name)))
   const formValuesRef = useRef(values);
   const [tokenizer, setTokenizer] = useState(null);
   const [message, setMessage] = useState('');

   useEffect(() => {
      formValuesRef.current = values; // Keep the latest values
   }, [values]);

   useEffect(() => {
      const script = document.createElement("script");
      script.src = urls.fluidpay.tokenizer // Use live script
      script.async = true;
      script.onload = () => {
         const instance = new window.Tokenizer({
            apikey: apikeys.fluidpay_public, // Replace with live API key
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
            onload:console.log('baba'),
            onPaymentChange: (type) => { console.log(type) },
            validCard: (card) => {
               
            },
            validExpiration: (ex) => {
               console.log(ex)
            },
            validCVV: (cvv) => {
               console.log(cvv)
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

      if (res?.token) {
         console.log(res);
         setMessage("");
         
         formValuesRef.current = { ...formValuesRef.current, token: res.token }
         create.donation(formValuesRef.current)
            .then((data) => console.log(data)
            )
      } else {
         setMessage("Wrong Card Details Try Again");
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
         {
            FIELDS.donations.map((field) =>
               <Inputs
                  value={values[field.internal_name]}
                  field={field}
                  handleChange={handleChange}
                  key={field.internal_name}
                  options={field.options}
               />
            )
         }
         <h4>Card Details</h4>

         <div id="card-container" style={{ overflow: 'hidden' }} />

         <button className='btn success' type="submit">Donate</button>
         <p className='error'>{message}</p>
      </form>
   );
};

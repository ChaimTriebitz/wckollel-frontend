import { useEffect, useState } from 'react';
import { useUpdateEffect } from '../../hooks';

export const DonationForm = () => {
   const [amount, setAmount] = useState("");
   const [cardNumber, setCardNumber] = useState("");
   const [expiry, setExpiry] = useState("");
   const [cvv, setCvv] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage("Processing donation...");

      const response = await fetch("http://localhost:5000/api/donations/donate", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ amount, cardNumber, expiry, cvv }),
      });

      const data = await response.json();
      if (data.success) {
         setMessage("Donation successful! Thank you!");
      } else {
         setMessage(`Error: ${data.message}`);
      }
   };

   return (
      <div className='donation-form'>
         <h2>Make a Donation</h2>
         <form className='form' onSubmit={handleSubmit}>
            <div className='input'>
               <label>Donation Amount ($):</label>
               <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
               />
            </div>
            <div>
               <label>Card Number:</label>
               <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
               />
            </div>
            <div>
               <label>Expiry Date (MMYY):</label>
               <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
               />
            </div>
            <div>
               <label>CVV:</label>
               <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
               />
            </div>
            <button type="submit">Donate</button>
         </form>
         <p>{message}</p>
      </div>
   );
};


import {  useEffect } from 'react';

export const DonationForm = () => {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://secure.networkmerchants.com/token/CollectCheckout.js';
      script.setAttribute('data-checkout-key', process.env.REACT_APP_COLLECT_CHECKOUT);
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup when the component unmounts
      };
    }, []);

    const handleClick = (e) => {
      e.preventDefault(); // Prevent default behavior if necessary
      window.CollectCheckout.redirectToCheckout({
        lineItems: [
          {
            sku: "0001",
            quantity: 2,
          },
        ],
        successUrl:
          "https://secure.safewebservices.com/merchants/resources/integration/examples/collect_checkout/receipt.php",
        cancelUrl:
          "https://secure.safewebservices.com/merchants/resources/integration/examples/collect_checkout/cancel.php",
      }).then((error) => {
        if (error) {
          console.log("Checkout Error:", error);
        }
      });
    };








   return (
      <div className="donation-form">
         <h1>Donation Form</h1>
            <button onClick={handleClick}>Start</button>
      </div>
   );
};


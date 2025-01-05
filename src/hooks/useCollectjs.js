import React, { useEffect, useState } from "react";

export const useCollectjs = () => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://secure.safewebservices.com/token/Collect.js";
      script.setAttribute(
         "data-tokenization-key",
         "rZ8Zd2-Dxhz33-AE3sSq-tbxybX"
      );
      script.async = true;
      script.onload = () => {
         setIsLoading(false)
         if (window.CollectJS) {
            window.CollectJS.configure({
               variant: 'lightbox',
               styleSniffer: true,
               callback: (token) => {
                  setData(token)
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
      };
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      };
   }, []);


   return {
      isLoading,
      data
   };
};


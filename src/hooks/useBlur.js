import { useEffect, useRef } from 'react';

export function useBlur(callback, element) {

   const ref = useRef(null);

   const handleBlur = (e) => {
      console.dir(element);

      if (e.target.localName === element) {
         callback();
      } 
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleBlur);
      return () => {
         document.removeEventListener('mousedown', handleBlur);
      };
   }, []);

   return ref;
}

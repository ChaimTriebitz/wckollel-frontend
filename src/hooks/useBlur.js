import { useEffect, useRef } from 'react'

export function useBlur(callback) {

   const ref = useRef(null);

   const handleBlur = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
         callback()
      }
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleBlur)
      return () => {
         document.removeEventListener('mousedown', handleBlur)
      }
   }, [])

   return ref
}

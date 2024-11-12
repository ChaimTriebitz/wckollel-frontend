import { useEffect, useCallback } from 'react'

export function useKeyPress(isCtrl = true, keyPress, callback) {
   const handleKeyPress = useCallback(
      (e) => {
         const { ctrlKey, key } = e
         if (isCtrl) {
            if (ctrlKey && key === keyPress) {
               e.preventDefault()
               callback()
            }
         } else if (key === keyPress) {
            e.preventDefault()
            callback()
         }
      },
      [isCtrl, keyPress, callback]
   )

   useEffect(() => {
      window.addEventListener('keydown', handleKeyPress)

      return () => {
         window.removeEventListener('keydown', handleKeyPress)
      }
   }, [handleKeyPress])
}


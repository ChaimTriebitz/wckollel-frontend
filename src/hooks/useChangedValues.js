import { useRef, useState } from 'react'
import { useUpdateEffect } from './useUpdateEffect'
import { objects } from '../functions'
export const useChangedValues = (values) => {

   const [changedValues, setChangedValues] = useState({})

   const initValuesRef = useRef(values)

   const restart = (val) => {
      initValuesRef.current = val
      setChangedValues({})
   }

   useUpdateEffect(() => {
      setChangedValues(objects.getChangedProperties(initValuesRef.current, values))
   }, [values])

   return {
      changedValues,
      isValuesChanged: !objects.isEmpty(changedValues),
      restart
   }
}

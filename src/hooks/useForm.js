import { useRef, useState } from 'react'
import { objects } from '../functions'
import { useUpdateEffect } from '../hooks'

export const useForm = (initValues = {}) => {

   const [values, setValues] = useState(initValues)
   const [changedValues, setChangedValues] = useState({})

   const initValuesRef = useRef(initValues)

   const restart = (val) => {
      initValuesRef.current = val
      setChangedValues({})
   }

   useUpdateEffect(() => {
      setChangedValues(objects.getChangedProperties(initValuesRef.current, values))
   }, [values])
   
   const handleChange = (name,value) => setValues((prev) => ({ ...prev, [name]: value }))

   return {
      values,
      handleChange,
      changedValues,
      restart,
      isValuesChanged: !objects.isEmpty(changedValues)
   }

}

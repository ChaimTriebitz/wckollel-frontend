import { useEffect, useState } from 'react'
import { useGlobalState } from '../../hooks'


export const SelectRow = ({ row }) => {
   const { dispatch, selectedRowsIds } = useGlobalState()
   const [value, setValue] = useState(false)

   useEffect(() => {

   }, [value])
   const handleSelectChange = (e) => {

      selectedRowsIds.includes(row.id)
   }
   return (
      <input
         className='select-row'
         type='checkbox'
         onChange={e => setValue(e.target.checked)}
         checked={value}
      />
   )
}


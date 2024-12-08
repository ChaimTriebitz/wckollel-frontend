import React, { useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { Select, Table } from '../cmps'
import { HEADERS } from '../data'
import { dates } from '../functions'

export const Schedules = () => {
   const { schedules } = useGlobalState()
   const week = dates.getWeekStartingSunday()
   const [value, setValue] = useState(week[0].option_value)
   const day = week.find(v => v.option_value === value)
   const handleChange = (e) => {
      setValue(e.target.value)
   }
   
   const rows = schedules.filter(v => dates.isSameDate(v.date, day.date))


   return (
      <div className='main'>
         <Select options={week} value={value} handleChange={handleChange} />
         <Table headers={HEADERS.schedules} rows={rows} />
      </div>
   )
}

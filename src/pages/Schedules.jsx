import React, { useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { Select, Table } from '../cmps'
import { HEADERS } from '../data'
import { dates } from '../functions'

export const Schedules = () => {
   const { schedules } = useGlobalState()
   const week = dates.getWeekStartingSunday()

   // Get today's date formatted to match 'Sunday, December 8'
   const today = new Date()
   const todayFormatted = today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
   })

   // Find the default option that matches today's date or fall back to the first day in the week
   const defaultOption = week.find(v => v.option_value === todayFormatted)?.option_value || week[0].option_value

   const [value, setValue] = useState(defaultOption)
   const day = week.find(v => v.option_value === value)

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   const rows = schedules.filter(s => dates.isSameDate(s.date, day.date))

   return (
      <div className='main schedule'>
         <Select options={week} value={value} handleChange={handleChange} />
         <Table headers={HEADERS.schedules} rows={rows} />
      </div>
   )
}

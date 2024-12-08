export const dates = {
   getWeekStartingSunday,
   isSameDate
}

function getWeekStartingSunday() {
   const today = new Date()
   const dayOfWeek = today.getDay()
   const startOfWeek = new Date(today)

   startOfWeek.setDate(today.getDate() - dayOfWeek)

   const week = []
   for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      week.push({
         weekday: day.toLocaleDateString('en-US', { weekday: 'long' }),
         day: day.toLocaleDateString('en-US', { day: 'numeric' }),
         month: day.toLocaleDateString('en-US', { month: 'long' }),
         date: day.toISOString(),
         id: i,
         option_display: day.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }),
         option_value: day.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })
      })
   }
   return week
}

function isSameDate(date1, date2) {
   const d1 = new Date(date1);
   const d2 = new Date(date2);

   return (
      d1.getUTCFullYear() === d2.getUTCFullYear() &&
      d1.getUTCMonth() === d2.getUTCMonth() &&
      d1.getUTCDate() === d2.getUTCDate()
   );
}
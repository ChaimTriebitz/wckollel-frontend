export const strings = {
   ampm,
   monthday,
}

function monthday(date) {
   const value = new Date(date);
   const options = { weekday: "long", month: "short", day: "numeric" };
   return value.toLocaleDateString("en-US", options);
}

function ampm(time) {
   const [hours, minutes] = time.split(":").map(Number);

   let period = "AM";
   let adjustedHours = hours;

   if (hours >= 12) {
      period = "PM";
      if (hours > 12) adjustedHours -= 12;
   }

   return `${adjustedHours}:${minutes < 10 ? `0${minutes}` : minutes} ${period}`
}
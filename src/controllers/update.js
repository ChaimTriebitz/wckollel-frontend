import axios from 'axios';
import { DATA, URLS } from '../data';

export const update = {
   schedule
}

async function schedule(id, schedule) {
   try {
      const res = await axios.put(`${URLS.base}${URLS.schedules.update}/${id}`, schedule, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(DATA.LOCAL_STORAGE_TOKEN)}`
         }
      });
      return res;
   } catch (err) {
      console.error(err);
      throw err
   }
}
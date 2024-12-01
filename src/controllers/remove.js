import axios from 'axios';
import { DATA, URLS } from '../data';

export const remove = {
   schedule
}

async function schedule(id) {
   try {
      const res = await axios.delete(`${URLS.base}${URLS.schedules.remove}/${id}`, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(DATA.LOCAL_STORAGE_TOKEN)}`
         }
      });
      return res;
   } catch (err) {
      console.error(err);
   }
}
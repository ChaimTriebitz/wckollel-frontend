import axios from 'axios';
import { DATA, URLS } from '../data';

export const create = {
   schedule
}

async function schedule(data) {
   try {
      const res = await axios.post(`${URLS.base}${URLS.schedules.create}`, data, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(DATA.LOCAL_STORAGE_TOKEN)}`
         }
      });
      return res;
   } catch (err) {
      throw err
   }
}
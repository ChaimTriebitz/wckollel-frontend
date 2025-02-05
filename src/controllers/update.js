import axios from 'axios';
import { ls, urls } from '../config';

export const update = {
   schedule
}

async function schedule(id, schedule) {
   try {
      const res = await axios.put(`${urls.schedules.update}/${id}`, schedule, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(ls.user)}`
         }
      });
      return res;
   } catch (err) {
      throw err
   }
}
import axios from 'axios';
import { ls, urls } from '../config';

export const remove = {
   schedule
}

async function schedule(id) {
   try {
      const res = await axios.delete(`${urls.schedules.remove}/${id}`, {
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
import axios from 'axios';
import { ls, urls } from '../config';

export const get = {
   schedules,
}

async function schedules() {
   try {
      const res = await axios.get(urls.schedules.get, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(ls.user)}`
         }
      })

      return res
   } catch (err) {
      console.error(err);
   }
};

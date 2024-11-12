import axios from 'axios';
import { DATA, URLS } from '../data';

export const get = {
   data
}

async function data() {
   try {
      const res = await axios.get(`${URLS.base}${URLS.data.get}`, {
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(DATA.LOCAL_STORAGE_TOKEN)}`
         }
      })

      return res
   } catch (err) {
      console.error(err);
   }
};
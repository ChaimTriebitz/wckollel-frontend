import axios from 'axios';
import { DATA, URLS } from '../data';

export const create = {
   single
}

async function single(data) {
   try {
      const res = await axios.post(`${URLS.base}${URLS.data.create}`, data, {
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
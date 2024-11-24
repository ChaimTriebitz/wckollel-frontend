import axios from 'axios';
import { DATA, URLS } from '../data';

export const get = {
   schedules,
   zmanim
}

async function schedules() {
   try {
      const res = await axios.get(`${URLS.base}${URLS.schedules.get}`, {
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
async function zmanim() {
   try {
      const res = await axios.get(`${URLS.base}${URLS.zmanim.get}`, {
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
import axios from 'axios';
import { ls, urls } from '../config'

export const create = {
   schedule,
   donation
}

async function schedule(data) {
   try {
      const res = await axios.post(urls.schedules.create, data, {
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
async function donation(data) {
   
   try {
      const response = await axios.post(urls.donations.donate, data);
      return response.data
   } catch (error) {
      throw error
   }
}



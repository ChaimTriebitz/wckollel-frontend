import axios from 'axios';
import { useGlobalState } from './useGlobalState';
import { ACTIONS } from '../state';
import { DATA } from '../data';

export const useLogInUser = () => {
   const { dispatch } = useGlobalState()
   return async () => {
      try {
         const { data } = await axios.get(`https://vito-back.onrender.com/api/private`, {
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem(DATA.LOCAL_STORAGE_TOKEN)}`
            }
         })
         dispatch({ type: ACTIONS.SET, entity: 'loggedInUser', payload: data.user })
      } catch (error) {
         console.log(error);
      }
   }

}
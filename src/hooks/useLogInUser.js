import axios from 'axios';
import { useGlobalState } from './useGlobalState';
import { ACTIONS } from '../state';
import { DATA, URLS } from '../data';
import { useState } from 'react';

export const useLogInUser = () => {
   const { dispatch } = useGlobalState()
   const login = async () => {
      try {
         const { data } = await axios.get(`${URLS.base}${URLS.private.get}`, {
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

   return login

}
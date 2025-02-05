import axios from 'axios'
import { ls, urls } from '../config'

export const auth = {
   register,
   login
}

async function register(data) {
   try {
      const res = await axios.post(urls.auth.register, data)
      localStorage.setItem(ls.user, res.data.token)
      return res
   } catch (err) {
      throw err
   }
}

async function login(data) {
   try {
      const res = await axios.post(urls.auth.login, data)
      localStorage.setItem(ls.user, res.data.token)
      return res
   } catch (err) {
      throw err
   }
}
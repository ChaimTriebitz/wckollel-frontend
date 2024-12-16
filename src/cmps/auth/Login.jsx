import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm, useLogInUser } from '../../hooks'
import { DATA, URLS } from '../../data'

export const Login = () => {
   const { values, handleChange } = useForm({ username: '', password: '' })

   const login = useLogInUser()
   const [err, setErr] = useState('')

   const handleSubmit = async (e) => {

      e.preventDefault()

      try {
         const res = await axios.post(`${URLS.base}${URLS.auth.login}`, { ...values })
         const data = res?.data
         if (data.success) {
            localStorage.setItem(DATA.LOCAL_STORAGE_TOKEN, data.token)
            login()
         }
      } catch (error) {
         setErr(error.response?.data.error)
      }
   }


   return (
      <form className='login form' onSubmit={handleSubmit}>
         <h4>Login</h4>
         <div className="input">
            <label htmlFor="username">username</label>
            <input
               id='username'
               name='username'
               value={values.username}
               onChange={handleChange} />
         </div>
         <div className="input">
            <label htmlFor="password">password</label>
            <input id='password' name='password' value={values.password} onChange={handleChange} />
         </div>
         <button className='btn success'>submit</button>
         <p className='error'>{err}</p>
      </form>
   )
}

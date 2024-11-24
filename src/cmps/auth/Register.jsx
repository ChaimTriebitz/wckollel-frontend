import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDialog, useForm, useGlobalState, useLogInUser } from '../../hooks'
import { ACTIONS } from '../../state'
import { DATA, URLS } from '../../data'
import App from '../../App'

export const Register = () => {
   const { dispatch } = useGlobalState()
   const login = useLogInUser()
   const { values, handleChange } = useForm({ username: '', email: '', password: '', })
   const navigate = useNavigate()
   const [err, setErr] = useState('')
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const { data } = await axios.post(`${URLS.base}${URLS.auth.register}`, { ...values })
         localStorage.setItem(DATA.LOCAL_STORAGE_TOKEN, data.token)
         navigate('/')
         login()
      } catch (error) {
         setErr(error.response.data.error)
      }
   }


   return (
      <div className="register">

         <h1>Register</h1>
         <form className='form' onSubmit={handleSubmit}>
            <div className="input">
               <label htmlFor="name">name</label>
               <input
                  id='name'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
               />
            </div>
            <div className="input">
               <label htmlFor="email">email</label>
               <input
                  id='email'
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
               />
            </div>
            <div className="input">
               <label htmlFor="password">password</label>
               <input
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
               />
            </div>
            <button className='btn success'>submit</button>
         </form>
         {/* <Link to='/login'>Login</Link> */}
         <h2>{err}</h2>
      </div>


   )
}

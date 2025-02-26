import { useState } from 'react'
import { useForm } from '../../hooks'
import { auth } from '../../controllers'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
   const { values, handleChange } = useForm({ username: '', password: '' })
   const [err, setErr] = useState('')
   const navigate = useNavigate()
   const handleSubmit = async (e) => {
      e.preventDefault()
      auth.login(values)
         .then(() => {
            navigate('/admin')
         }).catch((error) =>
            setErr(error.response.data.error)
         )
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
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
         </div>
         <div className="input">
            <label htmlFor="password">password</label>
            <input
               id='password'
               name='password'
               value={values.password}
               onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
         </div>
         <button className='btn success'>submit</button>
         <p className='error'>{err}</p>
      </form>
   )
}
